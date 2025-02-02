import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';

interface LoginResponse {
  d: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class MasterService {

/*
  private monitorUrl = 'http://localhost:51834/WebService.asmx/GetMonitors';
  private televisionsUrl = 'http://localhost:51834/WebService.asmx/GetTelevision';
  private projectorsUrl = 'http://localhost:51834/WebService.asmx/GetProjector';
  private addNewDeviceUrl = 'http://localhost:51834/WebService.asmx/AddProduct';
  private deleteDeviceUrl = 'http://localhost:51834/WebService.asmx/DeleteProduct';
  private sellDeviceUrl = 'http://localhost:51834/WebService.asmx/SellProducts';
  private editDeviceUrl = 'http://localhost:51834/WebService.asmx/EditDevice';
  private countDevicesUrl = 'http://localhost:51834/WebService.asmx/CountDevices';
  private countDeviceByDateUrl = 'http://localhost:51834/WebService.asmx/GetStockInformation_StartDateToEndDate';
  private countDeviceByDateDetailTech1 = 'http://localhost:51834/WebService.asmx/GetStockInformation_StartDateToEndDate_1';
  private countDeviceByDateDetailTech2 = 'http://localhost:51834/WebService.asmx/GetStockInformation_StartDateToEndDate_2';
  private countModel = 'http://localhost:51834/WebService.asmx/GetModelCounts';
  private salesRevenueUrl = 'http://localhost:51834/WebService.asmx/SalesRevenue';
  private salesRevenueByDateUrl = 'http://localhost:51834/WebService.asmx/CalculateRevenueByDate';
  private salesLogsUrl = 'http://localhost:51834/WebService.asmx/DisplaySalesLogs';
  private filterDeviceUrl = 'http://localhost:51834/WebService.asmx/GetFilteredProducts';
  private getAll = 'http://localhost:51834/WebService.asmx/ReadXML';

  private createUserUrl = 'http://localhost:51834/WebService.asmx/CreateUser';
  private loginUserUrl = 'http://localhost:51834/WebService.asmx/Login';
  private changeUserPassword = 'http://localhost:51834/WebService.asmx/ChangePassword';

  constructor(private http: HttpClient) { }


  createUser(username: string, password: string): Observable<boolean> {
    const body = { username, password };
    return this.http.post<boolean>(this.createUserUrl, body);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUserUrl, { username, password }).pipe(
      map(response => {
        console.log('Backend Response:', response); // Log the full response
        return response;  // Ensure the response is passed correctly
      }),
      catchError((error) => {
        console.error('Login Error:', error);
        throw error;  // Handle error appropriately
      })
    );
  }

  changePassword(username: string, oldPassword: string, newPassword: string): Observable<boolean> {
    const body = { username, oldPassword, newPassword};
    return this.http.post<boolean>(this.changeUserPassword, body);
  }


  getMonitors(): Observable<any> { return this.http.post(this.monitorUrl, null, { responseType: 'text' }); }
  getTelevisions(): Observable<any> { return this.http.post(this.televisionsUrl, null, { responseType: 'text' }); }
  getProjectors(): Observable<any> { return this.http.post(this.projectorsUrl, null, { responseType: 'text' }); }
  deleteProduct(productType: string, id: string): Observable<any> { return this.http.post<string>(this.deleteDeviceUrl, { productType, id }); }
  sellDevice(productType: string, id: string): Observable<any> { return this.http.post(this.sellDeviceUrl, { productType, id }); }
  addNewDevice(productType: string, brand: string, model: string, displaySize: string, refreshRate: string, displayTech: string, maxResolutions: string,
               connections: string, output: string, speaker: string, smart: string, os: string, bluetooth: string, wirelessConnections: string,
               productionYear: number, vesa: string, color: string, price: number, stockDate: Date, pixelResolutions: string, stock: number
  ): Observable<any> { return this.http.post(this.addNewDeviceUrl, { productType, brand, model, displaySize, refreshRate, displayTech, maxResolutions,
    connections, output, speaker, smart, os, bluetooth, wirelessConnections, productionYear, vesa, color, price, stockDate, pixelResolutions, stock
  }); }
  editDevice(id: string, productType: string, brand: string, displaySize: string, refreshRate: string, displayTech: string, maxResolutions: string, stock: string,
             pixelResolutions: string, connections: string, output: string, speaker: string, smart: string, os: string, bluetooth: string, wirelessConnections: string,
             productionYear: string, VESA: string, color: string, price: string, stockDate: string): Observable<any> {
    return this.http.post(this.editDeviceUrl, {id, productType, brand, displaySize, refreshRate, displayTech, maxResolutions, stock, pixelResolutions, connections,
      output, speaker, smart, os, bluetooth, wirelessConnections, productionYear, VESA, color, price, stockDate});
  }
  getSalesLogs(): Observable<any> { return this.http.post(this.salesLogsUrl, null, { responseType: 'text' }); }
  getSalesRevenue(): Observable<any> { return this.http.post(this.salesRevenueUrl, null, { responseType: 'text' }); }
  calculateRevenueByDate(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.salesRevenueByDateUrl, body, { headers, responseType: 'text' });
  }
  countDevice(): Observable<any> { return this.http.post(this.countDevicesUrl, null, { responseType: 'text' }); }
  countDeviceByDate(startDate: string, endDate: string): Observable<string>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateUrl, body, { headers, responseType: 'text' });
  }
  getStockInformationByDateRange(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateUrl, body, { headers, responseType: 'text' });
  }
  getFilteredProducts(params: any): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `productType=${encodeURIComponent(params.productType)}&` +
      `displaySize=${encodeURIComponent(params.displaySize)}&` +
      `brand=${encodeURIComponent(params.brand)}&` +
      `maxResolutions=${encodeURIComponent(params.maxResolutions)}&` +
      `stockDate=${encodeURIComponent(params.stockDate)}&` +
      `sortByPrice=${encodeURIComponent(params.sortByPrice)}`;
    return this.http.post(this.filterDeviceUrl, body, { headers, responseType: 'text' });
  }
  getStockInformationByDateRangeTechInf1(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateDetailTech1, body, { headers, responseType: 'text' });
  }
  getStockInformationByDateRangeTechInf2(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateDetailTech2, body, { headers, responseType: 'text' });
  }*/

  private monitorUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/GetMonitors';
  private televisionsUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/GetTelevision';
  private projectorsUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/GetProjector';
  private sellDeviceUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/SellProducts';
  private deleteDeviceUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/DeleteProduct';
  private salesLogsUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/DisplaySalesLogs';
  private addNewDeviceUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/AddProduct';
  private filterDeviceUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/GetFilteredProducts';
  private salesRevenueUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/SalesRevenue';
  private countDeviceByDateUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/GetStockInformation_StartDateToEndDate';
  private countDevicesUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/CountDevices';
  private countDeviceByDateDetailTech1 = 'https://dp-asmx.com/MyASMXService/WebService.asmx/GetStockInformation_StartDateToEndDate_1';
  private countDeviceByDateDetailTech2 = 'https://dp-asmx.com/MyASMXService/WebService.asmx/GetStockInformation_StartDateToEndDate_2';
  private salesRevenueByDateUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/CalculateRevenueByDate';
  private editDeviceUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/EditDevice';
  private createUserUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/CreateUser';

  private changeUserPasswordUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/ChangePassword';

  private loginUserUrl = 'https://dp-asmx.com/MyASMXService/WebService.asmx/Login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post(this.loginUserUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    }).pipe(
      map(response => {
        console.log('Raw Response:', response);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml');
        console.log('Parsed XML:', xmlDoc);
        const booleanElement = xmlDoc.getElementsByTagNameNS('http://tempuri.org/', 'boolean')[0];
        const message = booleanElement ? booleanElement.textContent?.trim() === 'true' : false;
        console.log('Login response message:', message); // For debugging
        return message;
      })
    );
  }

  createUser(username: string, password: string): Observable<boolean> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post(this.createUserUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text', // Treat the response as text (XML)
    }).pipe(
      map(response => {
        console.log('Raw XML Response:', response); // Log the raw response for debugging

        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml');

        // Log the parsed XML document for debugging
        console.log('Parsed XML:', xmlDoc);

        // Extract the <boolean> element from the XML
        const booleanElement = xmlDoc.getElementsByTagNameNS('http://tempuri.org/', 'boolean')[0];

        // Check the text content of the <boolean> element
        const success = booleanElement ? booleanElement.textContent === 'true' : false;

        console.log('Create User Success:', success); // For debugging

        return success; // Return the boolean indicating whether the user was successfully created
      })
    );
  }


  changePassword(username: string, oldPassword: string, newPassword: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);  // Correctly set the values for the body
    body.set('oldPassword', oldPassword);
    body.set('newPassword', newPassword);

    return this.http.post(this.changeUserPasswordUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text' // This ensures that the response is treated as plain text, not JSON
    }).pipe(
      map(response => {
        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'text/xml');

        // Check if there are any parsing errors in the XML
        const errorNode = xmlDoc.querySelector('parsererror');
        if (errorNode) {
          throw new Error('Error parsing XML response');
        }

        // Extract the message from the XML response
        const message = xmlDoc.querySelector('Message')?.textContent;

        // Return the parsed data (or any other processing you want)
        return { message };
      }),
      catchError(error => {
        // Handle any errors (e.g., network errors, parsing errors)
        console.error('Error occurred while changing password', error);
        return throwError('Error occurred while changing password');
      })
    );
  }



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
