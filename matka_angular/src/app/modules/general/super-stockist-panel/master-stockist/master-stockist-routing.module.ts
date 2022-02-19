import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterStockistComponent} from '../../../../pages/super-stockist/master-stockist/master-stockist.component';
import {AuthGuardSuperStockistServiceGuard} from '../../../../services/auth-guard-super-stockist-service.guard';


const routes: Routes = [
  { path: '', canActivate : [AuthGuardSuperStockistServiceGuard], component: MasterStockistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterStockistRoutingModule { }
