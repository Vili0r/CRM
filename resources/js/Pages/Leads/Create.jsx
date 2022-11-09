import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

const Create = () => {
  const { accounts, statuses, sources } = usePage().props;
  const { data, setData, post, processing, errors } = useForm({
    first_name: '',
    last_name: '',
    source: '',
    description: '',
    website: '',
    status: '',
    account_id: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('leads.store'));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Leads | Create" />

      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold">
              <InertiaLink
                className="text-indigo-600 hover:text-orange-400 no-underline focus:outline-none"
                href={route('leads.index')}
              > 
                Leads
              </InertiaLink>
              <span className="font-medium text-indigo-600" > /</span> Create
            </h1>
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                  <form onSubmit={submit}>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <InputLabel forInput="first_name" value="First Name" />
                            <TextInput
                                type="text"
                                name="first_name"
                                value={data.first_name}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={e => setData('first_name', e.target.value)}
                            />
                            <InputError message={errors.first_name} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel forInput="last_name" value="Last Name" />
                            <TextInput
                                type="text"
                                name="last_name"
                                value={data.last_name}
                                className="mt-1 block w-full"
                                handleChange={e => setData('last_name', e.target.value)}
                            />
                            <InputError message={errors.last_name} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="source" value="Source" />
                            <select
                                name="source"
                                value={data.source}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('source', e.target.value)}
                            >
                                <option value="">Select the Source</option>
                                {sources.data.map(({ id, name }) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.source} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="website" value="website" />
                            <TextInput
                                type="text"
                                name="website"
                                value={data.website}
                                className="mt-1 block w-full"
                                handleChange={e => setData('website', e.target.value)}
                            />
                            <InputError message={errors.website} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="status" value="Status" />
                            <select
                                name="status"
                                value={data.status}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('status', e.target.value)}
                            >
                                <option value="">Select a Status</option>
                                {statuses.data.map(({ id, name }) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.status} className="mt-2" />
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

                        <div className="mt-4">
                            <InputLabel forInput="description" value="Description" />
                            <textarea
                                type="text"
                                name="description"
                                rows="4"
                                value={data.description}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('description', e.target.value)}
                            />
                            <InputError message={errors.description} className="mt-2" />
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
  )
}

export default Create