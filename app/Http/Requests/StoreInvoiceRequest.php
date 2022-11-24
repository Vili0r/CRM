<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'client_full_name' => ['required'],
            'client_address' => ['required'],
            'client_city' => ['required'],
            'client_email' => ['required'],
            'client_post_code' => ['required'],
            'client_phone_number' => ['required'],
            'invoice_number' => ['alpha_num'],
            'invoice_date' => ['required'],
            'notes' => ['required'],
            'tax_percent' => ['numeric'],
            'account_id' => ['nullable']
        ];
    }
}
