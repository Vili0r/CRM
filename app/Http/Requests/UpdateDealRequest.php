<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDealRequest extends FormRequest
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
            'name' => ['required'],
            'pipeline' => ['sometimes'],
            'stage' => ['required'],
            'amount' => ['required', 'numeric'],
            'probability' => ['required', 'numeric'],
            'close_date' => ['required'],
            'account_id' => ['required'],
            'contact_id' => ['required'],
        ];
    }
}
