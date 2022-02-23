// import { BrowserModule } from '@angular/platform-browser';
import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './core/material.module';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HomeComponent } from './pages/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
// import { PictureCarouselComponent } from './pages/home/picture-carousel/picture-carousel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// import { AuthComponent } from './pages/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {AuthInterceptorInterceptor} from './services/auth-interceptor.interceptor';
// import { OwnerComponent } from './pages/owner/owner.component';
// import {NgxPrintModule} from 'ngx-print';
// import {Ng2SearchPipeModule} from 'ng2-search-filter';
// import {NgxPaginationModule} from 'ngx-pagination';
// import { SncakBarComponent } from './common/sncak-bar/sncak-bar.component';
// // import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
// import { LoaidngRippleComponent } from './shared/loaidng-ripple/loaidng-ripple.component';
// import { LoaidngEllipsisComponent } from './shared/loaidng-ellipsis/loaidng-ellipsis.component';
// import { LoaidngHourglassComponent } from './shared/loaidng-hourglass/loaidng-hourglass.component';
// import { LoaidngRollerComponent } from './shared/loaidng-roller/loaidng-roller.component';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './date-format';
import { MatNativeDateModule} from '@angular/material/core';
// import {NgSelectModule} from '@ng-select/ng-select';

// import {ShowHidePasswordModule} from 'ngx-show-hide-password';



// import {PopoverModule} from 'ngx-smart-popover';
// import {LogLevel, NgxFancyLoggerModule} from 'ngx-fancy-logger';
//
// import {NgxMousetrapModule} from 'ngx-mousetrap';
// import {TooltipModule} from 'ng2-tooltip-directive';
// import { HighlightDirective } from './directives/highlight.directive';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { StockistComponent } from './pages/stockist/stockist.component';
// import { TerminalComponent } from './pages/terminal/terminal.component';
// import { DeveloperComponent } from './pages/developer/developer.component';
// import { BiIconComponent } from './pages/bi-icon/bi-icon.component';
// import { AuthModule } from './modules/general/auth/auth.module';
// import { CpanelModule } from './modules/general/cpanel/cpanel.module';
// import {ManualResultModule} from './modules/general/cpanel/manual-result/manual-result.module';
// import { TerminalModule } from './modules/general/terminal/terminal.module';
// import {DeveloperModule} from './modules/general/developer/developer.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeModule } from './modules/general/home/home.module';
import { HeaderModule } from './modules/general/header/header.module';
import { StockistModule } from './modules/general/stockist/stockist.module';
import { FooterModule } from './modules/general/footer/footer.module';
import { BiIconModule } from './modules/general/bi-icon/bi-icon.module';
import {NgxPrinterModule} from 'ngx-printer';
// import { MasterStockistComponent } from './pages/cpanel/master-stockist/master-stockist.component';
// import { MasterStockistModule } from './modules/general/cpanel/master-stockist/master-stockist.module';
import {MatTabsModule} from '@angular/material/tabs';
import {NgMarqueeModule} from 'ng-marquee-improved';
import { StockistResultComponent } from './pages/stockistPanel/stockist-result/stockist-result.component';
import { StockistResultModule } from './modules/general/stockistPanel/stockist-result/stockist-result.module';
import { SuperStockistPanelModule } from './modules/general/super-stockist-panel/super-stockist-panel.module';
import { MasterStockistModule } from './modules/general/super-stockist-panel/master-stockist/master-stockist.module';
import { MasterTerminalComponent } from './pages/super-stockist/master-terminal/master-terminal.component';
import { SuperStockistReportModule } from './modules/general/super-stockist-panel/super-stockist-report/super-stockist-report.module';
// import { SuperStockistReportComponent } from './pages/super-stockist/super-stockist-report/super-stockist-report.component';
// import { SuperStockistReportModule } from './modules/general/super-stockist-panel/super-stockist-report/super-stockist-report.module';
// import { MasterTerminalModule } from './modules/general/super-stockist-panel/master-terminal/master-terminal.module';
// import { MasterTerminalModule } from './modules/general/super-stockist/master-terminal/master-terminal.module';
// import { MasterTerminalModule } from './modules/general/master-terminal/master-terminal.module';
// import { MasterStockistComponent } from './pages/super-stockist/master-stockist/master-stockist.component';
// import { MasterSuperStockistComponent } from './pages/cpanel/master-super-stockist/master-super-stockist.component';
// import { MasterSuperStockistModule } from './modules/general/cpanel/master-super-stockist/master-super-stockist.module';
// import { SettingsComponent } from './pages/cpanel/settings/settings.component';
// import { SettingsModule } from './modules/general/cpanel/settings/settings.module';
// import { MasterTerminalModule } from './modules/general/stockistPanel/master-terminal/master-terminal.module';
// import { MasterTerminalComponent } from './pages/stockistPanel/master-terminal/master-terminal.component';
// import { StockiestReportComponent } from './pages/stockistPanel/stockiest-report/stockiest-report.component';
// import { StockistReportModule } from './modules/general/stockistPanel/stockist-report/stockist-report.module';
// import { ResultComponent } from './pages/cpanel/result/result.component';
// import { ResultModule } from './modules/general/cpanel/result/result.module';
// import { PayoutSettingComponent } from './pages/cpanel/payout-setting/payout-setting.component';
// import { TerminalReportComponent } from './pages/terminal-report/terminal-report.component';
// import { TerminalReportModule } from './modules/general/terminal-report/terminal-report.module';
// import { MasterTerminalComponent } from './pages/cpanel/master-terminal/master-terminal.component';
// import { MasterTerminalModule } from './modules/general/cpanel/master-terminal/master-terminal.module';
// import { AdminReportsComponent } from './pages/cpanel/admin-reports/admin-reports.component';
// import { AdminReportsModule } from './modules/general/cpanel/admin-reports/admin-reports.module';
// import {NgxPrintModule} from "ngx-print";
// import { DeveloperModule } from './modules/general/developer/developer.module';






@NgModule({
  declarations: [
    AppComponent,
    // SuperStockistReportComponent,
    // MasterTerminalComponent,
    // MasterStockistComponent,
    // MasterSuperStockistComponent,
    // SettingsComponent,
    // StockistResultComponent,
    // StockistReportComponent,
    // MasterTerminalComponent,
    // StockiestReportComponent,
    // ResultComponent,
    // PayoutSettingComponent,
    // TerminalReportComponent,
    // AdminReportsComponent,
    // MasterTerminalComponent,
    // MasterStockistComponent,
    // HeaderComponent,
    // HomeComponent,
    // PictureCarouselComponent,
    // AuthComponent,
    // LoadingSpinnerComponent,
    // OwnerComponent,
    // SncakBarComponent,
    // ConfirmationDialogComponent,
    // LoaidngRippleComponent,
    // LoaidngEllipsisComponent,
    // LoaidngHourglassComponent,
    // LoaidngRollerComponent,
    // HighlightDirective,
    // StockistComponent,
    // TerminalComponent,
    // DeveloperComponent,
    // BiIconComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPrinterModule.forRoot({printOpenWindow: false}),
    // FormsModule,
    BrowserAnimationsModule,
    // FontAwesomeModule,
    // MaterialModule,
    // FlexLayoutModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // NgxPrintModule,
    // Ng2SearchPipeModule,
    // NgxPaginationModule,
    // NgSelectModule,
    // ShowHidePasswordModule,
    // PopoverModule,
    // NgxFancyLoggerModule.forRoot({
    //   showTime: false,
    //   logLevel: LogLevel.WARNING,
    //   levelColor: {
    //     [LogLevel.ERROR]: 'brown'
    //   }
    // }),
    // NgxMousetrapModule.forRoot(),
    // TooltipModule,
    // AuthModule,
    // CpanelModule,
    // ManualResultModule,
    // TerminalModule,
    // DeveloperModule,
    MatMenuModule,
    MatSidenavModule,
    MatSliderModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HomeModule,
    HeaderModule,
    StockistModule,
    FooterModule,
    BiIconModule,
    // MasterStockistModule,
    MatTabsModule,
    NgMarqueeModule,
    // SuperStockistReportModule,
    // SuperStockistReportModule,
    // MasterTerminalModule,
    // MasterTerminalModule,
    // MasterStockistModule,
    // SuperStockistPanelModule,
    // MasterSuperStockistModule,
    // SettingsModule,
    // StockistResultModule,
    // MasterTerminalModule,
    // StockistReportModule,
    // ResultModule,
    // TerminalReportModule,
    // AdminReportsModule,
    // MasterTerminalModule
    MatNativeDateModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true},
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              {provide: DateAdapter, useClass: DateFormat}, {provide: DEFAULT_CURRENCY_CODE, useValue: 'INR'} ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); // DD/MM/YYYY
  }
}
