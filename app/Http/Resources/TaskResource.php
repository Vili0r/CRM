<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
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
            'title' => $this->title,
            'details' => $this->details,
            'due_date' => $this->due_date,
            'user' => [
                'id' => $this->user->id ?? '',
                'name' => $this->user->name ?? '',
            ],
            'contact' => $this->contact,
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
