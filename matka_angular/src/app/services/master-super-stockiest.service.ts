import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ErrorService} from './error.service';
import {StockistMaster} from '../models/StockistMaster.model';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ServerResponse} from '../models/ServerResponse.model';
import {SuperStockist} from '../models/SuperStockist.model';
import {Subject, throwError} from 'rxjs';
import {Stockist} from '../models/Stockist.model';
import {CPanelBarcodeReport} from '../models/CPanelBarcodeReport.model';
import {CPanelCustomerSaleReport} from "../models/CPanelCustomerSaleReport.model";

@Injectable({
  providedIn: 'root'
})
export class MasterSuperStockiestService {
  private BASE_API_URL = environment.BASE_API_URL;
  superStockist: SuperStockist[] = [];
  barcodeReportRecords: CPanelBarcodeReport[] = [];
  superStockistSubject = new Subject<SuperStockist[]>();

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getSuperStockist').subscribe((response: ServerResponse) => {
      this.superStockist = response.data;
      this.superStockistSubject.next([...this.superStockist]);
    });
  }

  getSuperStockistListener(){
    return this.superStockistSubject.asObservable();
  }

  getSuperStockist(){
    return [...this.superStockist]
  }

  saveNewSuperStockist(superStockist){
    return this.http.post<StockistMaster>(this.BASE_API_URL + '/createSuperStockist', superStockist)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }

  updateSuperStockist(superStockist){
    return this.http.put<StockistMaster>(this.BASE_API_URL + '/superStockist', superStockist)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }

  barcodeReportBySuperStockistId(startDate, endDate, superStockiestId){
    return this.http.post<{success: number; data: any}>( this.BASE_API_URL + '/superStockist/barcodeReportByDate', {startDate, endDate, superStockiestId})
      .pipe(catchError(this.handleError), tap(((response: ServerResponse) => {
        // if (response.data){
        //   this.barcodeReportRecords = response.data;
        //   this.barcodeReportSubject.next([...this.barcodeReportRecords]);
        // }
      })));
  }

  saveSuperStockistBalance(superStockist){
    return this.http.put<StockistMaster>(this.BASE_API_URL + '/superStockists/balance', superStockist)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }

  checkPinAvailability(pin){
    return this.http.post<{success: number}>(this.BASE_API_URL + '/checkAvailability', {pin})
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }

  customerSaleReportByDate(startDate, endDate, superStockiestId){
    return this.http.post<{success: number; data: any}>( this.BASE_API_URL + '/superStockist/customerSaleReports', {startDate, endDate, superStockiestId})
      .pipe(catchError(this.handleError), tap(((response: {success: number, data: CPanelCustomerSaleReport[]}) => {
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
