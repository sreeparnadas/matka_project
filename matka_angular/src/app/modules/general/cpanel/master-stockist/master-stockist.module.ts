import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterStockistRoutingModule } from './master-stockist-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MasterStockistComponent} from '../../../../pages/cpanel/master-stockist/master-stockist.component';
import {MaterialModule} from '../../../../core/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    CommonModule,
    MasterStockistRoutingModule,
    MatTabsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  exports: [
    MasterStockistComponent
  ],
  declarations: [
    MasterStockistComponent
  ]
})
export class MasterStockistModule { }
