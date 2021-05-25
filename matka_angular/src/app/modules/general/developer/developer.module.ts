import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import {DeveloperComponent} from '../../../pages/developer/developer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    DeveloperComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    MatSlideToggleModule
  ],
  exports: [
    DeveloperComponent
  ]
})
export class DeveloperModule { }
