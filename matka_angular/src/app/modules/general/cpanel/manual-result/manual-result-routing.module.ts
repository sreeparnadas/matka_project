import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardAdminServiceService} from '../../../../services/auth-guard-admin-service.service';
import {ManualResultComponent} from '../../../../pages/cpanel/manual-result/manual-result.component';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardAdminServiceService], component: ManualResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualResultRoutingModule { }
