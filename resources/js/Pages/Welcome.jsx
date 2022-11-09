import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Hero from '@/Sections/Hero';
import Navbar from '@/Sections/Navbar';
import Footer from '@/Sections/Footer';

export default function Welcome(props) {
    return (
        <>
            <Head title="Axius | CRM" />
            <Navbar auth={props}/>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
                <Hero />
            </div>
            <Footer />
        </>
    );
}
