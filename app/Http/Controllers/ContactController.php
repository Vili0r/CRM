<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Account;
use App\Models\Contact;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Arr;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = ContactResource::collection(Contact::with('account')->paginate(10));

        return Inertia::render('Contacts/Index', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $accounts = Account::all();

        return Inertia::render('Contacts/Create', compact('accounts'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactRequest $request)
    {
        Contact::create($request->validated());

        return Redirect::route('contacts.index')->with('message', 'Contact stored successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        $tasksCollection = collect($contact->load(['tasks']));
        $notesCollection = collect($contact->load(['notes']));
        
        $collection = $tasksCollection->merge($notesCollection);
        $merged = $collection->all();
        $tasks = $merged['tasks'];
        $notes = $merged['notes'];
        
        $newMerged = array_merge($tasks, $notes);

        $contact->load(['account']);
        $newArray = Arr::sort($newMerged, 'created_at');
        //dd($newArray);

        return Inertia::render('Contacts/Show', compact('contact', 'newArray'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        $accounts = Account::all();

        return Inertia::render('Contacts/Edit', compact('accounts', 'contact'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContactRequest  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $contact->update($request->validated());

        return Redirect::route('contacts.index')->with('message', 'Contact updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return Redirect::route('contacts.index')->with('message', 'Contact deleted successfully!');
    }

    public function note(StoreNoteRequest $request, Contact $contact)
    {
        $contact->notes()->create($request->validated());

        return Redirect::back()->with('message', 'Note was added successfully!');
    }
    
    public function task(StoreTaskRequest $request, Contact $contact)
    {
        $contact->tasks()->create($request->validated());

        return Redirect::back()->with('message', 'Task was added successfully!');
    }
}
