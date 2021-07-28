import { Component, OnInit } from '@angular/core';
import {GameTypeService} from '../../../services/game-type.service';

@Component({
  selector: 'app-payout-setting',
  templateUrl: './payout-setting.component.html',
  styleUrls: ['./payout-setting.component.scss']
})
export class PayoutSettingComponent implements OnInit {

  constructor(private gameTypeService: GameTypeService) { }

  ngOnInit(): void {
  }

}
