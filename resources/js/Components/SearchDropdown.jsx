import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const SearchDropdown = ({ result }) => {
  
  return (
    <>
      <ul>
        <li className="border-b border-gray-700">
          <Link   
              href={result.url}
              className="flex items-center hover:text-gray-700 px-3 py-3"
          >
            <span className="ml-2">
                {result.name || result.title || result.first_name || result.last_name || result.email}
            </span>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default SearchDropdown