import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import Swal from 'sweetalert2';
import {MasterStockistService} from '../../../services/master-stockist.service';
import {Stockist} from '../../../models/Stockist.model';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-master-stockist',
  templateUrl: './master-stockist.component.html',
  styleUrls: ['./master-stockist.component.scss']
})
export class MasterStockistComponent implements OnInit {

  isProduction = environment.production;
  showDevArea = false;
  stockistMasterForm: FormGroup;
  stockistLimitForm: FormGroup;
  stockists: Stockist[] = [];
  sortedStockistList: Stockist[] = [];
  public highLightedRowIndex = -1;
  constructor(private masterStockistService: MasterStockistService) {
    this.stockistMasterForm = new FormGroup({
      id: new FormControl(null),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      pin: new FormControl(null),
    });
    this.stockistLimitForm = new FormGroup({
      beneficiaryUid: new FormControl(null),
      amount: new FormControl(null, [Validators.required, Validators.minLength(2)]),

    });

    
  }

  ngOnInit(): void {
    this.stockists = this.masterStockistService.getStockists();
    this.sortedStockistList = this.masterStockistService.getStockists();
    this.masterStockistService.getStockistListener().subscribe((response: Stockist[]) => {
      this.stockists = response;
      this.sortedStockistList = response;
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
        const masterData = {userName : this.stockistMasterForm.value.userName};
        this.masterStockistService.saveNewStockist(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            this.stockists.unshift(responseData);
            this.sortedStockistList.unshift(responseData);
            this.highLightedRowIndex = 0;
            this.stockistMasterForm.reset();
            setTimeout(() => {
              this.highLightedRowIndex = -1;
            }, 10000);
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Stockist created',
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
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
