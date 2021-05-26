import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockistRoutingModule } from './stockist-routing.module';
import {StockistComponent} from '../../../pages/stockist/stockist.component';


@NgModule({
  declarations: [StockistComponent],
  exports: [StockistComponent],
  imports: [
    CommonModule,
    StockistRoutingModule
  ]
})
export class StockistModule { }
