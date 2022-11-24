<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SendInvoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_id',
        'invoice_file',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
