import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthResponseData, AuthService} from '../../services/auth.service';
import {StorageMap} from '@ngx-pwa/local-storage';
import {Md5} from 'ts-md5';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { faAtlas} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  faAtlas = faAtlas;
  loginForm: FormGroup;
  constructor(private authService: AuthService, private storage: StorageMap, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(){
    this.isLoading = true;
    let authObserable = new Observable<AuthResponseData>();
    // converting password to MD5
    const md5 = new Md5();
    const passwordMd5 = md5.appendStr(this.loginForm.value.password).end();
    // const formPassword = form.value.password;

    authObserable = this.authService.login({email: this.loginForm.value.email, password: passwordMd5});
    authObserable.subscribe(response => {
      // tslint:disable-next-line:triple-equals
      if (response.success === 1){
        this.isLoading = false;
        // tslint:disable-next-line:triple-equals
        if (response.data.user.userTypeId == 1){
          this.router.navigate(['/cPanel']).then(r => {});
        }
        // tslint:disable-next-line:triple-equals
        if (response.data.user.userTypeId == 2){
          this.router.navigate(['/developer']).then(r => {});
        }
        // tslint:disable-next-line:triple-equals
        if (response.data.user.userTypeId == 3){
          this.router.navigate(['/stockistCPanel']).then(r => {});
        }
        // tslint:disable-next-line:triple-equals
        if (response.data.user.userTypeId == 4){
          this.router.navigate(['/terminal']).then(r => {});
        }
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'User ID or Password is wrong',
          showConfirmButton: false,
          timer: 1000
        });
        this.isLoading = false;
      }
    }, (error) => {
      console.log(error.message);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error.message,
        showConfirmButton: false,
        timer: 2000
      });
      this.isLoading = false;
    });
  }
}
