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
  numberCombinationsForOne: NumberCombinations[] = [];
  numberCombinationsForTwo: NumberCombinations[] = [];
  numberCombinationsForThree: NumberCombinations[] = [];
  numberCombinationsForFour: NumberCombinations[] = [];
  numberCombinationsForFive: NumberCombinations[] = [];
  numberCombinationsForSix: NumberCombinations[] = [];
  numberCombinationsForSeven: NumberCombinations[] = [];
  numberCombinationsForEight: NumberCombinations[] = [];
  numberCombinationsForNine: NumberCombinations[] = [];

  numberCombinationsSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForOneSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForTwoSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForThreeSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForFourSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForFiveSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForSixSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForSevenSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForEightSubject = new Subject<NumberCombinations[]>();
  numberCombinationsForNineSubject = new Subject<NumberCombinations[]>();

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

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/2').subscribe((response: ServerResponse) => {
        this.numberCombinationsForOne = response.data;
        this.numberCombinationsForOneSubject.next([...this.numberCombinationsForOne]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/3').subscribe((response: ServerResponse) => {
        this.numberCombinationsForTwo = response.data;
        this.numberCombinationsForTwoSubject.next([...this.numberCombinationsForTwo]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/4').subscribe((response: ServerResponse) => {
        this.numberCombinationsForThree = response.data;
        this.numberCombinationsForThreeSubject.next([...this.numberCombinationsForThree]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/5').subscribe((response: ServerResponse) => {
        this.numberCombinationsForFour = response.data;
        this.numberCombinationsForFourSubject.next([...this.numberCombinationsForFour]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/6').subscribe((response: ServerResponse) => {
        this.numberCombinationsForFive = response.data;
        this.numberCombinationsForFiveSubject.next([...this.numberCombinationsForFive]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/7').subscribe((response: ServerResponse) => {
        this.numberCombinationsForSix = response.data;
        this.numberCombinationsForSixSubject.next([...this.numberCombinationsForSix]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/8').subscribe((response: ServerResponse) => {
        this.numberCombinationsForSeven = response.data;
        this.numberCombinationsForSevenSubject.next([...this.numberCombinationsForSeven]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/9').subscribe((response: ServerResponse) => {
        this.numberCombinationsForEight = response.data;
        this.numberCombinationsForEightSubject.next([...this.numberCombinationsForEight]);
      });

      this.http.get(GlobalVariable.BASE_API_URL + '/numberCombinations/number/10').subscribe((response: ServerResponse) => {
        this.numberCombinationsForNine = response.data;
        this.numberCombinationsForNineSubject.next([...this.numberCombinationsForNine]);
      });
  }

  getSingleNumbers(){
    return [...this.singleNumbers];
  }
  getSingleNumberListener(){
    return this.singleNumberSubject.asObservable();
  }

  // get triple numbers list by single number 0
  getAllTripleNumbers(){
    return [...this.numberCombinations];
  }
  getAllTripleNumberListener(){
    return this.numberCombinationsSubject.asObservable();
  }

  // get triple numbers list by single number 1
  getNumberCombinationsForOne(){
    return [...this.numberCombinationsForOne];
  }
  getNumberCombinationsForOneListener(){
    return this.numberCombinationsForOneSubject.asObservable();
  }

  // get triple numbers list by single number 2
  getNumberCombinationsForTwo(){
    return [...this.numberCombinationsForTwo];
  }
  getNumberCombinationsForTwoListener(){
    return this.numberCombinationsForTwoSubject.asObservable();
  }

  // get triple numbers list by single number 3
  getNumberCombinationsForThree(){
    return [...this.numberCombinationsForThree];
  }
  getNumberCombinationsForThreeListener(){
    return this.numberCombinationsForThreeSubject.asObservable();
  }

  // get triple numbers list by single number 4
  getNumberCombinationsForFour(){
    return [...this.numberCombinationsForFour];
  }
  getNumberCombinationsForFourListener(){
    return this.numberCombinationsForFourSubject.asObservable();
  }

  // get triple numbers list by single number 5
  getNumberCombinationsForFive(){
    return [...this.numberCombinationsForFive];
  }
  getNumberCombinationsForFiveListener(){
    return this.numberCombinationsForFiveSubject.asObservable();
  }

  // get triple numbers list by single number 6
  getNumberCombinationsForSix(){
    return [...this.numberCombinationsForSix];
  }
  getNumberCombinationsForSixListener(){
    return this.numberCombinationsForThreeSubject.asObservable();
  }

  // get triple numbers list by single number 7
  getNumberCombinationsForSeven(){
    return [...this.numberCombinationsForSeven];
  }
  getNumberCombinationsForSevenListener(){
    return this.numberCombinationsForSevenSubject.asObservable();
  }

  // get triple numbers list by single number 8
  getNumberCombinationsForEight(){
    return [...this.numberCombinationsForEight];
  }
  getNumberCombinationsForEightListener(){
    return this.numberCombinationsForEightSubject.asObservable();
  }

  // get triple numbers list by single number 9
  getNumberCombinationsForNine(){
    return [...this.numberCombinationsForNine];
  }
  getNumberCombinationsForNineListener(){
    return this.numberCombinationsForNineSubject.asObservable();
  }

}
