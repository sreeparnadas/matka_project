import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from '../../../pages/auth/auth.component';
import {MatCardModule} from '@angular/material/card';
import {LoadingSpinnerComponent} from '../../../shared/loading-spinner/loading-spinner.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule
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
