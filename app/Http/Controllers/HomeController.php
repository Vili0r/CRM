<?php

namespace App\Http\Controllers;

use App\Enums\DealStage;
use App\Http\Resources\DealResource;
use App\Http\Resources\EnumResource;
use App\Models\Deal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $deals = DealResource::collection(Deal::all());
        $stages = EnumResource::collection(DealStage::cases());

        return Inertia::render('Home/Index', compact('deals', 'stages'));
    }
}
