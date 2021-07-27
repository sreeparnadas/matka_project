import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutSettingRoutingModule } from './payout-setting-routing.module';
import { PayoutSettingComponent } from 'src/app/pages/cpanel/payout-setting/payout-setting.component';


@NgModule({

  imports: [
    CommonModule,
    PayoutSettingRoutingModule
  ],
  exports: [
    PayoutSettingComponent
  ],
  declarations: [
    PayoutSettingComponent
  ]
})

export class PayoutSettingModule { }
