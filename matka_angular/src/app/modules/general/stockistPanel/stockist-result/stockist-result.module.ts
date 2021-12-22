import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockistResultRoutingModule } from './stockist-result-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPrintModule } from 'ngx-print';
import { NgxWheelModule } from 'ngx-wheel';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { CurrentResultModule } from '../../current-result/current-result.module';
import {RouterModule} from "@angular/router";
import {StockistResultComponent} from "../../../../pages/stockistPanel/stockist-result/stockist-result.component";


@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    StockistResultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,


    MatBadgeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    NgxPrintModule,
    NgxWheelModule,
    // MatProgressBarModule,
    // CurrentResultModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    StockistResultComponent
  ],
  declarations: [
    StockistResultComponent
  ]
})
export class StockistResultModule { }
