import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardAdminServiceService} from '../../../../services/auth-guard-admin-service.service';
import {PayoutSettingComponent} from '../../../../pages/cpanel/payout-setting/payout-setting.component';



const routes: Routes = [
  { path: '', canActivate : [AuthGuardAdminServiceService], component: PayoutSettingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutSettingRoutingModule { }
