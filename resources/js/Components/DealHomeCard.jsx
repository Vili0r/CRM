import React from 'react';
import { Head, InertiaLink, usePage, Link } from '@inertiajs/inertia-react';
import moment from 'moment';
import InputLabel from './InputLabel';

const AccountCard = ({ deals, stage }) => {
    
  return (
    <div className="col-span-1 overflow-hidden bg-white rounded-lg shadow-lg mt-3 mb-3">

        <div className="flex items-center px-2 py-3 bg-gray-900">
            <span className="text-sm font-medium text-white">{stage.name}</span>
        </div>

            {deals.data.map((deal) => (
                deal.stage === stage.name ?
                    <div className="p-3">
                        <div key={deal.id} className="grid grid-rows-2 w-full bg-slate-200 rounded-lg border border-gray-200 shadow-md">
                            <h5 className="text-base font-bold">
                                <InertiaLink
                                    className="text-indigo-600 hover:text-orange-400 no-underline focus:outline-none"
                                    href={route('deals.show', deal.id)}
                                > 
                                    {deal.name} Deal
                                </InertiaLink>
                                <span className="font-medium text-indigo-600" > /</span> £{deal.amount}
                            </h5> 
                            <div>
                                <InputLabel forInput="name" value="Close Date" className="text-xs mt-3" />
                                <h5 className="text-md font-semibold tracking-tight text-gray-900">{moment(deal.close_date).format('MMM DD, YYYY')}</h5>
                            </div>
                        </div>
                    </div>
                : ''
            ))}
    </div>
  )
}

export default AccountCard