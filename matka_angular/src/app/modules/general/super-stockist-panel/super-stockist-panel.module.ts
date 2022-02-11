import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperStockistPanelRoutingModule } from './super-stockist-panel-routing.module';
import {SuperStockistComponent} from '../../../pages/super-stockist/super-stockist.component';


@NgModule({
  declarations: [SuperStockistComponent],
  imports: [
    CommonModule,
    SuperStockistPanelRoutingModule
  ],
  exports: [
    SuperStockistComponent
  ]
})
export class SuperStockistPanelModule { }
