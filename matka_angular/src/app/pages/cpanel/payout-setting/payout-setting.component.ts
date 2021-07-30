import { Component, OnInit } from '@angular/core';
import { GameType } from 'src/app/models/GameType.model';
import { AuthService } from 'src/app/services/auth.service';
import {GameTypeService} from '../../../services/game-type.service';
import {environment} from '../../../../environments/environment';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import {PayoutSettingService} from '../../../services/payout-setting.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-payout-setting',
  templateUrl: './payout-setting.component.html',
  styleUrls: ['./payout-setting.component.scss']
})
export class PayoutSettingComponent implements OnInit {
  isProduction = environment.production;
  showDevArea = false;
  gameTypes: GameType[] = [];

  displayedColumns = ['position', 'gameTypeName', 'mrp', 'winningPrice', 'commission', 'payout'];
  public dataSource: MatTableDataSource<GameType>;

  // tslint:disable-next-line:max-line-length
  constructor(private gameTypeService: GameTypeService, private payoutSettingService: PayoutSettingService ,  private authService: AuthService) {
    this.gameTypes = this.gameTypeService.getGameType();
    this.gameTypeService.getGameTypeListener().subscribe((response: GameType[]) => {
      this.gameTypes = response;
      this.dataSource = new MatTableDataSource(this.gameTypes);
    });
  }


  ngOnInit(): void {
  }

  updateTerminal(){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to update payout?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update It!'
    }).then((result) => {
      if (result.isConfirmed){
        // tslint:disable-next-line:max-line-length
        const masterData = [];
        for (const data of this.gameTypes) {
          masterData.push({gameTypeId: data.gameTypeId, newPayout: data.payout});
        }
        this.payoutSettingService.updatePayout(masterData).subscribe(response => {
          if (response.success === 1){
            const responseData = response.data;
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Payout updated',
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
