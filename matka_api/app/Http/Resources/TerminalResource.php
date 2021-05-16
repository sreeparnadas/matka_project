<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'balance' =>$this->closing_balance
        ];
    }
}
