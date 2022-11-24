import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const InvoiceFooter = () => {
  return (
    <>
      <footer className="border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center gap-2">
          <li>
            <span className="font-bold">Your name:</span> Axius CRM
          </li>
          <li>
            <span className="font-bold">Your email:</span> info@axius.com
          </li>
          <li>
            <span className="font-bold">Phone number:</span> 07774118363
          </li>
          <li>
            <span className="font-bold">Bank:</span> NatWest
          </li>
          <li>
            <span className="font-bold">Account holder:</span> Vilior Cuni
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <InertiaLink href="/" target="_blank" rel="noopenner noreferrer">
                www.axius.com
            </InertiaLink>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default InvoiceFooter