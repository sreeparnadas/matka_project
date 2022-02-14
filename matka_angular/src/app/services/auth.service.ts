import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
// global.ts file is created in shared folder to store all global variables.
import {environment} from '../../environments/environment';

export interface AuthResponseData {
  success: number;
  data: {
    user: User;
    token: string;
  };
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_API_URL = environment.BASE_API_URL;
  userBehaviorSubject = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated(){
    if (this.userBehaviorSubject.value){
      return true;
    }else{
      return false;
    }
  }
  isAdmin(){
    if (this.userBehaviorSubject.value && this.userBehaviorSubject.value.isAdmin){
     return true;
    }else{
      return false;
    }
  }
  isDeveloper(): boolean{
    if (this.userBehaviorSubject.value && this.userBehaviorSubject.value.isDeveloper){
      return true;
    }else{
      return false;
    }
  }
  isStockist(): boolean{
    if (this.userBehaviorSubject.value && this.userBehaviorSubject.value.isStockist){
      return true;
    }else{
      return false;
    }
  }

  isTerminal(): boolean{
    if (this.userBehaviorSubject.value && this.userBehaviorSubject.value.isTerminal){
      return true;
    }else{
      return false;
    }
  }

  isSuperStockist(): boolean{
    if (this.userBehaviorSubject.value && this.userBehaviorSubject.value.isSuperStockist){
      return true;
    }else{
      return false;
    }
  }

  autoLogin(){
    // tslint:disable-next-line:max-line-length
    const userData: User = JSON.parse(localStorage.getItem('user'));
    // console.log('test : ' , userData);
    if (!userData){
      return;
    }
    // tslint:disable-next-line:max-line-length
    const loadedUser = new User(userData.userId, userData.userName, userData._authKey, userData.userTypeId, userData.userTypeName, userData.balance, userData.commission);
    if (loadedUser.authKey){
      this.userBehaviorSubject.next(loadedUser);

      // if (loadedUser.isAdmin){
      //   this.router.navigate(['/cPanel']);
      // }
    }
  }

  login(loginData){
    return this.http.post<AuthResponseData>(this.BASE_API_URL + '/login', loginData)
      .pipe(catchError(this.serverError), tap(resData => {
        // tslint:disable-next-line:max-line-length
        if (resData.success === 1){
            const user = new User(resData.data.user.userId,
            resData.data.user.userName,
            resData.data.token,
            resData.data.user.userTypeId,
              resData.data.user.userTypeName,
          resData.data.user.balance,
          resData.data.user.commission);
            this.userBehaviorSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
          }
      }));  // this.handleError is a method created by me
  }

  updateUserBalance(newBalance: number){
    const userData: User = JSON.parse(localStorage.getItem('user'));
    // tslint:disable-next-line:max-line-length
    const loadedUser = new User(userData.userId, userData.userName, userData._authKey, userData.userTypeId, userData.userTypeName, newBalance, userData.commission);
    // userData.balance = newBalance;
    this.userBehaviorSubject.next(loadedUser); // here two user is used one is user and another user is subject of rxjs
    localStorage.setItem('user', JSON.stringify(loadedUser));
  }
  // Deduct user balance by new number
  deductUserBalanceBy(deductibleAmount: number){
    const userData: User = JSON.parse(localStorage.getItem('user'));
    // tslint:disable-next-line:max-line-length
    const loadedUser = new User(userData.userId, userData.userName, userData._authKey, userData.userTypeId, userData.userTypeName, (userData.balance - deductibleAmount), userData.commission);
    // userData.balance = newBalance;
    this.userBehaviorSubject.next(loadedUser); // here two user is used one is user and another user is subject of rxjs
    localStorage.setItem('user', JSON.stringify(loadedUser));
  }

  // Deduct user balance by new number
  setUserBalanceBy(balance: number){
    const userData: User = JSON.parse(localStorage.getItem('user'));
    // tslint:disable-next-line:max-line-length
    const loadedUser = new User(userData.userId, userData.userName, userData._authKey, userData.userTypeId, userData.userTypeName, balance, userData.commission);
    // userData.balance = newBalance;
    this.userBehaviorSubject.next(loadedUser); // here two user is used one is user and another user is subject of rxjs
    localStorage.setItem('user', JSON.stringify(loadedUser));
  }

  logout(){
    const userData: User = JSON.parse(localStorage.getItem('user'));
    this.userBehaviorSubject.next(null);
    localStorage.removeItem('user');
    if (userData.userTypeId === 4){
      this.router.navigate(['/player']).then(r => {
        if (r) {
          location.reload();
        }
      });
    }else {
      this.router.navigate(['/power']).then(r => {
        if (r) {
          location.reload();
        }
      });
    }
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
