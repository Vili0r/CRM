import React, { useRef, useState } from 'react';
import InvoiceFooter from '@/Components/InvoiceFooter';
import InvoiceTable from '@/Components/InvoiceTable';
import { Head, usePage } from '@inertiajs/inertia-react';
import moment from 'moment';
import ReactToPrint from 'react-to-print';
import Modal from '@/Components/SendEmailModal';

const InvoicePreview = () => {
  const { invoice } = usePage().props;
  const componentRef = useRef();
  const [openModal, setOpenModal] = useState(false);
 
  return (
      <div className="bg-white p-5 rounded">
        <Head title="Prinout" />
            
        <div>
            <ul className="flex items-center justify-end flex-wrap">
                <li className="mx-2">
                    <ReactToPrint 
                        trigger={() => 
                            <button className="hover:bg-indigo-600 transition duration-300 rounded-lg px-2 py-3 text-lg font-semibold bg-orange-400 text-white focus:outline-none">
                                Print/Download
                            </button>
                        }
                        content={() => componentRef.current}
                    />
                </li>
                <li className="mx-2">
                    <button
                        onClick={() => setOpenModal(true)}
                        className="bg-sky-600 transition duration-300 rounded-lg px-2 py-3 text-lg font-semibold hover:bg-indigo-600 text-white focus:outline-none"   
                    >
                        Send
                    </button>
                    {openModal ?
                        <Modal 
                            invoiceId={invoice.id} 
                            clientEmail={invoice.client_email} 
                            setOpenModal={setOpenModal}
                        />
                        : ''
                    }
                </li>
            </ul>
        </div>
        <div className="p-5" ref={componentRef}>

            {/* Header */}
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div>
                    <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
                        Invoice
                    </h1>
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
            <h2 className="text-2xl uppercase font-bold mb-1">{invoice.client_full_name}</h2>
            <p>{invoice.client_address}</p>
            <p>{invoice.client_email}</p>
            <p>{invoice.client_city}</p>
            <p>{invoice.client_post_code}</p>
            <p>{invoice.client_phone_number}</p>
            </section>

            {/* Invoice Details */}
            <article className="mt-10 mb-14 flex items-end justify-end">
            <ul>
                <li className="p-1 ">
                <span className="font-bold">Invoicer number:</span> {invoice.invoice_number}
                </li>
                <li className="p-1 bg-gray-100">
                <span className="font-bold">Invoice date:</span> {moment(invoice.invoice_date).format('MMM DD, YYYY')}
                </li>
            </ul>
            </article>

            <InvoiceTable invoice={invoice.items} />

            <section className="mt-10 mb-5">
            <h3>Additional notes</h3>
            <p className="lg:w-1/2 text-justify">{invoice.notes}</p>
            </section>

            <InvoiceFooter />
        </div>
    </div>
  )
}

export default InvoicePreview