import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalRoutingModule } from './terminal-routing.module';
import {TerminalComponent} from '../../../pages/terminal/terminal.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxPrintModule} from 'ngx-print';
import {NgxWheelModule} from 'ngx-wheel';


@NgModule({
  imports: [
    CommonModule,
    TerminalRoutingModule,
    MatBadgeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    NgxPrintModule,
    NgxWheelModule
  ],
  declarations: [
    TerminalComponent
  ],
  exports: [
    TerminalComponent
  ]
})
export class TerminalModule { }
