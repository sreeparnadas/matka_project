import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from 'src/app/pages/cpanel/settings/settings.component';
import { AuthGuardAdminServiceService } from 'src/app/services/auth-guard-admin-service.service';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardAdminServiceService], component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
