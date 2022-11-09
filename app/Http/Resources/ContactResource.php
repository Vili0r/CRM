<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
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
            'email' => $this->email,
            'description' => $this->description,
            'city' => $this->city,
            'phone_number' => $this->phone_number,
            'job_title' => $this->job_title,
            'notes' => NoteResource::collection($this->notes),
            'tasks' => TaskResource::collection($this->tasks),
            'account' => [
                'id' => $this->account->id ?? '',
                'name' => $this->account->name ?? '',
            ],
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
