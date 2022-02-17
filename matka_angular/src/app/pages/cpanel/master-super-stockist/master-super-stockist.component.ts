import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {MasterSuperStockiestService} from '../../../services/master-super-stockiest.service';
import {SuperStockist} from '../../../models/SuperStockist.model';

@Component({
  selector: 'app-master-super-stockist',
  templateUrl: './master-super-stockist.component.html',
  styleUrls: ['./master-super-stockist.component.scss']
})
export class MasterSuperStockistComponent implements OnInit {

  superStockistMasterForm: FormGroup;
  isSuperStockistUpdateAble = false;
  superStockist: SuperStockist[] = [];
  public highLightedRowIndex = -1;

  constructor(private masterSuperStockistService: MasterSuperStockiestService) { }

  ngOnInit(): void {
    this.superStockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      pin: new FormControl(null),
      commission: new FormControl(null, [Validators.required, Validators.max(100)]),
    });

    this.superStockist = this.masterSuperStockistService.getSuperStockist();
    this.masterSuperStockistService.getSuperStockistListener().subscribe((response) => {
      this.superStockist = response;
    });
  }

  getBackgroundColor(index: number) {
    // tslint:disable-next-line:triple-equals
    if (index == this.highLightedRowIndex){
      return {
        'background-color': 'rgb(103 245 166 / 60%)',
        // color: 'seashell',
        animation: 'blinking 1s infinite'
      };
    }
  }

  clearMasterSuperStockistForm() {
    this.superStockistMasterForm.reset();
    this.highLightedRowIndex = -1;
    this.isSuperStockistUpdateAble = false;
  }

  updateSuperStockist(){
    const masterData = {id : this.superStockistMasterForm.value.id , userName : this.superStockistMasterForm.value.userName, pin : this.superStockistMasterForm.value.pin};
    this.masterSuperStockistService.updateSuperStockist(masterData).subscribe(response => {
      if (response.success === 1){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Super Stockist Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.superStockistMasterForm.reset();
      }
    });
  }

  editStockist(stockist){
    const targetStockistIndex = this.superStockist.findIndex(x => x.userId === stockist.userId);
    this.highLightedRowIndex = targetStockistIndex;
    // console.log(targetStockistIndex);
    const data = {
      id: stockist.userId, userName: stockist.userName, pin: stockist.pin,
    };
    this.superStockistMasterForm.patchValue(data);
    this.isSuperStockistUpdateAble = true;
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
        const masterData = {userName : this.superStockistMasterForm.value.userName
          , pin : this.superStockistMasterForm.value.pin
          , commission : this.superStockistMasterForm.value.commission};
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
