import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  private monitorUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/GetMonitors';
  private televisionsUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/GetTelevision';
  private projectorsUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/GetProjector';
  private sellDeviceUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/SellProducts';
  private deleteDeviceUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/DeleteProduct';
  private salesLogsUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/DisplaySalesLogs';
  private addNewDeviceUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/AddProduct';
  private filterDeviceUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/GetFilteredProducts';
  private salesRevenueUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/SalesRevenue';
  private countDeviceByDateUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/GetStockInformation_StartDateToEndDate';
  private countDevicesUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/CountDevices';
  private countDeviceByDateDetailTech1 = 'https://20.64.238.96/MyASMXService/WebService.asmx/GetStockInformation_StartDateToEndDate_1';
  private countDeviceByDateDetailTech2 = 'https://20.64.238.96/MyASMXService/WebService.asmx/GetStockInformation_StartDateToEndDate_2';
  private salesRevenueByDateUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/CalculateRevenueByDate';
  private editDeviceUrl = 'https://20.64.238.96/MyASMXService/WebService.asmx/EditDevice';



  private countModel = 'http://localhost:51834/WebService.asmx/GetModelCounts';
  private getAll = 'http://localhost:51834/WebService.asmx/ReadXML';


  constructor(private http: HttpClient) { }

  getMonitors(): Observable<any> { return this.http.post(this.monitorUrl, null, { responseType: 'text' }); }
  getTelevisions(): Observable<any> { return this.http.post(this.televisionsUrl, null, { responseType: 'text' }); }
  getProjectors(): Observable<any> { return this.http.post(this.projectorsUrl, null, { responseType: 'text' }); }
  getSalesLogs(): Observable<any> { return this.http.post(this.salesLogsUrl, null, { responseType: 'text' }); }
  getSalesRevenue(): Observable<any> { return this.http.post(this.salesRevenueUrl, null, { responseType: 'text' }); }

  sellDevice(productType: string, id: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('productType', productType);
    body.set('id', id);

    return this.http.post(this.sellDeviceUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  deleteProduct(productType: string, id: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('productType', productType);
    body.set('id', id);
    return this.http.post(this.deleteDeviceUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  countDeviceByDate(startDate: string, endDate: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('startDate', startDate);
    body.set('endDate', endDate);

    return this.http.post(this.countDeviceByDateUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    });
  }

  getStockInformationByDateRangeTechInf1(startDate: string, endDate: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('startDate', startDate);
    body.set('endDate', endDate);

    return this.http.post(this.countDeviceByDateDetailTech1, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    });
  }

  getStockInformationByDateRangeTechInf2(startDate: string, endDate: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('startDate', startDate);
    body.set('endDate', endDate);

    return this.http.post(this.countDeviceByDateDetailTech2, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    });
  }

  getFilteredProducts(params: any): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    if (params.stockDate instanceof Date) {
      params.stockDate = params.stockDate.toISOString();
    }
    const body = Object.keys(params)
      .filter(key => params[key] !== undefined && params[key] !== null)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
    return this.http.post(this.filterDeviceUrl, body, { headers, responseType: 'text' });
  }

  calculateRevenueByDate(startDate: string, endDate: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('startDate', startDate);
    body.set('endDate', endDate);

    return this.http.post(this.salesRevenueByDateUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    });
  }

  addNewDevice(productType: string, brand: string, model: string, displaySize: string, refreshRate: string, displayTech: string, maxResolutions: string,
               connections: string, output: string, speaker: string, smart: string, os: string, bluetooth: string, wirelessConnections: string,
               productionYear: number, vesa: string, color: string, price: number, stockDate: Date, pixelResolutions: string, stock: number
  ): Observable<any> {
    const body = new URLSearchParams();
    body.set('productType', productType);
    body.set('brand', brand);
    body.set('model', model);
    body.set('displaySize', displaySize);
    body.set('refreshRate', refreshRate);
    body.set('displayTech', displayTech);
    body.set('maxResolutions', maxResolutions);
    body.set('connections', connections);
    body.set('output', output);
    body.set('speaker', speaker);
    body.set('smart', smart);
    body.set('os', os);
    body.set('bluetooth', bluetooth);
    body.set('wirelessConnections', wirelessConnections);
    body.set('productionYear', productionYear.toString());
    body.set('vesa', vesa);
    body.set('color', color);
    body.set('price', price.toString());
    body.set('stockDate', stockDate.toString());
    body.set('pixelResolutions', pixelResolutions);
    body.set('stock', stock.toString());

    return this.http.post(this.addNewDeviceUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  editDevice(id: string, productType: string, brand: string, displaySize: string, refreshRate: string, displayTech: string, maxResolutions: string, stock: string,
             pixelResolutions: string, connections: string, output: string, speaker: string, smart: string, os: string, bluetooth: string, wirelessConnections: string,
             productionYear: string, VESA: string, color: string, price: string, stockDate: string
  ): Observable<any> {
    const body = new URLSearchParams();
    body.set('id', id);
    body.set('productType', productType);
    body.set('brand', brand);
    body.set('displaySize', displaySize);
    body.set('refreshRate', refreshRate);
    body.set('displayTech', displayTech);
    body.set('maxResolutions', maxResolutions);
    body.set('connections', connections);
    body.set('output', output);
    body.set('speaker', speaker);
    body.set('smart', smart);
    body.set('os', os);
    body.set('bluetooth', bluetooth);
    body.set('wirelessConnections', wirelessConnections);
    body.set('productionYear', productionYear.toString());
    body.set('VESA', VESA);
    body.set('color', color);
    body.set('price', price.toString());
    body.set('stockDate', stockDate.toString());
    body.set('pixelResolutions', pixelResolutions);
    body.set('stock', stock.toString());

    return this.http.post(this.editDeviceUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  countDevice(): Observable<any> { return this.http.post(this.countDevicesUrl, null, { responseType: 'text' }); }

  getStockInformationByDateRange(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateUrl, body, { headers, responseType: 'text' });
  }

}
