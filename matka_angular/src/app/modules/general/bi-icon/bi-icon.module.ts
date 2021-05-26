import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiIconRoutingModule } from './bi-icon-routing.module';
import {BiIconComponent} from '../../../pages/bi-icon/bi-icon.component';


@NgModule({
  declarations: [BiIconComponent],
  exports: [BiIconComponent],
  imports: [
    CommonModule,
    BiIconRoutingModule
  ]
})
export class BiIconModule { }
