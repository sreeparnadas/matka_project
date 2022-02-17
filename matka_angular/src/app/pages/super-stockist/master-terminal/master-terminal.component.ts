import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MasterStockistService} from '../../../services/master-stockist.service';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user.model';
import {Stockist} from '../../../models/Stockist.model';
import Swal from 'sweetalert2';
import {MasterTerminalService} from "../../../services/master-terminal.service";
import {Terminal} from "../../../models/Terminal.model";

@Component({
  selector: 'app-master-terminal',
  templateUrl: './master-terminal.component.html',
  styleUrls: ['./master-terminal.component.scss']
})
export class MasterTerminalComponent implements OnInit {

  terminalMasterForm: FormGroup;
  terminalLimitForm: FormGroup;
  user: User;
  isTerminalUpdatAble = false;
  stockistsBySuperStockist: Stockist[] = [];
  terminalsBySuperStockist: Terminal[] = [];
  selectedTerminal: Terminal = null;
  public highLightedRowIndex = -1;

  constructor(private masterStockistService: MasterStockistService, private authService: AuthService, private masterTerminalService: MasterTerminalService) {
    this.user = this.authService.userBehaviorSubject.value;
    this.terminalMasterForm = new FormGroup({
      id: new FormControl(null),
      terminalName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      stockistId: new FormControl(null, [Validators.required]),
      superStockistId: new FormControl(null),
      commission: new FormControl(null, [Validators.required, Validators.max(this.user.commission)]),
    });

    this.terminalLimitForm = new FormGroup({
      beneficiaryUid: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.max(0)]),
    });
  }

  ngOnInit(): void {
    this.masterStockistService.getStockistBySuperStockist(this.user.userId);
    this.masterStockistService.getStockistBySuperStockistListener().subscribe((response) => {
      this.stockistsBySuperStockist = response;
    });
    this.masterTerminalService.getTerminalBySuperStockist(this.user.userId);
    this.masterTerminalService.getTerminalsBySuperStockistListener().subscribe((response) => {
      this.terminalsBySuperStockist = response;
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

  onTerminalSelect(event: any){
    this.selectedTerminal = this.terminalsBySuperStockist.find(x => x.terminalId === event.value);
    this.terminalLimitForm.controls.amount.setValidators([Validators.max(this.selectedTerminal.stockist.balance)]);
  }

  editTerminal(terminal){
    const targetTerminalIndex = this.terminalsBySuperStockist.findIndex(x => x.terminalId === terminal.terminalId);
    this.highLightedRowIndex = targetTerminalIndex;
    const data = {
      id: terminal.terminalId, terminalName: terminal.terminalName, stockistId: terminal.stockist.userId, commission: terminal.commission
    };
    this.terminalMasterForm.patchValue(data);
    this.isTerminalUpdatAble = true;
  }

  createNewTerminal(){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to create terminal?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, create It!'
    }).then((result) => {
      if (result.isConfirmed){
        // tslint:disable-next-line:max-line-length
        const masterData = {terminalName : this.terminalMasterForm.value.terminalName
          , stockistId: this.terminalMasterForm.value.stockistId
          , superStockistId : this.user.userId
          , commission : this.terminalMasterForm.value.commission};
        this.masterTerminalService.saveNewTerminal(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            // this.terminals.unshift(responseData);
            // this.sortedTerminalList.unshift(responseData);
            // this.highLightedRowIndex = 0;
            this.terminalMasterForm.reset();
            // setTimeout(() => {
            //   this.highLightedRowIndex = -1;
            // }, 5000);
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Terminal created',
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

  clearMasterTerminalForm() {
    this.terminalMasterForm.reset();
    this.highLightedRowIndex = -1;
    this.isTerminalUpdatAble = false;
  }

  updateTerminal(){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to update terminal?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update It!'
    }).then((result) => {
      if (result.isConfirmed){
        // tslint:disable-next-line:max-line-length
        const masterData = {terminalId: this.terminalMasterForm.value.id
          , terminalName : this.terminalMasterForm.value.terminalName
          , stockistId: this.terminalMasterForm.value.stockistId
          , commission : this.terminalMasterForm.value.commission};
        this.masterTerminalService.updateTerminal(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            // this.sortedTerminalList[this.highLightedRowIndex] = responseData;
            this.terminalMasterForm.reset();
            this.isTerminalUpdatAble = false;
            // setTimeout(() => {
            //   this.highLightedRowIndex = -1;
            // }, 5000);
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Terminal created',
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

  rechargeToTerminal() {
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
          beneficiaryUid: this.terminalLimitForm.value.beneficiaryUid,
          stockistId: this.selectedTerminal.stockist.userId,
          amount: this.terminalLimitForm.value.amount,
          rechargeDoneByUid: this.user.userId
        };
        this.masterTerminalService.saveTerminalBalance(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            const targetTerminalIndex = this.terminalsBySuperStockist.findIndex(x => x.terminalId === responseData.terminalId);
            this.terminalsBySuperStockist[targetTerminalIndex].balance = responseData.balance;
            this.terminalsBySuperStockist[targetTerminalIndex].stockist.balance = responseData.stockist.balance;

            // this.sortedTerminalList[targetTerminalIndex].balance = responseData.balance;
            // this.sortedTerminalList[targetTerminalIndex].stockist.balance = responseData.stockist.balance;

            this.highLightedRowIndex = targetTerminalIndex;
            this.terminalLimitForm.controls.amount.setValidators([Validators.max(responseData.stockist.balance)]);
            this.terminalLimitForm.patchValue({amount: ''});
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
