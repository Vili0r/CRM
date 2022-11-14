<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'domain',
        'industry',
        'city',
        'phone_number',
        'country',
        'post_code',
    ];

    public static $searchable = [
        'name'
    ];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
    
    public function leads()
    {
        return $this->hasMany(Lead::class);
    }

    public function deals()
    {
        return $this->hasMany(Deal::class);
    }
}
