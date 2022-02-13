import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SuperStockist} from "../../../models/SuperStockist.model";
import {MasterSuperStockiestService} from "../../../services/master-super-stockiest.service";


@Component({
  selector: 'app-master-stockist',
  templateUrl: './master-stockist.component.html',
  styleUrls: ['./master-stockist.component.scss']
})
export class MasterStockistComponent implements OnInit {


  stockistMasterForm: FormGroup;
  superStockist: SuperStockist[] = [];


  constructor(private masterSuperStockistService: MasterSuperStockiestService,) {
    this.stockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      pin: new FormControl(null),
      superStockistId: new FormControl(null),
      commission: new FormControl(null),
    });
   }

  ngOnInit(): void {
    this.superStockist = this.masterSuperStockistService.getSuperStockist();
    this.masterSuperStockistService.getSuperStockistListener().subscribe((response) => {
      this.superStockist = response;
    });
  }

}
