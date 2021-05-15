<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

/**
 * @property mixed barcode_number
 * @property mixed draw_master_id
 * @property mixed terminal_id
 */
class PlayMasterResource extends JsonResource
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
            'barcodeNumber' => Str::substr($this->barcode_number,0,8),
            'drawMasterId' => $this->draw_master_id,
            'terminalId' => $this->terminal_id,
        ];
    }
}
