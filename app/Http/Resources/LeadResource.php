<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LeadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'full_name' => $this->full_name,
            'source' => [
                'id' => $this->source->id ?? '',
                'name' => Str::replace('_', ' ', $this->source->name) ?? '',
            ],
            'description' => $this->description,
            'website' => $this->website,
            'status' => [
                'id' => $this->status->id ?? '',
                'name' => $this->status->name ?? '',
            ],
            'account' => [
                'id' => $this->account->id ?? '',
                'name' => $this->account->name ?? '',
            ],
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
