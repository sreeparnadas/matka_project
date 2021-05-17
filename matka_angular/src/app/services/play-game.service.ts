import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from '../shared/global';
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

  numberCombinations: NumberCombinations[] = [];
  numberCombinationsSubject = new Subject<NumberCombinations[]>();

  constructor(private http: HttpClient) {
    // get single numbers
      this.http.get(GlobalVariable.BASE_API_URL + '/singleNumbers').subscribe((response: ServerResponse) => {
        this.singleNumbers = response.data;
        this.singleNumberSubject.next([...this.singleNumbers]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/1').subscribe((response: ServerResponse) => {
        this.numberCombinations = response.data;
        this.numberCombinationsSubject.next([...this.numberCombinations]);
    });
  }

  getSingleNumbers(){
    return [...this.singleNumbers];
  }
  getSingleNumberListener(){
    return this.singleNumberSubject.asObservable();
  }

  // get triple numbers list by single number
  getAllTripleNumbers(){
    return [...this.numberCombinations];
  }

  getAllTripleNumberListener(){
    return this.numberCombinationsSubject.asObservable();
  }
}
