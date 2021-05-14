import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {AuthGuardService} from './services/auth-guard.service';
import {CpanelComponent} from './pages/cpanel/cpanel.component';
import {StockistComponent} from './pages/stockist/stockist.component';
import {TerminalComponent} from './pages/terminal/terminal.component';
import {DeveloperComponent} from './pages/developer/developer.component';






// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'cPanel', component: CpanelComponent},
  {path: 'stockistCPanel', component: StockistComponent},
  {path: 'terminal', component: TerminalComponent},
  {path: 'developer', component: DeveloperComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
