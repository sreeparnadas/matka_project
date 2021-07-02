import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-master-stockist',
  templateUrl: './master-stockist.component.html',
  styleUrls: ['./master-stockist.component.scss']
})
export class MasterStockistComponent implements OnInit {

  isProduction = environment.production;
  showDevArea = false;
  stockistMasterForm: FormGroup;
  constructor() {
    this.stockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null),
      pin: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  createNewStockist() {

  }

  clearMasterStockistForm() {

  }
}
