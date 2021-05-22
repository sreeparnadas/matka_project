import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServerResponse} from '../models/ServerResponse.model';
import {SingleNumber} from '../models/SingleNumber.model';
import {Subject} from 'rxjs';
import {NumberCombinations} from '../models/NumberCombinations.model';


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



  constructor(private http: HttpClient) {
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
}
