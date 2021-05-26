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
import {BiIconComponent} from './pages/bi-icon/bi-icon.component';
import {ManualResultComponent} from './pages/cpanel/manual-result/manual-result.component';






// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => import('./modules/general/auth/auth.module')
      .then(mod => mod.AuthModule),
    data: {
      loginType: 'All'
    }
  },
  {
    path: 'player',
    loadChildren: () => import('./modules/general/auth/auth.module')
      .then(mod => mod.AuthModule),
    data: {
      loginType: 'Terminal'
    }
  },
  {
    path: 'power',
    loadChildren: () => import('./modules/general/auth/auth.module')
      .then(mod => mod.AuthModule),
    data: {
      loginType: 'Admin'
    }
  },
  {
    path: 'cPanel',
    loadChildren: () => import('./modules/general/cpanel/cpanel.module')
      .then(mod => mod.CpanelModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./modules/general/cpanel/manual-result/manual-result.module')
      .then(mod => mod.ManualResultModule)
  },
  {
    path: 'terminal',
    loadChildren: () => import('./modules/general/terminal/terminal.module')
      .then(mod => mod.TerminalModule)
  },
  {
    path: 'developer',
    loadChildren: () => import('./modules/general/developer/developer.module')
      .then(mod => mod.DeveloperModule)
  },
  {
    path: 'stockistCPanel',
    loadChildren: () => import('./modules/general/stockist/stockist.module')
      .then(mod => mod.StockistModule)
  },
  {
    path: 'bi-icon',
    loadChildren: () => import('./modules/general/bi-icon/bi-icon.module')
      .then(mod => mod.BiIconModule)
  },
  // {path: 'auth', component: AuthComponent},
  // {path: 'player', component: AuthComponent},
  // {path: 'power', component: AuthComponent},
  // {path: 'cPanel', canActivate : [AuthGuardAdminServiceService], component: CpanelComponent},
  // {path: 'stockistCPanel', canActivate : [AuthGuardStockistServiceService], component: StockistComponent},
  // {path: 'terminal', canActivate : [AuthGuardTerminalServiceService], component: TerminalComponent},
  // {path: 'developer', canActivate : [AuthGuardDeveloperServiceService], component: DeveloperComponent},
  // {path: 'manual', canActivate : [AuthGuardAdminServiceService], component: ManualResultComponent},
  // {path: 'bi-icon', component: BiIconComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
