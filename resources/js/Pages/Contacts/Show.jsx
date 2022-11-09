import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/inertia-react';
import ContactCard from '@/Components/ContactCard';
import Timeline from '@/Components/Timeline';
import Tabs from '@/Components/ContactTabs';
import AccountCard from '@/Components/AccountCard';
import DealCard from '@/Components/DealCard';

const Show = () => {
  const { contact, newArray } = usePage().props;
  
  return (
    <AuthenticatedLayout>
      <Head title="Contacts | Show" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                  <ContactCard contact={contact} />
                  <AccountCard account={contact.account} />
                  <DealCard contactName={contact.first_name} />
                </div>
            </div>
            <div className="lg:col-span-8 col-span-1">
              <Tabs contact={contact} />
              <Timeline newArray={newArray} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Show