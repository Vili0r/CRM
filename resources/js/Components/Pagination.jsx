import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const PageLink = ({ active, label, url }) => {
    
    return (
      <InertiaLink className={active ? 'bg-gray-200 hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline hover:bg-sky-700 hover:text-white' : 'hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline hover:bg-sky-700 hover:text-white'} href={url}>
        <span dangerouslySetInnerHTML={{ __html: label }}></span>
      </InertiaLink>
    );
};

const PageInactive = ({ label }) => {
    return (
      <div className="mr-1 mb-1 px-4 py-2 text-sm border rounded border-solid border-gray-300 text-gray" dangerouslySetInnerHTML={{ __html: label }} />
    );
  };

const Pagination = ({ links = [] }) => {
    
    if (links.length === 3) return null;
    return (
      <div className="flex flex-wrap mt-6 -mb-1">
        {links.map(({ active, label, url }) => {
          return url === null ? (
            <PageInactive key={label} label={label} />
          ) : (
            <PageLink key={label} label={label} active={active} url={url} />
          );
        })}
      </div>
    );
}

export default Pagination;