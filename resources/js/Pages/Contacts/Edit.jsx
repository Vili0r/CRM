import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

const Create = () => {
  const { accounts, contact } = usePage().props;
  const { data, setData, put, processing, errors } = useForm({
    first_name: contact.first_name || '',
    last_name: contact.last_name || '',
    email: contact.email ||'',
    description: contact.description ||'',
    city: contact.city ||'',
    phone_number: contact.phone_number ||'',
    job_title: contact.job_title ||'',
    account_id: contact.account_id ||'',
  });

  const submit = (e) => {
    e.preventDefault();
    put(route('contacts.update', contact.id));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Contacts | Edit" />

      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold">
              <InertiaLink
                className="text-indigo-600 hover:text-orange-400 no-underline focus:outline-none"
                href={route('contacts.index')}
              > 
                Contacts
              </InertiaLink>
              <span className="font-medium text-indigo-600" > /</span> Edit
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
                            <InputLabel forInput="email" value="Email" />
                            <TextInput
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                handleChange={e => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="city" value="City" />
                            <TextInput
                                type="text"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                handleChange={e => setData('city', e.target.value)}
                            />
                            <InputError message={errors.city} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="phone_number" value="Phone Number" />
                            <TextInput
                                type="text"
                                name="phone_number"
                                value={data.phone_number}
                                className="mt-1 block w-full"
                                handleChange={e => setData('phone_number', e.target.value)}
                            />
                            <InputError message={errors.phone_number} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="job_title" value="Job Title" />
                            <TextInput
                                type="text"
                                name="job_title"
                                value={data.job_title}
                                className="mt-1 block w-full"
                                handleChange={e => setData('job_title', e.target.value)}
                            />
                            <InputError message={errors.job_title} className="mt-2" />
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

export default Create