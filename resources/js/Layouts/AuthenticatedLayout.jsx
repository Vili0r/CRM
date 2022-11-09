import React, { useEffect, useState } from 'react';
import Navigation from '@/Shared/Navigation';
import Sidebar from '@/Shared/Sidebar';
import { Link, usePage } from '@inertiajs/inertia-react';

const IconSuccess = () => (
    <svg
      className="ml-4 mr-2 flex-shrink-0 w-4 h-4 text-white fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
    </svg>
);

export default function AuthenticatedLayout({ children }) {
    const { auth, flash } = usePage().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
          }, 3000);
    }, [flash]);
  
    return (
        <div className="flex">
            <div className="flex flex-col min-h-screen p-3 bg-sky-900 shadow w-[170px]">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <Link href="/">
                            <h2 className="text-xl text-white font-bold">Axius CRM</h2>
                        </Link>
                    </div>
                    <div className="flex-1 text-white">
                        <Sidebar auth={auth}/>
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-gray-100">
                <Navigation auth={auth} />
                {flash.message && visible && (
                    <div className="mb-8 m-12 flex items-center justify-between bg-green-500 rounded max-w-7xl">
                        <div className="flex items-center">
                            <IconSuccess />
                            <div className="py-4 text-white text-sm font-medium">
                                {flash.message}
                            </div>
                        </div>
                        <button onClick={() => setVisible(false)} > 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
                {children}
            </div>
        </div> 
    );
}
