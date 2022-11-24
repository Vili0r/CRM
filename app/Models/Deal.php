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
        'user_id',
        'convert_id',
        'convert_type',
    ];

    protected $casts = [
        'stage' => DealStage::class,
        'close_date' => 'datetime:Y-m-d'
    ];

    public static $searchable = [
        'name'
    ];

    public function convert()
    {
        return $this->morphTo();
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
}
