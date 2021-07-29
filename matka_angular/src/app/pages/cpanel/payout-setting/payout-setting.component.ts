import { Component, OnInit } from '@angular/core';
import { GameType } from 'src/app/models/GameType.model';
import { Terminal } from 'src/app/models/Terminal.model';
import { AuthService } from 'src/app/services/auth.service';
import {GameTypeService} from '../../../services/game-type.service';

@Component({
  selector: 'app-payout-setting',
  templateUrl: './payout-setting.component.html',
  styleUrls: ['./payout-setting.component.scss']
})
export class PayoutSettingComponent implements OnInit {

  gameTypes: GameType[] = [];

  constructor(private gameTypeService: GameTypeService,  private authService: AuthService) {
    this.gameTypes = this.gameTypeService.getGameType();
    this.gameTypeService.getGameTypeListener().subscribe((response: GameType[]) =>{
      this.gameTypes = response;
    })
  }



  ngOnInit(): void {
  }


}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    fav: string;
  }

  const ELEMENT_DATA: Element[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fav: "Yes" },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', fav: "" },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', fav: "" },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', fav: "" },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', fav: "Yes" },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', fav: "" },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', fav: "" },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', fav: "" },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', fav: "" },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', fav: "" },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', fav: "" },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', fav: "" },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', fav: "" },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', fav: "" },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', fav: "" },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', fav: "" },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', fav: "" },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', fav: "" },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', fav: "" },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', fav: "" },
  ];
