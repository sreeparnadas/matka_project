import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuperStockistComponent} from '../../../pages/super-stockist/super-stockist.component';
import {AuthGuardSuperStockistServiceGuard} from "../../../services/auth-guard-super-stockist-service.guard";

const routes: Routes = [
  // { path: '', canActivate : [AuthGuardSuperStockistServiceGuard],  component: SuperStockistComponent }
  { path: '',  component: SuperStockistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperStockistPanelRoutingModule { }
