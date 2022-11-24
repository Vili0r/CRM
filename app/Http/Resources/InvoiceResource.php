<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
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
            'client_full_name' => $this->client_full_name,
            'invoice_number' => $this->invoice_number,
            'invoice_date' => $this->invoice_date,
            'invoice_email' => $this->invoice_email,
            'tax_percent' => $this->tax_percent,
            'account' => $this->account,
            'items' => $this->items,
            'amount' => $this->amount,
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
