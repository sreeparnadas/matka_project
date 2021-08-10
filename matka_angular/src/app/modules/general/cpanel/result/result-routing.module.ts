import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardAdminServiceService } from 'src/app/services/auth-guard-admin-service.service';
import {ResultComponent} from '../../../../pages/cpanel/result/result.component';

const routes: Routes = [
  { path: '',
    canActivate : [AuthGuardAdminServiceService],
    component: ResultComponent,
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
export class ResultRoutingModule { }
