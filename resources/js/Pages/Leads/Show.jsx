import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage , Link, InertiaLink } from '@inertiajs/inertia-react';
import Timeline from '@/Components/Timeline';
import Tabs from '@/Components/LeadTabs';
import AccountCard from '@/Components/AccountCard';
import DealProgress from '@/Components/DealProgress';
import Modal from '@/Components/LeadModal';

const Show = () => {
  const { lead, newArray, stages } = usePage().props;
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <AuthenticatedLayout>
      <Head title="Leads | Show" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* <DealProgress lead={lead} stages={stages} /> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                        <Link>
                            <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">{lead.first_name} {lead.last_name}</h5>
                        </Link>
                        <InertiaLink 
                            href={route('leads.index')}
                            className="font-medium px-2 py-3 rounded-lg text-white bg-purple-700 hover:bg-purple-800"
                        >
                          All Leads
                        </InertiaLink>
                    </div>
                  <AccountCard account={lead.account} />
                  <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mt-3">
                      <Link>
                          <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">All deals with {lead.first_name}</h5>
                      </Link>
                      <button
                          onClick={() => {setOpenModal(true)}}
                          className="font-medium px-2 py-3 rounded-lg text-white bg-purple-700 hover:bg-purple-800"
                      >
                        Convert to a Deal
                      </button>
                      {openModal ? 
                        <Modal 
                          setOpenModal={setOpenModal} 
                          accountId={lead.account.id}
                          stages={stages}
                          id={lead.id}
                        /> 
                        : ''
                      }
                  </div>
                </div>
            </div>
            <div className="lg:col-span-8 col-span-1">
              <Tabs lead={lead} />
              <Timeline newArray={newArray} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Show