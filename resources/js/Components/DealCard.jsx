import React from 'react';
import { InertiaLink, Link } from '@inertiajs/inertia-react';

const DealCard = ({ contactName }) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mt-3">
        <Link href="#">
            <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">All deals with {contactName}</h5>
        </Link>
        <InertiaLink 
            href={route('deals.create')}
            className="font-medium px-2 py-3 rounded-lg text-white bg-purple-700 hover:bg-purple-800"
        >
            Create a Deal
        </InertiaLink>
    </div>
  )
}

export default DealCard