import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockistRoutingModule } from './stockist-routing.module';
import {StockistComponent} from '../../../pages/stockist/stockist.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [StockistComponent],
  exports: [StockistComponent],
  imports: [
    CommonModule,
    StockistRoutingModule,
    MatSortModule,
    MatTableModule,
    MatIconModule
  ]
})
export class StockistModule { }
