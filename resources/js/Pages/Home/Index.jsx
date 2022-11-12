import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';
import DealHomeCard from '@/Components/DealHomeCard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

const Index = () => {
    const { deals, stages } = usePage().props;

  return (
    <DndProvider backend={HTML5Backend}>
        <AuthenticatedLayout>
            <Head title="Home | Index" />
            <div className="mt-2">
                <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
                    <div className="flex items-center justify-between border-b border-indigo-500">
                        <h1 className="mb-8 text-3xl font-bold">Deals</h1>
                        <InertiaLink
                            className="px-3 py-2 bg-indigo-600 hover:bg-orange-400 rounded-lg text-white hover:text-gray-700 focus:outline-none"
                            href={route('deals.create')}
                        >
                            <span>Create Deal</span>
                        </InertiaLink>
                    </div>
                    <div className="grid lg:grid-cols-7 grid-cols-1 gap-2">
                        {stages.data.map((stage) => (
                            <DealHomeCard key={stage.id} deals={deals} stage={stage} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </DndProvider>
  )
}

export default Index