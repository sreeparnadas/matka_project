import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServerResponse} from '../models/ServerResponse.model';
import {SingleNumber} from '../models/SingleNumber.model';
import {Subject} from 'rxjs';
import {NumberCombinations} from '../models/NumberCombinations.model';
import {catchError, tap} from 'rxjs/operators';
import {ErrorService} from './error.service';


export interface GameInputSaveResponse{
  success: number;
  data: {
    play_master: {
      barcodeNumber: string,
      drawTime: object,
      terminal: object
    },
    play_details: []
  };
  error?: any;
}

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PlayGameService {
  singleNumbers: SingleNumber[] = [];
  singleNumberSubject = new Subject<SingleNumber[]>();
  numberCombinationMatrix: SingleNumber[] = [];
  numberCombinationMatrixSubject = new Subject<SingleNumber[]>();
  private BASE_API_URL = environment.BASE_API_URL;



  constructor(private http: HttpClient, private errorService: ErrorService) {
    // get single numbers
      this.http.get(this.BASE_API_URL + '/singleNumbers').subscribe((response: ServerResponse) => {
        this.singleNumbers = response.data;
        this.singleNumberSubject.next([...this.singleNumbers]);
      });

      this.http.get(this.BASE_API_URL + '/numberCombinations/matrix').subscribe((response: ServerResponse) => {
      this.numberCombinationMatrix = response.data;
      this.numberCombinationMatrixSubject.next([...this.numberCombinationMatrix]);
    });

  }

  getSingleNumbers(){
    return [...this.singleNumbers];
  }
  getSingleNumberListener(){
    return this.singleNumberSubject.asObservable();
  }

  getNumberCombinationMatrix(){
    return [...this.numberCombinationMatrix];
  }
  getNumberCombinationMatrixListener(){
    return this.numberCombinationMatrixSubject.asObservable();
  }

  saveUserPlayInputDetails(inputData){

    return this.http.post<GameInputSaveResponse>(this.BASE_API_URL + '/buyTicket', inputData)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        console.log('service ', response);
    }));
  }
}
