import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {MasterSuperStockiestService} from "../../../services/master-super-stockiest.service";

@Component({
  selector: 'app-master-super-stockist',
  templateUrl: './master-super-stockist.component.html',
  styleUrls: ['./master-super-stockist.component.scss']
})
export class MasterSuperStockistComponent implements OnInit {

  superStockistMasterForm: FormGroup;
  isSuperStockistUpdateAble = false;

  constructor(private masterSuperStockistService: MasterSuperStockiestService) { }

  ngOnInit(): void {
    this.superStockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      pin: new FormControl(null),
    });
  }

  createNewSuperStockist() {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to create stockist?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, create It!'
    }).then((result) => {
      if (result.isConfirmed){
        const masterData = {userName : this.superStockistMasterForm.value.userName, pin : this.superStockistMasterForm.value.pin};
        this.masterSuperStockistService.saveNewSuperStockist(masterData).subscribe(response => {
          // console.log(response);
          if (response.success === 1){
          //   const responseData = response.data;
          //   this.stockists.unshift(responseData);
          //   this.sortedStockistList.unshift(responseData);
          //   this.highLightedRowIndex = 0;
            this.superStockistMasterForm.reset();
          //   setTimeout(() => {
          //     this.highLightedRowIndex = -1;
          //   }, 10000);
          //   // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Super Stockist created',
              showConfirmButton: false,
              timer: 1000
            });
          //   // updating terminal balance from here
          //
          // }else{
          //   Swal.fire({
          //     position: 'top-end',
          //     icon: 'error',
          //     title: 'Validation error',
          //     showConfirmButton: false,
          //     timer: 3000
          //   });
          }
        }, (error) => {
          // when error occured
          console.log('data saving error', error);
        });
      }
    });
  }

}
