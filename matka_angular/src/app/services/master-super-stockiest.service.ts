import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {StockistMaster} from '../models/StockistMaster.model';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ServerResponse} from '../models/ServerResponse.model';
import {SuperStockist} from '../models/SuperStockist.model';
import {Subject} from 'rxjs';
import {Stockist} from '../models/Stockist.model';

@Injectable({
  providedIn: 'root'
})
export class MasterSuperStockiestService {
  private BASE_API_URL = environment.BASE_API_URL;
  superStockist: SuperStockist[] = [];
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
}
