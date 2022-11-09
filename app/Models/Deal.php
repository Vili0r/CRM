<?php

namespace App\Models;

use App\Enums\DealStage;
use App\Traits\FilterByUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    use HasFactory, FilterByUser;

    protected $fillable = [
        'name',
        'pipeline',
        'stage',
        'amount',
        'probability',
        'close_date',
        'account_id',
        'contact_id',
        'user_id',
    ];

    protected $casts = [
        'stage' => DealStage::class,
        'close_date' => 'datetime:Y-m-d'
    ];

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

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
