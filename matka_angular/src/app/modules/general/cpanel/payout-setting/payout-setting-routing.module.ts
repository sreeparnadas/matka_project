import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardAdminServiceService} from '../../../../services/auth-guard-admin-service.service';
import {PayoutSettingComponent} from '../../../../pages/cpanel/payout-setting/payout-setting.component';


const routes: Routes = [
  {
    path: 'payoutSettings',
    canActivate : [AuthGuardAdminServiceService],
    component: PayoutSettingComponent,
    data: {
      title: 'About',
      description: 'Description Meta Tag Content',
      ogUrl: 'your og url'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutSettingRoutingModule { }
