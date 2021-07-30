import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutSettingRoutingModule } from './payout-setting-routing.module';
import { PayoutSettingComponent } from 'src/app/pages/cpanel/payout-setting/payout-setting.component';
import { MatTableModule } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MaterialModule} from '../../../../core/material.module';


@NgModule({

  imports: [
    CommonModule,
    PayoutSettingRoutingModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MaterialModule
  ],
  exports: [
    PayoutSettingComponent
  ],
  declarations: [
    PayoutSettingComponent
  ]
})



export class PayoutSettingModule { }
