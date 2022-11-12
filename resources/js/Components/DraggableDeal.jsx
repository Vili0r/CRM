import React from 'react';
import { Head, InertiaLink, usePage, Link } from '@inertiajs/inertia-react';
import moment from 'moment';
import InputLabel from './InputLabel';
import { useDrag } from 'react-dnd';

const DraggableDeal = ({ deal }) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "div",
        item: {id: deal.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

  return (
    <div 
        ref={drag} 
        className={isDragging ? "grid grid-rows-2 w-full bg-slate-200 rounded-lg border-2 border-orange-500 shadow-md" : "grid grid-rows-2 w-full bg-slate-200 rounded-lg border border-gray-200 shadow-md"}
    >
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
  )
}

export default DraggableDeal