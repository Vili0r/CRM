import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const ContactCard = ({ contact }) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{contact.first_name} {contact.last_name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{contact.job_title} at {contact.account.name}</p>
        <Link 
            href={route('contacts.destroy', contact.id)} 
            type="button" 
            method="delete" 
            as="button" 
            className="font-medium px-2 py-3 rounded-lg text-white bg-purple-700 hover:bg-purple-800"
            >
            Delete
        </Link>
    </div>
  )
}

export default ContactCard