<?php

namespace App\Http\Controllers;

use App\Enums\LeadSource;
use App\Http\Requests\StoreLeadRequest;
use App\Http\Requests\UpdateLeadRequest;
use App\Http\Resources\LeadResource;
use App\Models\Account;
use App\Models\Lead;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Enums\LeadStatus;
use App\Http\Resources\EnumResource;
use Illuminate\Support\Arr;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\StoreTaskRequest;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $leads = LeadResource::collection(Lead::with('account')->paginate(10));

        return Inertia::render('Leads/Index', compact('leads'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $accounts = Account::all();
        $statuses = EnumResource::collection(LeadStatus::cases());
        $sources = EnumResource::collection(LeadSource::cases());

        return Inertia::render('Leads/Create', compact('accounts', 'statuses', 'sources'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLeadRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLeadRequest $request)
    {
        Lead::create($request->validated());

        return Redirect::route('leads.index')->with('message', 'Lead stored successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function show(Lead $lead)
    {
        $tasksCollection = collect($lead->load(['tasks']));
        $notesCollection = collect($lead->load(['notes']));
        
        $collection = $tasksCollection->merge($notesCollection);
        $merged = $collection->all();
        $tasks = $merged['tasks'];
        $notes = $merged['notes'];
        
        $newMerged = array_merge($tasks, $notes);

        $lead->load(['account']);
        $newArray = Arr::sort($newMerged, 'created_at');
        $statuses = EnumResource::collection(LeadStatus::cases());
        $sources = EnumResource::collection(LeadSource::cases());

        return Inertia::render('Leads/Show', compact('lead', 'newArray', 'statuses', 'sources'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function edit(Lead $lead)
    {
        $accounts = Account::all();
        $statuses = EnumResource::collection(LeadStatus::cases());
        $sources = EnumResource::collection(LeadSource::cases());

        return Inertia::render('Leads/Edit', compact('accounts', 'lead', 'statuses', 'sources'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLeadRequest  $request
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLeadRequest $request, Lead $lead)
    {
        $lead->update($request->validated());

        return Redirect::route('leads.index')->with('message', 'Lead updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lead $lead)
    {
        $lead->delete();

        return Redirect::route('leads.index')->with('message', 'Lead deleted successfully!');
    }

    public function note(StoreNoteRequest $request, Lead $lead)
    {
        $lead->notes()->create($request->validated());

        return Redirect::back()->with('message', 'Note was added successfully!');
    }
    
    public function task(StoreTaskRequest $request, Lead $lead)
    {
        $lead->tasks()->create($request->validated());

        return Redirect::back()->with('message', 'Task was added successfully!');
    }
}
