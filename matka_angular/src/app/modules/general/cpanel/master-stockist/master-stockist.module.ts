import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterStockistRoutingModule } from './master-stockist-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MasterStockistComponent} from '../../../../pages/cpanel/master-stockist/master-stockist.component';


@NgModule({
  imports: [
    CommonModule,
    MasterStockistRoutingModule,
    MatTabsModule
  ],
  exports: [
    MasterStockistComponent
  ],
  declarations: [
    MasterStockistComponent
  ]
})
export class MasterStockistModule { }
