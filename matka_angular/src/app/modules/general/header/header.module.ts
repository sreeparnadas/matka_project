import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import {HeaderComponent} from '../../../pages/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSliderModule,
    MatListModule,
    FlexModule
  ]
})
export class HeaderModule { }
