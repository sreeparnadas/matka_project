import { Injectable } from '@angular/core';
import {Subject, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {CPanelBarcodeReport} from "../models/CPanelBarcodeReport.model";
import {TerminalBarcodeReport} from "../models/TerminalBarcodeReport.model";
import {User} from "../models/user.model";
import {catchError, tap} from "rxjs/operators";
import {CPanelCustomerSaleReport} from "../models/CPanelCustomerSaleReport.model";


@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class TerminalReportService {
  private BASE_API_URL = environment.BASE_API_URL;
  barcodeReportRecords: TerminalBarcodeReport[] = [];
  userData: User = JSON.parse(localStorage.getItem('user'));

  barcodeReportRecordsSubject = new Subject<TerminalBarcodeReport[]>();

  terminalListListener(){
    return this.barcodeReportRecordsSubject.asObservable();
  }

  constructor(private http: HttpClient, private errorService: ErrorService) {

    // console.log(userData.userId);
    // this.http.post<{success: number; data: any}>( this.BASE_API_URL + '/terminal/barcodeReport', {terminalId: userData.userId})
    //   .pipe(catchError(this.handleError), tap(((response: {success: number, data: TerminalBarcodeReport[]}) => {
    //     console.log(response);
    //     // if (response.data){
    //     //   console.log(response);
    //     // }
    //   })));
  }

  getTerminalReport(userId){
    console.log("terminal_id",userId);
    return this.http.post( this.BASE_API_URL + '/terminal/barcodeReport', {terminalId: userId})
      .pipe(catchError(this.handleError), tap(((response: {success: number, data: TerminalBarcodeReport[]}) => {
        if(response.data){
          this.barcodeReportRecords = response.data;
          this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords]);
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