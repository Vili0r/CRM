<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;
use App\Http\Resources\InvoiceResource;
use Illuminate\Support\Facades\Notification;
use Illuminate\Http\Request;
use App\Models\Account;
use App\Models\Invoice;
use App\Models\InvoicesItem;
use App\Notifications\SendInvoiceNotification;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $invoices = InvoiceResource::collection(Invoice::with('account', 'items')->paginate(10));

        return Inertia::render('Invoices/Index', compact('invoices'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $accounts = Account::all();

        return Inertia::render('Invoices/Create', compact('accounts'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreInvoiceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInvoiceRequest $request)
    {
        $invoice = Invoice::create($request->validated());
        
        foreach ($request->items as $item) {
            $amount = $item['price'] * $item['quantity'];
            if(isset($item['description']) && isset($item['quantity']) && isset($item['price'])) {
                InvoicesItem::create([
                    'invoice_id' => $invoice->id,
                    'description' => $item['description'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                    'amount' => $amount
                ]);
            }
        }

        return Redirect::route('invoices.index')->with('message', 'Invoice stored successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        $invoice->load(['items']);

        return Inertia::render('Invoices/Show', compact('invoice'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInvoiceRequest  $request
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInvoiceRequest $request, Invoice $invoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->items()->delete();

        $invoice->delete();

        return Redirect::route('invoices.index')->with('message', 'Invoice deleted successfully!');
    }

    public function send(Invoice $invoice, Request $request)
    {
        $request->validate([
            'invoice_file' => ['required'],
        ]);

        if ($request->hasFile('invoice_file')) {
            $file = $request->file('invoice_file')->store('invoices');
            $invoice->files()->create([
                'invoice_file' => $file
            ]);

            $invoiceNumber = $invoice->invoice_number;

            Notification::route('mail', $invoice->client_email)->notify(new SendInvoiceNotification($invoiceNumber, $file));
    
            return Redirect::route('invoices.index')->with('message', 'Invoice sent successfully!');
        }

        return Redirect::back();
    }
}
