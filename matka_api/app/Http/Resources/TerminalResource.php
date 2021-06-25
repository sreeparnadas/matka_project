<?php

namespace App\Http\Resources;

use App\Models\User;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\StockistResource;

/**
 * @property mixed id
 * @property mixed user_name
 * @property mixed closing_balance
 * @property mixed email
 */
class TerminalResource extends JsonResource
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
            'terminalId' => $this->id,
            'terminalName' => $this->user_name,
            'pin' => $this->email,
            'balance' =>$this->closing_balance,
            // 'stockist' =>($this->stockist_id!= null) ? new StockistResource($this->stockist_id) : null,
            'stockist' => is_null($this->stockist_id) ? 'empty':new UserResource(User::find($this->stockist_id)),
            'stockistId' => $this->stockist_id,

        ];
    }
}
