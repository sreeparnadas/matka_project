import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Terminal} from '../../../models/Terminal.model';
import {MasterTerminalService} from '../../../services/master-terminal.service';
import {Stockist} from '../../../models/Stockist.model';
import {MasterStockistService} from '../../../services/master-stockist.service';
import Swal from 'sweetalert2';
import {Sort} from '@angular/material/sort';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-master-terminal',
  templateUrl: './master-terminal.component.html',
  styleUrls: ['./master-terminal.component.scss']
})
export class MasterTerminalComponent implements OnInit {
  isProduction = environment.production;
  showDevArea = false;
  isTerminalUpdatAble = false;
  terminalMasterForm: FormGroup;
  terminalLimitForm: FormGroup;
  user: User;
  terminals: Terminal[] = [];
  sortedTerminalList: Terminal[] = [];
  stockists: Stockist[] = [];
  selectedTerminal: Terminal = null;
  public highLightedRowIndex = -1;

  constructor(private masterTerminalService: MasterTerminalService, private masterStockistService: MasterStockistService,
              private authService: AuthService) {
    this.terminalMasterForm = new FormGroup({
      id: new FormControl(null),
      terminalName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      stockistId: new FormControl(null, [Validators.required]),
      superStockistId: new FormControl(null),
      commission: new FormControl(null, [Validators.required, Validators.max(100)]),
    });

    this.terminalLimitForm = new FormGroup({
      beneficiaryUid: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.max(0)]),
    });
  }


  ngOnInit(): void {
    this.user = this.authService.userBehaviorSubject.value;
    this.terminals = this.masterTerminalService.getTerminals();
    this.sortedTerminalList = this.masterTerminalService.getTerminals();
    this.masterTerminalService.getTerminalListener().subscribe((response: Terminal[]) => {
      this.terminals = response;
      this.sortedTerminalList = response;
      console.log(this.sortedTerminalList);
    });
    console.log(this.sortedTerminalList);
    console.log(this.terminals);


    this.stockists = this.masterStockistService.getStockists();
    this.masterStockistService.getStockistListener().subscribe((response: Stockist[]) => {
      this.stockists = response;
      // console.log(this.stockists, 'from terminal');
    });
  }

  onTerminalSelect(event: any){
    this.selectedTerminal = this.terminals.find(x => x.terminalId === event.value);
    this.terminalLimitForm.controls.amount.setValidators([Validators.max(this.selectedTerminal.stockist.balance)]);
  }

  selectSuperStockist(stockiest){
    // console.log(stockiest);
    this.terminalMasterForm.patchValue({superStockistId : stockiest.superStockiest.userId});
  }

  editTerminal(terminal){
    const targetTerminalIndex = this.terminals.findIndex(x => x.terminalId === terminal.terminalId);
    this.highLightedRowIndex = targetTerminalIndex;
    const data = {
      id: terminal.terminalId, terminalName: terminal.terminalName, stockistId: terminal.stockist.userId, commission: terminal.commission
     };
    this.terminalMasterForm.patchValue(data);
    this.isTerminalUpdatAble = true;
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
            this.sortedTerminalList[this.highLightedRowIndex] = responseData;
            this.terminalMasterForm.reset();
            this.isTerminalUpdatAble = false;
            setTimeout(() => {
              this.highLightedRowIndex = -1;
            }, 5000);
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

  createNewTerminal() {
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
          , superStockistId : this.terminalMasterForm.value.superStockistId
          , commission : this.terminalMasterForm.value.commission};
        this.masterTerminalService.saveNewTerminal(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            // this.terminals.unshift(responseData);
            this.sortedTerminalList.unshift(responseData);
            this.highLightedRowIndex = 0;
            this.terminalMasterForm.reset();
            setTimeout(() => {
              this.highLightedRowIndex = -1;
            }, 5000);
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

  clearMasterTerminalForm() {
    this.terminalMasterForm.reset();
    this.highLightedRowIndex = -1;
    this.isTerminalUpdatAble = false;
  }

  sortData(sort: Sort) {
    const data = this.terminals.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTerminalList = data;
      return;
    }
    this.sortedTerminalList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const isDesc = sort.direction === 'desc';
      switch (sort.active) {
        case 'terminalName': return compare(a.terminalName, b.terminalName, isAsc);
        case 'stockistName': return compare(a.stockist.userName, b.stockist.userName, isAsc);
        case 'balance': return compare(a.balance, b.balance, isAsc);
        default: return 0;
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
            const targetTerminalIndex = this.terminals.findIndex(x => x.terminalId === responseData.terminalId);
            this.terminals[targetTerminalIndex].balance = responseData.balance;
            this.terminals[targetTerminalIndex].stockist.balance = responseData.stockist.balance;

            this.sortedTerminalList[targetTerminalIndex].balance = responseData.balance;
            this.sortedTerminalList[targetTerminalIndex].stockist.balance = responseData.stockist.balance;

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

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
