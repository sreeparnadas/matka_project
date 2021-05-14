import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
// global.ts file is created in shared folder to store all global variables.
import {GlobalVariable} from '../shared/global';

export interface AuthResponseData {
  success: number;
  data: {
    user: {
          userId: number,
          pin: string,
          userName: string,
          userTypeId: number,
          userTypeName: string
    };
    token: string;
  };
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }
  isAuthenticated(){
    console.log('I am checking', this.user.value);
    if (this.user.value){
      return true;
    }else{
      return false;
    }
  }
  isAdmin(){
    if (this.user.value){
      if (this.user.value.isAdmin){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  isDeveloper(): boolean{
    if (this.user.value && this.user.value.isDeveloper){
      return true;
    }else{
      return false;
    }
  }
  autoLogin(){
    // tslint:disable-next-line:max-line-length
    const userData: {id: number, userName: string, _authKey: string, userTypeId: number, userTypeName: string} = JSON.parse(localStorage.getItem('user'));
    if (!userData){
      return;
    }
    const loadedUser = new User(userData.id, userData.userName, userData._authKey, userData.userTypeId, userData.userTypeName);
    if (loadedUser.authKey){
      this.user.next(loadedUser);
      if (loadedUser.isAdmin){
        this.router.navigate(['/cPanel']);
      }else if (loadedUser.isDeveloper){
        this.router.navigate(['/developer']);
      }
    }
  }
  login(loginData){
    return this.http.post<AuthResponseData>(GlobalVariable.BASE_API_URL + '/login', loginData)
      .pipe(catchError(this.serverError), tap(resData => {
        // tslint:disable-next-line:max-line-length
        // console.log(resData);
        if (resData.success === 1){
            const user = new User(resData.data.user.userId,
            resData.data.user.userName,
            resData.data.token,
            resData.data.user.userTypeId,
              resData.data.user.userTypeName);
            this.user.next(user); // here two user is used one is user and another user is subject of rxjs
            localStorage.setItem('user', JSON.stringify(user));
          }
      }));  // this.handleError is a method created by me
  }



  logout(){
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth']).then(r => {
      if (r) {
        location.reload();
      }
    });
    // location.reload();
    // this.router.navigate(['/auth']);
  }

  private serverError(err: any) {
    // console.log('sever error:', err);  // debug
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
    console.log(errorResponse);
    if (errorResponse.error.message.includes('1062')){
      return throwError('Record already exists');
    }else {
      return throwError(errorResponse.error.message);
    }
  }


}
