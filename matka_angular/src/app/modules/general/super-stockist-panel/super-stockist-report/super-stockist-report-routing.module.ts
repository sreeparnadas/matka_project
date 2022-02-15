import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuperStockistReportComponent} from "../../../../pages/super-stockist/super-stockist-report/super-stockist-report.component";

const routes: Routes = [
  { path: '',  component: SuperStockistReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperStockistReportRoutingModule { }
