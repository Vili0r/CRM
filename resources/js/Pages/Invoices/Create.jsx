import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InvoicePreview from '@/Pages/Invoices/InvoicePreview';
import {v4 as uuidv4} from 'uuid';

const Create = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const { accounts } = usePage().props;
  const { data, setData, post, processing, errors } = useForm({
    client_full_name : '',
    client_address : '',
    client_city : '',
    client_email : '',
    client_post_code : '',
    client_phone_number : '',
    invoice_number : '',
    invoice_date : '',
    notes : '',
    tax_percent : '',
    account_id : '',
    items: []
  });
  
  const [invoiceFields, setInvoiceFields] = useState([
    {description : '', quantity : '', price : '', amount: ''}
  ]);

  const handleFormChange = (event, index) => {
    let invoiceItems = [...invoiceFields];
    invoiceItems[index][event.target.name] = event.target.value;

    setInvoiceFields('amount', amount);

    setData('items', invoiceFields);
  };

  const addItem = (e) => {
    e.preventDefault();
    let object = {
      description : '', 
      quantity : '', 
      price : '',
      amount: ''
    }
    setInvoiceFields([...invoiceFields, object]);
  };
  
  const removeItem = (index) => {
    const values = [...invoiceFields];
    values.splice(index, 1);

    setInvoiceFields(values);
  };

  const handlePreview = () => {
    setShowInvoice(true);
    setData('items', invoiceFields);
  }

  const submit = (e) => {
    e.preventDefault();
    post(route('invoices.store'));
  };

  return (
    <>
    {showInvoice ? ( 
      <InvoicePreview data={data} setShowInvoice={setShowInvoice} />
      ) : ( 
        <AuthenticatedLayout>
          <Head title="Invoices | Create" />
    
          <div className="py-12">
            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            className="text-indigo-600 hover:text-orange-400 no-underline focus:outline-none"
                            href={route('invoices.index')}
                        > 
                            Invoices
                        </InertiaLink>
                        <span className="font-medium text-indigo-600" > /</span> Create
                    </h1>
                    <button
                        onClick={handlePreview}
                        className="bg-sky-600 transition duration-300 rounded-lg px-2 py-3 mb-8 text-lg font-semibold hover:bg-orange-400 text-white focus:outline-none"    
                    >
                        Preview
                    </button>
                </div>
                  <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                    <form onSubmit={submit}>
                          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 pb-10 border-b border-gray-200">
                            <div>
                                <InputLabel forInput="client_full_name" value="Client Full Name" />
                                <TextInput
                                    type="text"
                                    name="client_full_name"
                                    value={data.client_full_name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={e => setData('client_full_name', e.target.value)}
                                />
                                <InputError message={errors.client_full_name} className="mt-2" />
                            </div>
                            
                            <div>
                                <InputLabel forInput="client_email" value="Client Email" />
                                <TextInput
                                    type="email"
                                    name="client_email"
                                    value={data.client_email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={e => setData('client_email', e.target.value)}
                                />
                                <InputError message={errors.client_email} className="mt-2" />
                            </div>
    
                            <div>
                                <InputLabel forInput="client_address" value="Client address" />
                                <TextInput
                                    type="text"
                                    name="client_address"
                                    value={data.client_address}
                                    className="mt-1 block w-full"
                                    handleChange={e => setData('client_address', e.target.value)}
                                />
                                <InputError message={errors.client_address} className="mt-2" />
                            </div>
    
                            <div>
                                <InputLabel forInput="client_city" value="Client City" />
                                <TextInput
                                    type="text"
                                    name="client_city"
                                    value={data.client_city}
                                    className="mt-1 block w-full"
                                    handleChange={e => setData('client_city', e.target.value)}
                                />
                                <InputError message={errors.client_city} className="mt-2" />
                            </div>
                      
                            <div>
                                <InputLabel forInput="client_post_code" value="Client Post Code" />
                                <TextInput
                                    type="text"
                                    name="client_post_code"
                                    value={data.client_post_code}
                                    className="mt-1 block w-full"
                                    handleChange={e => setData('client_post_code', e.target.value)}
                                />
                                <InputError message={errors.client_post_code} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel forInput="client_phone_number" value="Client Phone Number" />
                                <TextInput
                                    type="text"
                                    name="client_phone_number"
                                    value={data.client_phone_number}
                                    className="mt-1 block w-full"
                                    handleChange={e => setData('client_phone_number', e.target.value)}
                                    />
                                <InputError message={errors.client_phone_number} className="mt-2" />
                            </div>
    
                            <div>
                              <InputLabel forInput="invoice_date" value="Invoice date" />
                              <TextInput
                                  type="date"
                                  name="invoice_date"
                                  value={data.invoice_date}
                                  className="mt-1 block w-full"
                                  handleChange={e => setData('invoice_date', e.target.value)}
                              />
                              <InputError message={errors.invoice_date} className="mt-2" />
                            </div>
    
                            <div>
                                <InputLabel forInput="invoice_number" value="Invoice Number" />
                                <TextInput
                                    type="text"
                                    name="invoice_number"
                                    value={data.invoice_number}
                                    className="mt-1 block w-full"
                                    handleChange={e => setData('invoice_number', e.target.value)}
                                />
                                <InputError message={errors.invoice_number} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel forInput="tax_percent" value="Enter Tax Percent" />
                                <TextInput
                                    type="text"
                                    name="tax_percent"
                                    value={data.tax_percent}
                                    className="mt-1 block w-full"
                                    handleChange={e => setData('tax_percent', e.target.value)}
                                />
                                <InputError message={errors.tax_percent} className="mt-2" />
                            </div>
    
                            <div>
                                <InputLabel forInput="account_id" value="Account" />
                                <select
                                    name="account_id"
                                    value={data.account_id}
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    onChange={e => setData('account_id', e.target.value)}
                                >
                                    <option value="">Select an Account</option>
                                    {accounts.map(({ id, name }) => (
                                        <option key={id} value={id}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.account_id} className="mt-2" />
                            </div>
                          </div>
                          
                          {Object.keys(invoiceFields).map((item, index) => (
                              <div key={index} className="pb-10 border-b border-gray-200">
                                <div className="mt-10">
                                  <InputLabel forInput="description" value="Item Description" />
                                  <input
                                      type="text"
                                      name="description"
                                      value={item.description}
                                      className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                      isFocused={true}
                                      onChange={event => handleFormChange(event, index)}
                                  />
                                  <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div className="grid grid-cols-3 gap-6 mt-4 s m:grid-cols-3">    
                                    <div>
                                        <InputLabel forInput="quantity" value="Quantity" />
                                        <input
                                            type="text"
                                            name="quantity"
                                            value={item.quantity}
                                            className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                            onChange={event => handleFormChange(event, index)}
                                        />
                                        <InputError message={errors.quantity} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel forInput="price" value="Price" />
                                        <input
                                            type="text"
                                            name="price"
                                            value={item.price}
                                            className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                            onChange={event => handleFormChange(event, index)}
                                        />
                                        <InputError message={errors.price} className="mt-2" />
                                    </div>
                                    
                                    <div>
                                        <InputLabel forInput="amount" value="Amount" />
                                        <input
                                            type="text"
                                            name="amount"
                                            disabled={true}
                                            className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                            value={item.amount}
                                        />
                                        <InputError message={errors.amount} className="mt-2" />
                                    </div>
                                </div> 
                                <div className="flex gap-2">
                                  <button
                                      onClick={addItem}
                                      className="bg-sky-600 mt-3 transition duration-300 rounded-lg px-2 py-2 mb-8 font-semibold hover:bg-orange-400 text-white focus:outline-none"    
                                  >
                                      Add an Item
                                  </button>   

                                  <button
                                      onClick={() => removeItem(index)}
                                      className="hover:bg-sky-600 mt-3 transition duration-300 rounded-lg px-2 py-2 mb-8 font-semibold bg-orange-400 text-white focus:outline-none"    
                                  >
                                      Remove an Item
                                  </button>         
                                </div>
                              </div>   
                          ))}

                          <div className="mt-10">
                              <InputLabel forInput="notes" value="Notes" />
                              <textarea
                                  type="text"
                                  name="notes"
                                  rows="4"
                                  value={data.notes}
                                  className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                  onChange={e => setData('notes', e.target.value)}
                              />
                              <InputError message={errors.notes} className="mt-2" />
                          </div>

                          <div className="flex items-center justify-end mt-4">
                              <PrimaryButton className="ml-4 hover:bg-sky-600 bg-orange-400" processing={processing}>
                                  Save
                              </PrimaryButton>
                          </div>
                      </form>
                    </div>
                </div>
            </div>
          </div>
        </AuthenticatedLayout>
      )}
    </>
  )
}

export default Create