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
import {MasterStockistComponent} from './pages/cpanel/master-stockist/master-stockist.component';






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
    path: 'masterStockist',
    loadChildren: () => import('./modules/general/cpanel/master-stockist/master-stockist.module')
      .then(mod => mod.MasterStockistModule)
  },

  {
    path: 'superStockistPanel',
    loadChildren: () => import('./modules/general/super-stockist-panel/super-stockist-panel-routing.module')
      .then(mod => mod.SuperStockistPanelRoutingModule)
  },

  {
    path: 'superStockistMasterStockist',
    loadChildren: () => import('./modules/general/super-stockist-panel/master-stockist/master-stockist-routing.module')
      .then(mod => mod.MasterStockistRoutingModule)
  },

  {
    path: 'superStockistMasterTerminal',
    loadChildren: () => import('./modules/general/super-stockist-panel/master-terminal/master-terminal.module')
      .then(mod => mod.MasterTerminalModule)
  },

  {
    path: 'superStockistReport',
    loadChildren: () => import('./modules/general/super-stockist-panel/super-stockist-report/super-stockist-report-routing.module')
      .then(mod => mod.SuperStockistReportRoutingModule)
  },

  {
    path: 'cPanelSettings',
    loadChildren: () => import('./modules/general/cpanel/settings/settings.module')
      .then(mod => mod.SettingsModule)
  },

  {
    path: 'cPanelSuperStockist',
    loadChildren: () => import('./modules/general/cpanel/master-super-stockist/master-super-stockist.module')
      .then(mod => mod.MasterSuperStockistModule)
  },

  {
    path: 'masterTerminal',
    loadChildren: () => import('./modules/general/cpanel/master-terminal/master-terminal.module')
      .then(mod => mod.MasterTerminalModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./modules/general/cpanel/manual-result/manual-result.module')
      .then(mod => mod.ManualResultModule)
  },
  {
    path: 'payoutSettings',
    loadChildren: () => import('./modules/general/cpanel/payout-setting/payout-setting.module')
      .then(mod => mod.PayoutSettingModule)
  },
  {
    path: 'stockiestMasterTerminal',
    loadChildren: () => import('./modules/general/stockistPanel/master-terminal/master-terminal.module')
      .then(mod => mod.MasterTerminalModule)
  },
  {
    path: 'stockiestResult',
    loadChildren: () => import('./modules/general/stockistPanel/stockist-result/stockist-result.module')
      .then(mod => mod.StockistResultModule)
  },

  {
  path: 'stockiestReport',
  loadChildren: () => import('./modules/general/stockistPanel/stockist-report/stockist-report.module')
  .then(mod => mod.StockistReportModule)
  },
  {
    path: 'cPanelReports',
    loadChildren: () => import('./modules/general/cpanel/admin-reports/admin-reports.module')
      .then(mod => mod.AdminReportsModule)
  },
  {
    path: 'resultCPanel',
    loadChildren: () => import('./modules/general/cpanel/result/result.module')
      .then(mod => mod.ResultModule)
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
    path: 'terminalReport',
    loadChildren: () => import('./modules/general/terminal-report/terminal-report.module')
      .then(mod => mod.TerminalReportModule)
  },

  {
    path: 'bi-icon',
    loadChildren: () => import('./modules/general/bi-icon/bi-icon.module')
      .then(mod => mod.BiIconModule)
  },
  { path: 'Receipt', loadChildren: () => import('./pages/cpanel/receipt/receipt.module').then(m => m.ReceiptModule) },
  // {path: 'auth', component: AuthComponent},
  // {path: 'player', component: AuthComponent},
  // {path: 'power', component: AuthComponent},
  // {path: 'cPanel', canActivate : [AuthGuardAdminServiceService], component: CpanelComponent},
  // {path: 'stockistCPanel', canActivate : [AuthGuardStockistServiceService], component: StockistComponent},
  // {path: 'terminal', canActivate : [AuthGuardTerminalServiceService], component: TerminalComponent},
  // {path: 'developer', canActivate : [AuthGuardDeveloperServiceService], component: DeveloperComponent},
  // {path: 'manual', canActivate : [AuthGuardAdminServiceService], component: ManualResultComponent},
  // {path: 'masterStockist', canActivate : [AuthGuardAdminServiceService], component: MasterStockistComponent},
  // {path: 'bi-icon', component: BiIconComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
