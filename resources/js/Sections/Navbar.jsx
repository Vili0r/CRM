import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Navbar = ({auth}) => {
   
  return (
    <nav className="relative bg-white shadow">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <Link 
                        className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-3xl hover:text-gray-700" 
                        href="/"
                        >
                        Axius CRM
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="absolute translate-x-0 opacity-100 inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div className="flex flex-col md:flex-row md:mx-6 items-center">
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-indigo-700 md:mx-4 md:my-0" href="#">Home</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-indigo-700 md:mx-4 md:my-0" href="#">Contact</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-indigo-700 md:mx-4 md:my-0" href="#">About</a>
                        {auth?.user ? (
                            <Link href={route('dashboard')} className="my-2 px-2 py-3 bg-indigo-500 hover:bg-indigo-700 transition-colors duration-300 transform md:mx-4 md:my-0">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="my-2 px-4 py-3 bg-indigo-500 hover:bg-indigo-700 transition-colors duration-300 transform rounded-full text-white md:mx-4 md:my-0">
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 my-2 transition-color px-3 py-3 bg-indigo-500 hover:bg-indigo-700 duration-300 transform rounded-full text-white md:mx-4 md:my-0"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                </div>    
            </div>
        </div>
    </nav>
  )
}

export default Navbar