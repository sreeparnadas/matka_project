import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeveloperComponent} from '../../../pages/developer/developer.component';
import {AuthGuardDeveloperServiceService} from '../../../services/auth-guard-developer-service.service';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardDeveloperServiceService], component: DeveloperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRoutingModule { }
