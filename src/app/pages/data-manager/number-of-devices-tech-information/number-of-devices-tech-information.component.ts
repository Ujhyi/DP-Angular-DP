import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MasterService } from '../../../service/master.service';
import { map } from 'rxjs';
import { parseString } from 'xml2js';
import { FormsModule } from '@angular/forms';

interface Model {
  modelName: string;
  totalStock: number;
  totalSold: number;
  remaining: number;
  productType: string;
  stockFromDate: string;
  stockToEndDate: string;
}

interface Brand {
  brandName: string;
  models: Model[];
}

@Component({
  selector: 'app-number-of-devices-tech-information',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './number-of-devices-tech-information.component.html',
  styleUrls: ['./number-of-devices-tech-information.component.css'],
  providers: [DatePipe]
})
export class NumberOfDevicesTechInformationComponent implements OnInit {
  stockData: any[] = [];
  startDate: string = '';
  endDate: string = '';
  summary: Brand[] = [];
  errorMessage: string = '';
  summaryData: any[] = [];

  searchByBrandOrIdQuery: string = '';
  searchQuery: string = '';

  filteredStockData = this.stockData;
  filteredSummaryData: Brand[] = [];
  showAllDetails: boolean = false;


  private datePipe = inject(DatePipe);
  private masterSrv = inject(MasterService);

  ngOnInit(): void {
    if (this.startDate && this.endDate) {
      this.onDateChange();
    }
  }

  onDateChange(): void {
    if (this.startDate && this.endDate) {
      this.errorMessage = '';
      this.fetchStockData();
      this.getStockData();
      this.fetchData();
      this.filteredStockData = this.stockData; // Reset to all stock data after date selection
      this.filteredSummaryData = this.summary; // Reset summary as well
    } else {
      this.errorMessage = 'Both start date and end date are required.';
    }
  }

  fetchData(): void {
    if (this.startDate && this.endDate) {
      const formattedStartDate = this.datePipe.transform(this.startDate, 'MM-dd-yyyy');
      const formattedEndDate = this.datePipe.transform(this.endDate, 'MM-dd-yyyy');

      this.masterSrv.getStockInformationByDateRangeTechInf2(formattedStartDate!, formattedEndDate!)
        .subscribe(
          (data) => {
            this.summary = this.parseXmlData(data);
            this.filteredSummaryData = this.summary;  // Initialize filtered data
          },
          (error) => {
            console.error('Error fetching data', error);
          }
        );
    } else {
      console.error('Start date or end date is not selected.');
    }
  }

  getStockData(): void {
    const formattedStartDate = this.datePipe.transform(this.startDate, 'MM-dd-yyyy');
    const formattedEndDate = this.datePipe.transform(this.endDate, 'MM-dd-yyyy');

    this.masterSrv.getStockInformationByDateRangeTechInf2(formattedStartDate!, formattedEndDate!)
      .subscribe({
        next: (response) => {
          parseString(response, (err, result) => {
            if (!err) {
              this.summaryData = result.SoldProductsInfo.Summary[0].Brand;
            } else {
              console.error('Error parsing XML:', err);
            }
          });
        },
        error: (error) => console.error('Error fetching data:', error)
      });
  }

  fetchStockData(): void {
    const formattedStartDate = this.datePipe.transform(this.startDate, 'MM-dd-yyyy');
    const formattedEndDate = this.datePipe.transform(this.endDate, 'MM-dd-yyyy');

    this.masterSrv.getStockInformationByDateRangeTechInf1(formattedStartDate!, formattedEndDate!).pipe(
      map((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml');
        const products = Array.from(xmlDoc.getElementsByTagName('Monitor'))
          .concat(Array.from(xmlDoc.getElementsByTagName('Television')))
          .concat(Array.from(xmlDoc.getElementsByTagName('Projector')));

        return products.map((product: any) => {
          const obj: any = {};
          Array.from(product.childNodes).forEach((node: any) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              obj[node.nodeName] = node.textContent;
            }
          });
          return obj;
        });
      })
    ).subscribe({
      next: (data) => {
        this.stockData = data;
        this.filteredStockData = this.stockData; // Reset filtered data to show all initially
      },
      error: (err) => {
        this.errorMessage = `Error: ${err}`;
      },
    });
  }

  parseXmlData(xmlData: string): Brand[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
    const productsInfo = xmlDoc.getElementsByTagName('Brand');
    let summary: Brand[] = [];

    for (let i = 0; i < productsInfo.length; i++) {
      const brandName = productsInfo[i].getElementsByTagName('brandName')[0]?.textContent || '';
      const models = productsInfo[i].getElementsByTagName('Model');
      let brandModels: Model[] = [];
      for (let j = 0; j < models.length; j++) {
        const modelName = models[j].getElementsByTagName('modelName')[0]?.textContent || '';
        const totalStock = models[j].getElementsByTagName('totalStock')[0]?.textContent || '';
        const totalSold = models[j].getElementsByTagName('totalSold')[0]?.textContent || '';
        const remaining = models[j].getElementsByTagName('remaining')[0]?.textContent || '';
        const productType = models[j].getElementsByTagName('productType')[0]?.textContent || '';
        const stockFromDate = models[j].getElementsByTagName('stockFromDate')[0]?.textContent || '';
        const stockToEndDate = models[j].getElementsByTagName('stockToEndDate')[0]?.textContent || '';

        // Replace comma with a dot for proper number conversion
        const sanitizedTotalStock = parseFloat(totalStock.replace(',', '.'));
        const sanitizedTotalSold = parseFloat(totalSold.replace(',', '.'));
        const sanitizedRemaining = parseFloat(remaining.replace(',', '.'));

        brandModels.push({
          modelName,
          totalStock: sanitizedTotalStock,
          totalSold: sanitizedTotalSold,
          remaining: sanitizedRemaining,
          productType,
          stockFromDate,
          stockToEndDate,
        });
      }
      summary.push({
        brandName,
        models: brandModels
      });
    }
    return summary;
  }

  // New method to filter stock data by brand or ID
  filterStockDataByBrandOrId(): void {
    if (this.searchByBrandOrIdQuery) {
      this.filteredStockData = this.stockData.filter((product) => {
        const searchQueryLower = this.searchByBrandOrIdQuery.toLowerCase();
        return (
          product.brand.toLowerCase().includes(searchQueryLower) || // Filter by brand
          product.id.toLowerCase().includes(searchQueryLower) // Filter by ID
        );
      });
    } else {
      this.filteredStockData = this.stockData; // Reset if query is empty
    }
  }

  filterStockData(): void {
    if (!this.searchQuery) {
      this.filteredSummaryData = this.summary;
    } else {
      this.filteredSummaryData = this.summary.map((brand: Brand) => {
        const brandMatches = brand.brandName.toLowerCase().includes(this.searchQuery.toLowerCase());
        const filteredModels = brand.models.filter((model: Model) =>
          model.modelName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        if (brandMatches || filteredModels.length > 0) {
          return {
            ...brand,
            models: filteredModels.length > 0 ? filteredModels : brand.models
          };
        } else {
          return null;
        }
      }).filter(brand => brand !== null);
    }
  }

  toggleAllDetails(): void {
    this.showAllDetails = !this.showAllDetails;
  }
}
