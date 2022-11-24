import InvoiceFooter from '@/Components/InvoiceFooter';
import InvoiceTable from '@/Components/InvoiceTable';
import React from 'react';

const InvoicePreview = ({ data, setShowInvoice }) => {
  
  const handlePrint = () => {
      window.print();
  }
 
  return (
    <div className="bg-white p-5 rounded">
      <div className="p-5">

        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
              Invoice
            </h1>
          </div>

          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li className="mx-2">
                <button
                    onClick={handlePrint}
                    className="hover:bg-indigo-600 transition duration-300 rounded-lg px-2 py-3 mb-8 text-lg font-semibold bg-orange-400 text-white focus:outline-none"    
                >
                    Print / Download
                </button>
              </li>
              <li className="mx-2">
                <button
                    onClick={() => setShowInvoice(false)}
                    className="bg-sky-600 transition duration-300 rounded-lg px-2 py-3 mb-8 text-lg font-semibold hover:bg-orange-400 text-white focus:outline-none"   
                >
                    Edit Invoice
                </button>
              </li>
            </ul>
          </div>
        </header>

        {/* Company Details */}
        <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-3xl uppercase mb-1">Axius CRM</h2>
          <p>Flat 10 Summit House</p>
          <p>Reading, UK</p>
        </section>

        {/* Customer Details */}
        <section className="mt-10">
          <h2 className="text-2xl uppercase font-bold mb-1">{data.client_full_name}</h2>
          <p>{data.client_address}</p>
          <p>{data.client_city}</p>
          <p>{data.client_post_code}</p>
          <p>{data.client_phone_number}</p>
        </section>

        {/* Invoice Details */}
        <article className="mt-10 mb-14 flex items-end justify-end">
          <ul>
            <li className="p-1 ">
              <span className="font-bold">Invoicer number:</span> {data.invoice_number}
            </li>
            <li className="p-1 bg-gray-100">
              <span className="font-bold">Invoice date:</span> {data.invoice_date}
            </li>
          </ul>
        </article>

        <InvoiceTable data={data.items} />

        <section className="mt-10 mb-5">
          <h3>Additional notes</h3>
          <p className="lg:w-1/2 text-justify">{data.notes}</p>
        </section>

        <InvoiceFooter />
      </div>
    </div>
  )
}

export default InvoicePreview