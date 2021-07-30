import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

export class GameType {

  gameTypeId?: number;
  gameTypeName?: string;
  gameTypeInitial?: string;
  mrp?: number;
  winningPrice?: number;
  winningBonusPercent?: number;
  commission?: number;
  payout?: number;
  defaultPayout?: number;

}
