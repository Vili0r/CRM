import React, { useState } from 'react';
import SearchDropdown from '@/Components/SearchDropdown';
import { Inertia } from '@inertiajs/inertia';

const Search = ({ searchResults }) => {
    const [searchInput, setSearchInput] = useState("");

    function handleSearch(e) {
        const search = e.target.value;
        setSearchInput(search);
    }
    
    const search = () => {
        Inertia.get(
            route('global.search'), 
            {search: searchInput}, 
            {
            replace: true,
            preserveState: true
            }
        );
    }

  return (
    <div className="relative mt-4 md:mt-0">
        <button onClick={search} className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>

        <input 
            name="search"
            type="search" 
            value={searchInput}
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
            placeholder="Search.." 
            onChange={handleSearch}  
        />
        {
            searchInput.length >= 2
                ?(
                searchResults?.length > 0
                    ? (
                        <div className="absolute bg-white text-sm rounded w-64 mt-4">
                            {searchResults?.slice(0, 8).map((result, index) => (
                                <SearchDropdown result={result} key={index} />  
                            ))}
                        </div>
                    ) : (
                        ('')
                    )
            ): ('')
        }
    </div>
  )
}

export default Search