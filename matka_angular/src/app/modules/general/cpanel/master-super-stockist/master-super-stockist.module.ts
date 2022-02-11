import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterSuperStockistRoutingModule } from './master-super-stockist-routing.module';
import {MasterSuperStockistComponent} from "../../../../pages/cpanel/master-super-stockist/master-super-stockist.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MaterialModule} from "../../../../core/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    MasterSuperStockistRoutingModule,
    MatTabsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [
    MasterSuperStockistComponent
  ],
  declarations: [
    MasterSuperStockistComponent
  ]
})
export class MasterSuperStockistModule { }
