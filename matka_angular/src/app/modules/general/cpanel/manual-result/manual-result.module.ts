import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualResultRoutingModule } from './manual-result-routing.module';
import {ManualResultComponent} from '../../../../pages/cpanel/manual-result/manual-result.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


@NgModule({

  imports: [
    CommonModule,
    ManualResultRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    ManualResultComponent
  ],
  declarations: [
    ManualResultComponent
  ]
})
export class ManualResultModule { }
