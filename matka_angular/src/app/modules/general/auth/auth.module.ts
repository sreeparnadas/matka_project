import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from '../../../pages/auth/auth.component';
import {MatCardModule} from '@angular/material/card';
import {LoadingSpinnerComponent} from '../../../shared/loading-spinner/loading-spinner.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ShowHidePasswordModule
  ],
  exports: [
    AuthComponent
  ],
  declarations: [
    AuthComponent,
    LoadingSpinnerComponent
  ],
  providers: [
  ],
})
export class AuthModule { }
