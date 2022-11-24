<?php

namespace App\Models;

use App\Enums\LeadSource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\LeadStatus;
use App\Traits\FilterByUser;

class Lead extends Model
{
    use HasFactory, FilterByUser;

    protected $fillable = [
        'first_name',
        'last_name',
        'source',
        'website',
        'status',
        'description',
        'account_id',
        'user_id',
    ];

    protected $casts = [
        'status' => LeadStatus::class,
        'source' => LeadSource::class,
    ];

    public static $searchable = [
        'first_name',
        'last_name',
    ];

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

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function deals()
    {
        return $this->morphMany(Deal::class, 'convert');
    }
}
