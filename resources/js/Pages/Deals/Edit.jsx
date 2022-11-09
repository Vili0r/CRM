import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

const Edit = () => {
  const { accounts, contacts, stages, deal } = usePage().props;
  const { data, setData, put, processing, errors } = useForm({
    name: deal.name || '',
    pipeline: deal.pipeline || '',
    stage: deal.stage || '',
    amount: deal.amount || '',
    probability: deal.probability || '',
    close_date: deal.close_date || '',
    contact_id: deal.contact_id || '',
    account_id: deal.account_id || '',
  });

  const onChange = (value) => {
    setValues({ ...values,
      body:value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    put(route('deals.update', deal.id));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Deals | Edit" />

      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold">
              <InertiaLink
                className="text-indigo-600 hover:text-orange-400 no-underline focus:outline-none"
                href={route('contacts.index')}
              > 
                Deals
              </InertiaLink>
              <span className="font-medium text-indigo-600" > /</span> Edit
            </h1>
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                <form onSubmit={submit}>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <InputLabel forInput="name" value="Name" />
                            <TextInput
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={e => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel forInput="pipeline" value="Pipeline" />
                            <TextInput
                                type="text"
                                name="pipeline"
                                value={data.pipeline}
                                className="mt-1 block w-full"
                                handleChange={e => setData('pipeline', e.target.value)}
                            />
                            <InputError message={errors.pipeline} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="stage" value="Stage" />
                            <select
                                name="stage"
                                value={data.stage}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('stage', e.target.value)}
                            >
                                <option value="">Select a Stage</option>
                                {stages.data.map(({ id, name }) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.stage} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="amount" value="Amount" />
                            <TextInput
                                type="text"
                                name="amount"
                                value={data.amount}
                                className="mt-1 block w-full"
                                handleChange={e => setData('amount', e.target.value)}
                            />
                            <InputError message={errors.amount} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="probability" value="Enter probablity from 0-100%" />
                            <TextInput
                                type="text"
                                name="probability"
                                value={data.probability}
                                className="mt-1 block w-full"
                                handleChange={e => setData('probability', e.target.value)}
                            />
                            <InputError message={errors.probability} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="close_date" value="Close Date" />
                            <TextInput
                                type="date"
                                name="close_date"
                                value={data.close_date}
                                className="mt-1 block w-full"
                                handleChange={e => setData('close_date', e.target.value)}
                            />
                            <InputError message={errors.close_date} className="mt-2" />
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
                        <div>
                            <InputLabel forInput="contact_id" value="Contact" />
                            <select
                                name="contact_id"
                                value={data.contact_id}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('contact_id', e.target.value)}
                            >
                                <option value="">Select a Contact</option>
                                {contacts.map(({ id, first_name }) => (
                                    <option key={id} value={id}>
                                        {first_name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.contact_id} className="mt-2" />
                        </div>
                      </div>

                      <div className="flex items-center justify-end mt-4">
                          <PrimaryButton className="ml-4 hover:bg-sky-600 bg-orange-400" processing={processing}>
                              Update
                          </PrimaryButton>
                      </div>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Edit