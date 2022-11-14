import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, InertiaLink } from '@inertiajs/inertia-react';
import AccountCard from '@/Components/AccountCard';

const Show = () => {
  const { account } = usePage().props;
  
  return (
    <AuthenticatedLayout>
      <Head title="Account | Show" />

      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold">
              <InertiaLink
                className="text-indigo-600 hover:text-orange-400 no-underline focus:outline-none"
                href={route('accounts.index')}
              > 
                Accounts
              </InertiaLink>
              <span className="font-medium text-indigo-600" > /</span> Create
            </h1>
            <AccountCard account={account} />  
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Show