import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {StockistMaster} from '../models/StockistMaster.model';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterSuperStockiestService {
  private BASE_API_URL = environment.BASE_API_URL;


  constructor(private http: HttpClient, private errorService: ErrorService) {

  }

  saveNewSuperStockist(superStockist){
    return this.http.post<StockistMaster>(this.BASE_API_URL + '/createSuperStockist', superStockist)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // console.log('service ', response);
      }));
  }
}
