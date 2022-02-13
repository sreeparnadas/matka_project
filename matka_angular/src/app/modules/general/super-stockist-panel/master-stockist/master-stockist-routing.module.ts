import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterStockistComponent} from '../../../../pages/super-stockist/master-stockist/master-stockist.component';


const routes: Routes = [
  { path: '',  component: MasterStockistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterStockistRoutingModule { }
