<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ManualResultResource extends JsonResource
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
            'manualResultId'=> $this->id,
            'drawMasterId'=> $this->draw_masterId,
            'numberCombinationId'=> $this->number_combination_id,
        ];
    }
}
