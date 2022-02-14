import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterTerminalComponent} from '../../../../pages/super-stockist/master-terminal/master-terminal.component';

const routes: Routes = [
  { path: '',  component: MasterTerminalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterTerminalRoutingModule { }
