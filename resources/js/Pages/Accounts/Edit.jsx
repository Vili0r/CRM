import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

const Edit = () => {
  const { account } = usePage().props;
  const { data, setData, put, processing, errors } = useForm({
    name: account.name || '',
    domain: account.domain || '',
    industry: account.industry || '',
    city: account.city || '',
    phone_number: account.phone_number || '',
    country: account.country || '',
    post_code: account.post_code || '',
  });

  const submit = (e) => {
    e.preventDefault();
    put(route('accounts.update', account.id));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Accounts | Edit" />

      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold">
              <InertiaLink
                className="text-indigo-600 hover:text-orange-400 no-underline focus:outline-none"
                href={route('accounts.index')}
              > 
                Accounts
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
                            <InputLabel forInput="domain" value="Domain Name" />
                            <TextInput
                                type="text"
                                name="domain"
                                value={data.domain}
                                className="mt-1 block w-full"
                                handleChange={e => setData('domain', e.target.value)}
                            />
                            <InputError message={errors.domain} className="mt-2" />
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
                            <InputLabel forInput="industry" value="Industry" />
                            <TextInput
                                type="text"
                                name="industry"
                                value={data.industry}
                                className="mt-1 block w-full"
                                handleChange={e => setData('industry', e.target.value)}
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
                            <InputLabel forInput="country" value="Country" />
                            <TextInput
                                type="text"
                                name="country"
                                value={data.country}
                                className="mt-1 block w-full"
                                handleChange={e => setData('country', e.target.value)}
                            />
                            <InputError message={errors.country} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="post_code" value="Post Code" />
                            <TextInput
                                type="text"
                                name="post_code"
                                value={data.post_code}
                                className="mt-1 block w-full"
                                handleChange={e => setData('post_code', e.target.value)}
                            />
                            <InputError message={errors.post_code} className="mt-2" />
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