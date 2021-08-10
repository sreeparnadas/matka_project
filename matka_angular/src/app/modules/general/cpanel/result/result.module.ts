import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import {ResultComponent} from '../../../../pages/cpanel/result/result.component';


@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule
  ],
  exports: [
    ResultComponent
  ],
  declarations: [
    ResultComponent
  ]
})
export class ResultModule { }
