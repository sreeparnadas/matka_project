import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from '../../../pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class HomeModule { }
