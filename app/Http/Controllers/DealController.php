<?php

namespace App\Http\Controllers;

use App\Enums\DealStage;
use App\Http\Requests\StoreDealRequest;
use App\Http\Requests\UpdateDealRequest;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Resources\DealResource;
use App\Http\Resources\EnumResource;
use App\Models\Account;
use App\Models\Contact;
use App\Models\Deal;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;

class DealController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $deals = DealResource::collection(Deal::with(['account', 'contact'])->paginate(10));

        return Inertia::render('Deals/Index', compact('deals'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $accounts = Account::all();
        $contacts = Contact::all();
        $stages = EnumResource::collection(DealStage::cases());

        return Inertia::render('Deals/Create', compact('accounts', 'stages', 'contacts'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDealRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDealRequest $request)
    {
        Deal::create($request->validated());

        return Redirect::route('deals.index')->with('message', 'Deal stored successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Deal  $deal
     * @return \Illuminate\Http\Response
     */
    public function show(Deal $deal)
    {
        $tasksCollection = collect($deal->load(['tasks']));
        $notesCollection = collect($deal->load(['notes']));
        
        $collection = $tasksCollection->merge($notesCollection);
        $merged = $collection->all();
        $tasks = $merged['tasks'];
        $notes = $merged['notes'];
        
        $newMerged = array_merge($tasks, $notes);

        $deal->load(['account', 'contact.account']);
        $newArray = Arr::sort($newMerged, 'created_at');
        $stages = EnumResource::collection(DealStage::cases());

        return Inertia::render('Deals/Show', compact('deal', 'newArray', 'stages'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Deal  $deal
     * @return \Illuminate\Http\Response
     */
    public function edit(Deal $deal)
    {
        $accounts = Account::all();
        $contacts = Contact::all();
        $stages = EnumResource::collection(DealStage::cases());

        return Inertia::render('Deals/Edit', compact('accounts', 'stages', 'contacts', 'deal'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDealRequest  $request
     * @param  \App\Models\Deal  $deal
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDealRequest $request, Deal $deal)
    {
        $deal->update($request->validated());

        return Redirect::route('deals.index')->with('message', 'Deal updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Deal  $deal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Deal $deal)
    {
        $deal->delete();

        return Redirect::route('deals.index')->with('message', 'Deal sdeleted successfully!');
    }

    public function note(StoreNoteRequest $request, Deal $deal)
    {
        $deal->notes()->create($request->validated());

        return Redirect::back()->with('message', 'Note was added successfully!');
    }
    
    public function task(StoreTaskRequest $request, Deal $deal)
    {
        $deal->tasks()->create($request->validated());

        return Redirect::back()->with('message', 'Task was added successfully!');
    }

    public function stage(Request $request, Deal $deal)
    {
        $deal->update([
            'stage' => $request->stage
        ]);

        $deal->save();

        return Redirect::back()->with('message', 'Stage was changed successfully!');
    }
}
