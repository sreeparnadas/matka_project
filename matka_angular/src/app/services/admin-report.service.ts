import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {ErrorService} from './error.service';
import {ServerResponse} from '../models/ServerResponse.model';
import {CPanelBarcodeReport} from '../models/CPanelBarcodeReport.model';
import {Subject, throwError} from 'rxjs';
import {BarcodeDetails} from '../models/BarcodeDetails.model';
import {CPanelCustomerSaleReport} from '../models/CPanelCustomerSaleReport.model';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AdminReportService {
  private BASE_API_URL = environment.BASE_API_URL;
  barcodeReportRecords: CPanelBarcodeReport[] = [];
  barcodeReportSubject = new Subject<CPanelBarcodeReport[]>();

  barcodeDetails: BarcodeDetails;
  barcodeDetailsSubject = new Subject<BarcodeDetails>();

  customerSaleReportRecords: CPanelCustomerSaleReport[] = [];
  customerSaleReportSubject = new Subject<CPanelCustomerSaleReport[]>();

  constructor(private http: HttpClient, private errorService: ErrorService) {
    // // get all barcode reports
    // this.http.get(this.BASE_API_URL + '/cPanel/barcodeReport').subscribe((response: ServerResponse) => {
    //   this.barcodeReportRecords = response.data;
    //   this.barcodeReportSubject.next([...this.barcodeReportRecords]);
    // });
    //
    // // get all customer sale reports
    // this.http.get(this.BASE_API_URL + '/cPanel/customerSaleReport').subscribe((response: ServerResponse) => {
    //   this.customerSaleReportRecords = response.data;
    //   this.customerSaleReportSubject.next([...this.customerSaleReportRecords]);
    // });
  }

  getBarcodeReportRecords(){
    return [...this.barcodeReportRecords];
  }
  getBarcodeReportListener(){
    return this.barcodeReportSubject.asObservable();
  }

  getCustomerSaleReportRecords(){
    return [...this.customerSaleReportRecords];
  }
  getCustomerSaleReportListener(){
    return this.customerSaleReportSubject.asObservable();
  }

  getBarcodeDetails(playMasterId: number){
    return this.http.get<{success: number; data: BarcodeDetails}>(this.BASE_API_URL + '/cPanel/barcodeReport/particulars/' + playMasterId)
      .pipe(catchError(this.handleError), tap((response: {success: number, data: BarcodeDetails}) => {
        this.barcodeDetails = response.data;
        this.barcodeDetailsSubject.next({...this.barcodeDetails});
      }));
  }
  getBarcodeDetailsListener(){
    return this.barcodeDetailsSubject.asObservable();
  }

  customerSaleReportByDate(startDate, endDate){
    return this.http.post<{success: number; data: any}>( this.BASE_API_URL + '/cPanel/customerSaleReports', {startDate, endDate})
      .pipe(catchError(this.handleError), tap(((response: {success: number, data: CPanelCustomerSaleReport[]}) => {
        if (response.data){
          this.customerSaleReportRecords = response.data;
          this.customerSaleReportSubject.next([...this.customerSaleReportRecords]);
        }
      })));
  }

  barcodeReportByDate(startDate, endDate){
    return this.http.post<{success: number; data: any}>( this.BASE_API_URL + '/cPanel/barcodeReportByDate', {startDate, endDate})
      .pipe(catchError(this.handleError), tap(((response: ServerResponse) => {
        if (response.data){
          this.barcodeReportRecords = response.data;
          this.barcodeReportSubject.next([...this.barcodeReportRecords]);
        }
      })));
  }


  private serverError(err: any) {
    if (err instanceof Response) {
      return throwError('backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      // return Observable.throw(err.text() || 'backend server error');
    }
    if (err.status === 0){
      // tslint:disable-next-line:label-position
      return throwError ({status: err.status, message: 'Backend Server is not Working', statusText: err.statusText});
    }
    if (err.status === 401){
      // tslint:disable-next-line:label-position
      return throwError ({status: err.status, message: 'Your are not authorised', statusText: err.statusText});
    }
    return throwError(err);
  }
  private handleError(errorResponse: HttpErrorResponse){
    if (errorResponse.error.message.includes('1062')){
      return throwError('Record already exists');
    }else {
      return throwError(errorResponse.error.message);
    }
  }
}
