<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_full_name',
        'client_address',
        'client_city',
        'client_email',
        'client_post_code',
        'client_phone_number',
        'invoice_number',
        'invoice_date',
        'notes',
        'tax_percent',
        'account_id',
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function items()
    {
        return $this->hasMany(InvoicesItem::class);
    }
    
    public function files()
    {
        return $this->hasMany(SendInvoice::class);
    }
    
    public function amount(): Attribute
    {
        $amount = 0;
        foreach($this->items as $item){
            $amount += $item->amount;
        }

        return Attribute::make(
            get: fn () => $amount
        );
    }
}
