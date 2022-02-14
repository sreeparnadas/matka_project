import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {environment} from '../../environments/environment';
import {StockistMaster} from '../models/StockistMaster.model';
import {ServerResponse} from '../models/ServerResponse.model';
import {Stockist} from '../models/Stockist.model';
import {Subject} from 'rxjs';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MasterStockistService {

  private BASE_API_URL = environment.BASE_API_URL;
  masterStockistForm: FormGroup;
  stockists: Stockist[] = [];
  stockistsBySuperStockist: Stockist[] = [];
  user: User;
  stockistSubject = new Subject<Stockist[]>();
  stockistsBySuperStockistSubject = new Subject<Stockist[]>();
  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.masterStockistForm = new FormGroup({
      id : new FormControl(null),
      stockistName : new FormControl(null, [Validators.required]),
      loginId : new FormControl(null),
    });
    const User = JSON.parse(localStorage.getItem('user'));
    // get all stockists
    // this.http.get(this.BASE_API_URL + '/stockists/'+ User.userId ).subscribe((response: ServerResponse) => {
    this.http.get(this.BASE_API_URL + '/stockists').subscribe((response: ServerResponse) => {
      this.stockists = response.data;
      this.stockistSubject.next([...this.stockists]);
    });
   }

   getStockists(){
    return [...this.stockists];
   }

  getStockistBySuperStockistListener(){
    return this.stockistsBySuperStockistSubject.asObservable();
  }

   getStockistListener(){
    return this.stockistSubject.asObservable();
   }



   updateStockiist(stockist){
    return this.http.put<StockistMaster>(this.BASE_API_URL + '/stockists', stockist)
    .pipe(catchError(this.errorService.serverError),tap(response => {

    }));
  }

  saveNewStockist(stockist){
    return this.http.post<StockistMaster>(this.BASE_API_URL + '/stockists', stockist)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }

  saveStockistBalance(stockist){
    return this.http.put<StockistMaster>(this.BASE_API_URL + '/stockists/balance', stockist)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }

  getStockistBySuperStockist($id){
    this.http.get(this.BASE_API_URL + '/stockistsBySuperStockist/' + $id).subscribe((response: ServerResponse) => {
      this.stockistsBySuperStockist = response.data;
      this.stockistsBySuperStockistSubject.next([...this.stockistsBySuperStockist]);
    });
  }

}
