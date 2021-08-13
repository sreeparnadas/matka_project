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
import {TerminalSaleReport} from "../models/TerminaSaleReport.model";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class TerminalReportService {
  private BASE_API_URL = environment.BASE_API_URL;
  barcodeReportRecords: TerminalBarcodeReport[] = [];
  terminalSaleRRecords: TerminalSaleReport[] = [];
  userData: User = JSON.parse(localStorage.getItem('user'));

  barcodeReportRecordsSubject = new Subject<TerminalBarcodeReport[]>();
  terminalSaleRecordsSubject = new Subject<TerminalSaleReport[]>();

  terminalListListener(){
    return this.barcodeReportRecordsSubject.asObservable();
  }

  terminalSaleListListener(){
    return this.terminalSaleRecordsSubject.asObservable();
  }

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) {

    // console.log(userData.userId);
    // this.http.post<{success: number; data: any}>( this.BASE_API_URL + '/terminal/barcodeReport', {terminalId: userData.userId})
    //   .pipe(catchError(this.handleError), tap(((response: {success: number, data: TerminalBarcodeReport[]}) => {
    //     console.log(response);
    //     // if (response.data){
    //     //   console.log(response);
    //     // }
    //   })));
  }

  cancelTicket(master_id){
    return this.http.post( this.BASE_API_URL + '/cancelTicket', {play_master_id: master_id})
      .pipe(catchError(this.handleError), tap(((response: {success: number, id:number ,data: TerminalBarcodeReport[], point: number}) => {
        if(response.data){
          // const userData =localStorage.getItem('user');
          this.authService.updateUserBalance(response.point);
          const index = this.barcodeReportRecords.findIndex(x=>x.play_master_id === response.id);
          this.barcodeReportRecords[index].is_cancelled = 1;
          this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords]);
        }
      })));
  }

  claimPrize(master_id){
    return this.http.post( this.BASE_API_URL + '/claimPrize', {play_master_id: master_id})
      .pipe(catchError(this.handleError), tap(((response: {success: number, point: number, id:number}) => {
        if(response.point){
          this.authService.updateUserBalance(response.point);
          const index = this.barcodeReportRecords.findIndex(x=>x.play_master_id === response.id);
          this.barcodeReportRecords[index].is_claimed = 1;
          this.barcodeReportRecords[index].is_cancelled = 1;
          this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords]);
        }
      })));
  }

  getTerminalReport(userId,startDate,endDate){
    return this.http.post( this.BASE_API_URL + '/terminal/barcodeReport', {terminalId: userId,startDate, endDate: endDate })
      .pipe(catchError(this.handleError), tap(((response: {success: number, data: TerminalBarcodeReport[]}) => {
        if(response.data){
          this.barcodeReportRecords = response.data;
          this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords]);
        }
      })));
  }

  getTerminalSaleReport(userId,startDate,endDate){
    return this.http.post( this.BASE_API_URL + '/terminal/terminal_sale_reports', {terminalId: userId,startDate, endDate: endDate })
      .pipe(catchError(this.handleError), tap(((response: {success: number, data: TerminalSaleReport[]}) => {
        if(response.data){
          this.terminalSaleRRecords = response.data;
          this.terminalSaleRecordsSubject.next([...this.terminalSaleRRecords]);
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
