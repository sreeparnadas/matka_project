import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminReportsRoutingModule } from './admin-reports-routing.module';
import {AdminReportsComponent} from '../../../../pages/cpanel/admin-reports/admin-reports.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MaterialModule} from '../../../../core/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {NgbModalModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBRootModule} from 'angular-bootstrap-md';


@NgModule({
  imports: [
    CommonModule,
    AdminReportsRoutingModule,
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
    MDBRootModule
  ],
  exports: [
    AdminReportsComponent
  ],
  declarations: [
    AdminReportsComponent
  ]
})
export class AdminReportsModule { }
