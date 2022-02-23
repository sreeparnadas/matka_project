import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperStockistReportRoutingModule } from './super-stockist-report-routing.module';
import {SuperStockistReportComponent} from '../../../../pages/super-stockist/super-stockist-report/super-stockist-report.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MaterialModule} from '../../../../core/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {NgbModalModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBRootModule} from 'angular-bootstrap-md';
import {PopoverModule} from 'ngx-smart-popover';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [SuperStockistReportComponent],
  exports: [SuperStockistReportComponent],
  imports: [
    CommonModule,
    SuperStockistReportRoutingModule,
    MatTabsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSortModule,
    NgbToastModule,
    NgbModalModule,
    MDBRootModule,
    PopoverModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
  ]
})
export class SuperStockistReportModule { }
