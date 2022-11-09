<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class DealResource extends JsonResource
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
            'name' => $this->name,
            'stage' => Str::replace('_', ' ', $this->stage->name) ?? '',
            'amount' => $this->amount,
            'probability' => $this->probability,
            'close_date' => $this->close_date->toDateTimeString(),
            // 'notes' => NoteResource::collection($this->notes),
            // 'tasks' => TaskResource::collection($this->tasks),
            'account' => [
                'id' => $this->account->id ?? '',
                'name' => $this->account->name ?? '',
            ],
            'contact' => [
                'id' => $this->contact->id ?? '',
                'name' => $this->contact->full_name ?? '',
            ],
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
