import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Terminal} from '../models/Terminal.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {ServerResponse} from '../models/ServerResponse.model';
import {StockistMaster} from '../models/StockistMaster.model';
import {catchError, tap} from 'rxjs/operators';
import {TerminalMaster} from '../models/TerminalMaster.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MasterTerminalService {

  private BASE_API_URL = environment.BASE_API_URL;
  terminals: Terminal[] = [];
  terminalSubject = new Subject<Terminal[]>();
  constructor(private http: HttpClient, private errorService: ErrorService) {

    // get all terminals
    this.http.get(this.BASE_API_URL + '/terminals').subscribe((response: ServerResponse) => {
      this.terminals = response.data;
      this.terminalSubject.next([...this.terminals]);
    });
  }

  getTerminals(){
    return [...this.terminals];
  }
  getTerminalListener(){
    return this.terminalSubject.asObservable();
  }

  saveNewTerminal(terminal){
    return this.http.post<TerminalMaster>(this.BASE_API_URL + '/terminals', terminal)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }
  updateTerminal(terminal){
    return this.http.put<TerminalMaster>(this.BASE_API_URL + '/terminals', terminal)
    .pipe(catchError(this.errorService.serverError), tap(response => {

    }));
  }

  saveTerminalBalance(terminal){
    return this.http.put<TerminalMaster>(this.BASE_API_URL + '/terminals/balance', terminal)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }
}
