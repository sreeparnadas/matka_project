import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from '../shared/global';
import {ServerResponse} from '../models/ServerResponse.model';
import {SingleNumber} from '../models/SingleNumber.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PlayGameService {
  singleNumbers: SingleNumber[] = [];
  singleNumberSubject = new Subject<SingleNumber[]>();
  constructor(private http: HttpClient) {
    // get single numbers
      this.http.get(GlobalVariable.BASE_API_URL + '/singleNumbers').subscribe((response: ServerResponse) => {
        this.singleNumbers = response.data;
        this.singleNumberSubject.next([...this.singleNumbers]);
      });
      this.getTripleNumbersBySingleNumber(2);
  }

  getSingleNumbers(){
    return [...this.singleNumbers];
  }
  getSingleNumberListener(){
    return this.singleNumberSubject.asObservable();
  }

  // get triple numbers list by single number
  getTripleNumbersBySingleNumber(single){
    this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/' + single).subscribe((response: ServerResponse) => {
      console.log(response.data);
    });
  }
}
