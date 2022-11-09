import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage , Link, InertiaLink } from '@inertiajs/inertia-react';
import ContactCard from '@/Components/ContactCard';
import Timeline from '@/Components/Timeline';
import Tabs from '@/Components/DealTabs';
import AccountCard from '@/Components/AccountCard';

const Show = () => {
  const { deal, newArray } = usePage().props;
  
  return (
    <AuthenticatedLayout>
      <Head title="Deals | Show" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                        <Link href="#">
                            <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">{deal.name} Deal</h5>
                        </Link>
                        <InertiaLink 
                            href={route('deals.index')}
                            className="font-medium px-2 py-3 rounded-lg text-white bg-purple-700 hover:bg-purple-800"
                        >
                            All Deals
                        </InertiaLink>
                    </div>
                  <AccountCard account={deal.account} />
                  <ContactCard contact={deal.contact} />
                </div>
            </div>
            <div className="lg:col-span-8 col-span-1">
              <Tabs deal={deal} />
              <Timeline newArray={newArray} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Show