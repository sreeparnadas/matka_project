import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from '../../../pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {NgxPrintModule} from "ngx-print";
import {NgxWheelModule} from "ngx-wheel";


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
    HttpClientModule,
    NgbModule,
    MatSlideToggleModule,


    MatBadgeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    NgxPrintModule,
    NgxWheelModule
  ]
})
export class HomeModule { }
