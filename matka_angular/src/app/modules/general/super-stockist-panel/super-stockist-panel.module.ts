import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperStockistPanelRoutingModule } from './super-stockist-panel-routing.module';
import {SuperStockistComponent} from '../../../pages/super-stockist/super-stockist.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [SuperStockistComponent],
  imports: [
    CommonModule,
    SuperStockistPanelRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,

  ],
  exports: [
    SuperStockistComponent
  ]
})
export class SuperStockistPanelModule { }
