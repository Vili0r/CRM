import React from 'react';
import { Head, InertiaLink, usePage, Link } from '@inertiajs/inertia-react';
import DraggableDeal from './DraggableDeal';
import { useDrop } from 'react-dnd';
import { Inertia } from "@inertiajs/inertia";

const AccountCard = ({ deals, stage }) => {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => changeStage(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const changeStage = (id) => {
        Inertia.post(`/deals/${id}/stage`, {
            _method: "put",
            stage: stage.id
        });
    };

  return (
    <div ref={drop} className="col-span-1 overflow-hidden bg-white rounded-lg shadow-lg mt-3 mb-3">

        <div className="flex items-center px-2 py-3 bg-gray-900">
            <span className="text-sm font-medium text-white">{stage.name}</span>
        </div>

            {deals.data.map((deal) => (
                deal.stage === stage.name ?
                    <div key={deal.id} className="p-2">
                        <DraggableDeal deal={deal} />
                    </div>
                : ''
            ))}
    </div>
  )
}

export default AccountCard