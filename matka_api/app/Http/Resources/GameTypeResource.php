<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed game_type_name
 * @property mixed game_type_initial
 * @property mixed mrp
 * @property mixed winning_price
 * @property mixed winning_bonus_percent
 * @property mixed commission
 * @property mixed payout
 * @property mixed default_payout
 * @property mixed id
 */
class GameTypeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'gameTypeId' => $this->id,
            'gameTypeName' => $this->game_type_name,
            'gameTypeInitial' => $this->game_type_initial,
            'mrp' => $this->mrp,
            'winningPrice' => $this->winning_price,
            'winningBonusPercent' => $this->winning_bonus_percent,
            'commission' => $this->commission,
            'payout' => $this->payout,
            'defaultPayout' => $this->default_payout,

        ];
    }
}
