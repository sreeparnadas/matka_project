import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CpanelComponent} from '../../../pages/cpanel/cpanel.component';
import {AuthGuardAdminServiceService} from '../../../services/auth-guard-admin-service.service';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardAdminServiceService], component: CpanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpanelRoutingModule { }
