import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterTerminalRoutingModule } from './master-terminal-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MaterialModule} from '../../../../core/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MasterTerminalComponent} from '../../../../pages/cpanel/master-terminal/master-terminal.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MasterTerminalRoutingModule,
    MatTabsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [
    MasterTerminalComponent
  ],
  declarations: [
    MasterTerminalComponent
  ]
})
export class MasterTerminalModule { }
