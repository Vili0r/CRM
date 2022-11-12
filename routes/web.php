<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DealController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::group(['middleware' => ['auth', 'verified']], function() {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    //Home Controller
    Route::get('home', HomeController::class)->name('home');

    //Create tasks and notes for Contacts 
    Route::post('/contacts/{contact}/note', [ContactController::class, 'note'])->name('contacts.note');
    Route::post('/contacts/{contact}/task', [ContactController::class, 'task'])->name('contacts.task');
    
    //Create tasks and notes for Deals 
    Route::post('/deals/{deal}/note', [DealController::class, 'note'])->name('deals.note');
    Route::post('/deals/{deal}/task', [DealController::class, 'task'])->name('deals.task');

    Route::resource('/accounts', AccountController::class);
    Route::resource('/contacts', ContactController::class);
    Route::resource('/leads', LeadController::class);
    Route::resource('/notes', NoteController::class)->only(['store', 'update', 'destroy']);
    Route::resource('/tasks', TaskController::class)->only(['store', 'update', 'destroy']);
    Route::resource('/deals', DealController::class);
});


require __DIR__.'/auth.php';
