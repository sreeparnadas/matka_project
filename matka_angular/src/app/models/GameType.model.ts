import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class GameType {

    id?: number;
    game_type_name?: string;
    game_type_initial?: string;
    mrp?: number;
    winning_price?: number;
    winning_bonus_percent?: number;
    commission?: NodeCompatibleEventEmitter;
    payout: number;
    default_payout: number;

}
