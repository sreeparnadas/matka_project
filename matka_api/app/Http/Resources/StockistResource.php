<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StockistResource extends JsonResource
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
            'userId' => $this->id,
            'userName' => $this->user_name,
            'pin' => $this->email,
            'userTypeId' => ($this->user_type)->id,
            'balance' => $this->closing_balance,

        ];
    }
}
