import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Terminal} from '../../../models/Terminal.model';
import {MasterTerminalService} from '../../../services/master-terminal.service';
import {Stockist} from '../../../models/Stockist.model';
import {MasterStockistService} from '../../../services/master-stockist.service';
import Swal from "sweetalert2";
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-master-terminal',
  templateUrl: './master-terminal.component.html',
  styleUrls: ['./master-terminal.component.scss']
})
export class MasterTerminalComponent implements OnInit {
  isProduction = environment.production;
  showDevArea = false;
  terminalMasterForm: FormGroup;
  terminals: Terminal[] = [];
  sortedTerminalList: Terminal[] = [];
  stockists: Stockist[] = [];
  public highLightedRowIndex = -1;

  constructor(private masterTerminalService: MasterTerminalService, private masterStockistService: MasterStockistService) {
    this.terminalMasterForm = new FormGroup({
      id: new FormControl(null),
      terminalName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      stockistId: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.terminals = this.masterTerminalService.getTerminals();
    this.sortedTerminalList = this.masterTerminalService.getTerminals();
    this.masterTerminalService.getTerminalListener().subscribe((response: Terminal[]) => {
      this.terminals = response;
      this.sortedTerminalList = response;
    });

    this.stockists = this.masterStockistService.getStockists();
    this.masterStockistService.getStockistListener().subscribe((response: Stockist[]) => {
      this.stockists = response;
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
        const masterData = {terminalName : this.terminalMasterForm.value.terminalName, stockistId: this.terminalMasterForm.value.stockistId};
        this.masterTerminalService.saveNewTerminal(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            this.terminals.unshift(responseData);
            this.sortedTerminalList.unshift(responseData);
            this.highLightedRowIndex = 0;
            this.terminalMasterForm.reset();
            setTimeout(() => {
              this.highLightedRowIndex = -1;
            }, 10000);
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

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
