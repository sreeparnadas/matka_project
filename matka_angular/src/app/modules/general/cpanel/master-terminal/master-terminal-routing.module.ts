import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardAdminServiceService} from '../../../../services/auth-guard-admin-service.service';
import {MasterTerminalComponent} from '../../../../pages/cpanel/master-terminal/master-terminal.component';

const routes: Routes = [
  { path: '',
    canActivate : [AuthGuardAdminServiceService],
    component: MasterTerminalComponent,
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
export class MasterTerminalRoutingModule { }
