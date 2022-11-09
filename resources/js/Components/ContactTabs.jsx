import React, { useState } from 'react';
import Note from '@/Pages/Notes/ContactCreate';
import Task from '@/Pages/Tasks/ContactCreate';

const ContactTabs = ({ contact }) => {
    const [toggelTab, setToggleTab] = useState(1);

    const activateTab = (index) => {
        setToggleTab(index);
    }

  return (
    <div>
        <div className="inline-flex">
            <button 
                onClick={() => activateTab(1)} 
                className={toggelTab === 1 ? 
                    "flex items-center h-12 px-2 py-2 text-center text-gray-700 border border-b-0 border-gray-300 sm:px-4 rounded-t-md -px-1 whitespace-nowrap focus:outline-none" 
                    : 
                    "flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <span className="mx-1 text-sm sm:text-base">
                    New Note
                </span>
            </button>

            <button 
                onClick={() => activateTab(2)} 
                className={toggelTab === 2 ? 
                    "flex items-center h-12 px-2 py-2 text-center text-gray-700 border border-b-0 border-gray-300 sm:px-4 rounded-t-md -px-1 whitespace-nowrap focus:outline-none" 
                    : 
                    "flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>

                <span className="mx-1 text-sm sm:text-base">
                    Task
                </span>
            </button>

            <button 
                onClick={() => activateTab(3)} 
                className={toggelTab === 3 ? 
                    "flex items-center h-12 px-2 py-2 text-center text-gray-700 border border-b-0 border-gray-300 sm:px-4 rounded-t-md -px-1 whitespace-nowrap focus:outline-none" 
                    : 
                    "flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <span className="mx-1 text-sm sm:text-base">
                    Calendar
                </span>
            </button>
        </div>
        <div className="relative mt-4 rounded-xl bg-white">
            <div className={toggelTab === 1 ? "tab-panel p-6 transition duration-300 h-76" : "absolute top-0 p-6 invisible opacity-0 tab-panel transition duration-300"}>
                <Note id={contact.id} />
            </div>
            <div className={toggelTab === 2 ? "tab-panel p-6 transition duration-300" : "absolute top-0 p-6 invisible opacity-0 tab-panel transition duration-300"}>
                <Task id={contact.id} />
            </div>
            <div className={toggelTab === 3 ? "tab-panel p-6 transition duration-300" : "absolute top-0 p-6 invisible opacity-0 tab-panel transition duration-300"}>
                <h2 className="text-xl font-semibold text-gray-800">Third tab</h2>
            </div>
        </div>
    </div>
  )
}

export default ContactTabs