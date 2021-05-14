import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {AuthGuardService} from './services/auth-guard.service';
import {CpanelComponent} from './pages/cpanel/cpanel.component';
import {StockistComponent} from './pages/stockist/stockist.component';
import {TerminalComponent} from './pages/terminal/terminal.component';
import {DeveloperComponent} from './pages/developer/developer.component';
import {AuthGuardAdminServiceService} from './services/auth-guard-admin-service.service';
import {AuthGuardDeveloperServiceService} from './services/auth-guard-developer-service.service';
import {AuthGuardTerminalServiceService} from './services/auth-guard-terminal-service.service';
import {AuthGuardStockistServiceService} from './services/auth-guard-stockist-service.service';






// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'cPanel', canActivate : [AuthGuardAdminServiceService], component: CpanelComponent},
  {path: 'stockistCPanel', canActivate : [AuthGuardStockistServiceService], component: StockistComponent},
  {path: 'terminal', canActivate : [AuthGuardTerminalServiceService], component: TerminalComponent},
  {path: 'developer', canActivate : [AuthGuardDeveloperServiceService], component: DeveloperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
