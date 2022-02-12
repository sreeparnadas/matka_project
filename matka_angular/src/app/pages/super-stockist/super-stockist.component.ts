import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-super-stockist',
  templateUrl: './super-stockist.component.html',
  styleUrls: ['./super-stockist.component.scss']
})
export class SuperStockistComponent implements OnInit {
  stockistMasterForm: FormGroup;

  constructor() {
    this.stockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      pin: new FormControl(null),
    });
   }

  ngOnInit(): void {
  }

  

}
