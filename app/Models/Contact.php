<?php

namespace App\Models;

use App\Traits\FilterByUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contact extends Model
{
    use HasFactory, FilterByUser;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'description',
        'city',
        'phone_number',
        'job_title',
        'account_id',
        'user_id',
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function getFullNameAttribute()
    {
        return $this->first_name.' '.$this->last_name;
    }

    public function notes()
    {
        return $this->morphMany(Note::class, 'owner');
    }

    public function tasks()
    {
        return $this->morphMany(Task::class, 'owner');
    }
}