import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SuperStockist} from '../../../models/SuperStockist.model';
import {MasterSuperStockiestService} from '../../../services/master-super-stockiest.service';
import Swal from 'sweetalert2';
import {MasterStockistService} from "../../../services/master-stockist.service";
import {User} from "../../../models/user.model";
import {AuthService} from "../../../services/auth.service";
import {Stockist} from "../../../models/Stockist.model";


@Component({
  selector: 'app-master-stockist',
  templateUrl: './master-stockist.component.html',
  styleUrls: ['./master-stockist.component.scss']
})
export class MasterStockistComponent implements OnInit {


  user: User;
  stockistMasterForm: FormGroup;
  stockistLimitForm: FormGroup;
  superStockist: SuperStockist[] = [];
  public highLightedRowIndex = -1;
  isStockistUpdatAble = false;
  stockistsBySuperStockist: Stockist[] = [];
  selectedStockist: Stockist = null;


  constructor(private masterSuperStockistService: MasterSuperStockiestService, private masterStockistService: MasterStockistService, private authService: AuthService ) {
    this.user = this.authService.userBehaviorSubject.value;
    this.stockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      pin: new FormControl(null),
      superStockistId: new FormControl(null),
      commission: new FormControl(null, [Validators.max(this.user.commission)]),
    });
    this.stockistLimitForm = new FormGroup({
      beneficiaryUid: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    });
   }

  ngOnInit(): void {
    this.masterStockistService.getStockistBySuperStockist(this.user.userId);
    this.masterStockistService.getStockistBySuperStockistListener().subscribe((response) => {
      this.stockistsBySuperStockist = response;
    });

    // this.superStockist = this.masterSuperStockistService.getSuperStockist();
    // this.masterSuperStockistService.getSuperStockistListener().subscribe((response) => {
    //   this.superStockist = response;
    // });


  }

  onStockistSelect(event: any){
    this.selectedStockist = this.stockistsBySuperStockist.find(x => x.userId === event.value);
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
          , superStockistId: this.user.userId
          , commission : this.stockistMasterForm.value.commission};
        this.masterStockistService.saveNewStockist(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            // this.stockists.unshift(responseData);
            // this.sortedStockistList.unshift(responseData);
            // this.highLightedRowIndex = 0;
            this.stockistMasterForm.reset();
            // this.stockistLimitForm.reset();
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

  editStockist(stockist){
    const targetStockistIndex = this.stockistsBySuperStockist.findIndex(x => x.userId === stockist.userId);
    this.highLightedRowIndex = targetStockistIndex;
    let data={
      id: stockist.userId, userName: stockist.userName, commission: stockist.commission
    };
    this.stockistMasterForm.patchValue(data);
    this.isStockistUpdatAble = true;
  }

  clearMasterStockistForm() {
    this.stockistMasterForm.reset();
    this.highLightedRowIndex = -1;
    this.isStockistUpdatAble = false;
  }

  updateStockist(){
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
          , superStockistId: this.user.userId
          , commission : this.stockistMasterForm.value.commission};
        // console.log(masterData);
        this.masterStockistService.updateStockiist(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            // this.sortedStockistList[this.highLightedRowIndex]= responseData;
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
            const targetStockistIndex = this.stockistsBySuperStockist.findIndex(x => x.userId === responseData.userId);
            this.stockistsBySuperStockist[targetStockistIndex].balance = responseData.balance;
            // this.sortedStockistList[targetStockistIndex].balance = responseData.balance;
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
