import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import Swal from 'sweetalert2';
import {MasterStockistService} from '../../../services/master-stockist.service';
import {Stockist} from '../../../models/Stockist.model';
import {Sort} from '@angular/material/sort';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../services/auth.service';
import {SuperStockist} from "../../../models/SuperStockist.model";
import {MasterSuperStockiestService} from "../../../services/master-super-stockiest.service";

@Component({
  selector: 'app-master-stockist',
  templateUrl: './master-stockist.component.html',
  styleUrls: ['./master-stockist.component.scss']
})
export class MasterStockistComponent implements OnInit {

  isProduction = environment.production;
  showDevArea = false;
  isStockistUpdatAble = false;
  stockistMasterForm: FormGroup;
  stockistLimitForm: FormGroup;
  user: User;
  stockists: Stockist[] = [];
  sortedStockistList: Stockist[] = [];
  superStockist: SuperStockist[] = [];
  selectedStockist: Stockist = null;
  public highLightedRowIndex = -1;
  constructor(private masterStockistService: MasterStockistService, private authService: AuthService , private masterSuperStockistService: MasterSuperStockiestService) {
    this.stockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      pin: new FormControl(null),
      superStockistId: new FormControl(null),
      commission: new FormControl(null, [Validators.required, Validators.max(100)]),
    });
    this.stockistLimitForm = new FormGroup({
      beneficiaryUid: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    });
  }

  ngOnInit(): void {
    this.user = this.authService.userBehaviorSubject.value;
    this.stockists = this.masterStockistService.getStockists();
    this.sortedStockistList = this.masterStockistService.getStockists();
    this.masterStockistService.getStockistListener().subscribe((response: Stockist[]) => {
      this.stockists = response;
      this.sortedStockistList = response;
    });
    this.superStockist = this.masterSuperStockistService.getSuperStockist();
    this.masterSuperStockistService.getSuperStockistListener().subscribe((response) => {
      this.superStockist = response;
    });
  }
  onStockistSelect(event: any){
    this.selectedStockist = this.stockists.find(x => x.userId === event.value);
  }
  editStockist(stockist){
    const targetStockistIndex = this.stockists.findIndex(x => x.userId === stockist.userId);
    this.highLightedRowIndex = targetStockistIndex;
    let data={
      id: stockist.userId, userName: stockist.userName, pin: stockist.pin, superStockistId: stockist.superStockiestId, commission: stockist.commission
     };
    this.stockistMasterForm.patchValue(data);
    this.isStockistUpdatAble = true;
  }

  upateStockist(){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to update stockist?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update It!'
    }).then((result) => {
      if (result.isConfirmed){
        // tslint:disable-next-line:max-line-length
        const masterData = {id: this.stockistMasterForm.value.id
          , userName : this.stockistMasterForm.value.userName
          , superStockistId: this.stockistMasterForm.value.superStockistId
          , commission : this.stockistMasterForm.value.commission};
        // console.log(masterData);
        this.masterStockistService.updateStockiist(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            this.sortedStockistList[this.highLightedRowIndex]= responseData;
            this.stockistMasterForm.reset();
            this.isStockistUpdatAble = false;
            setTimeout(() => {
              this.highLightedRowIndex = -1;
            }, 5000);
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Stockist updated',
              // showConfirmButton: false,
              timer: 1000
            });
            // updating terminal balance from here

          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Validation error',
              showConfirmButton: false,
              timer: 3000
            });
          }
        }, (error) => {
          // when error occured
          console.log('data saving error', error);
        });
      }
    });
  }

  createNewStockist() {

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
        const masterData = {userName : this.stockistMasterForm.value.userName
          , superStockistId: this.stockistMasterForm.value.superStockistId
          , commission : this.stockistMasterForm.value.commission};
        this.masterStockistService.saveNewStockist(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            this.stockists.unshift(responseData);
            this.sortedStockistList.unshift(responseData);
            this.highLightedRowIndex = 0;
            this.stockistMasterForm.reset();
            this.stockistLimitForm.reset();
            setTimeout(() => {
              this.highLightedRowIndex = -1;
            }, 10000);
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Balance updated',
              showConfirmButton: false,
              timer: 1000
            });
            // updating terminal balance from here

          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Validation error',
              showConfirmButton: false,
              timer: 3000
            });
          }
        }, (error) => {
          // when error occured
          console.log('data saving error', error);
        });
      }
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

  clearMasterStockistForm() {
    this.stockistMasterForm.reset();
    this.highLightedRowIndex = -1;
    this.isStockistUpdatAble = false;

  }

  sortData(sort: Sort) {
    const data = this.stockists.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedStockistList = data;
      return;
    }
    this.sortedStockistList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const isDesc = sort.direction === 'desc';
      switch (sort.active) {
        case 'userName': return compare(a.userName, b.userName, isAsc);
        case 'pin': return compare(a.pin, b.pin, isAsc);
        case 'balance': return compare(a.balance, b.balance, isAsc);
        default: return 0;
      }
    });
  }

  rechargeToStockist() {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to recharge?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, recharge It!'
    }).then((result) => {
      if (result.isConfirmed){
        const masterData = {
          beneficiaryUid: this.stockistLimitForm.value.beneficiaryUid,
          amount: this.stockistLimitForm.value.amount,
          rechargeDoneByUid: this.user.userId
        };
        this.masterStockistService.saveStockistBalance(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            const targetStockistIndex = this.stockists.findIndex(x => x.userId === responseData.userId);
            this.stockists[targetStockistIndex].balance = responseData.balance;
            this.sortedStockistList[targetStockistIndex].balance = responseData.balance;
            this.highLightedRowIndex = targetStockistIndex;
            this.stockistLimitForm.patchValue({amount: ''});
            setTimeout(() => {
              this.highLightedRowIndex = -1;
            }, 10000);
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Recharge done',
              showConfirmButton: false,
              timer: 1000
            });
            // updating terminal balance from here

          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Validation error',
              showConfirmButton: false,
              timer: 3000
            });
          }
        }, (error) => {
          // when error occured
          console.log('data saving error', error);
        });
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
