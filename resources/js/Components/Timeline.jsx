import React from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

const Timeline = ({ newArray }) => {
    
  return (
    <div className="mt-10">
        <h3 className="text-2xl text-gray-700 font-bold mb-6 -ml-3">Latest Actions</h3>
        <ol className="border-l-2 border-purple-600">
            {Object.values(newArray).reverse().map((item, index) => (
                <li key={index}>
                    <div className="md:flex flex-start">
                        <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                            {item.title ? 
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 text-white sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                :
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                </svg>
                            }
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
                            <div className="flex justify-between mb-4">
                                <span className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                                    {item.title ?
                                        item.title
                                        :
                                        <span className="mr-10">
                                            Please see this note
                                        </span>
                                    }
                                </span>
                                <span className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                                    {moment(item.create_at).format('MMM DD, YYYY')}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-6">
                                {item.title ? 
                                    item.details
                                    :
                                    parse(item.content)
                                } 
                            </p>
                            <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">
                                Edit
                            </button>
                            <button type="button" className="ml-2 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default Timeline