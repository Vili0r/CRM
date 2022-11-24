import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const Modal = ({ setOpenModal, invoiceId, clientEmail }) => {
    const { data, setData, post, processing, errors, progress } = useForm({
        invoice_file: null,
        invoice_id: invoiceId,
        client_email: clientEmail,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('invoices.send', invoiceId));

        setOpenModal(false);
    };
    
  return (
    //Backdrop
    <div className="flex justify-center items-center bg-black/50 fixed left-0 top-0 bottom-0 right-0 z-10">
        {/* Dialog  */}
        <div className="w-3/4 md:w-1/2 bg-white rounded-lg">
            {/* Modal Title  */}
            <div className="py-2 px-4 flex justify-between bg-gray-200 rounded-t-lg">
                <h2 className="text-lg semi-bold">
                    Attach the invoice and Sent it to the client
                </h2>
                <button onClick={() => {setOpenModal(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            {/* Modal body  */}
            <div className="h-full p-4">
                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <InputLabel forInput="invoice_file" value="Invoice File" />
                            <input
                                type="file"
                                name="invoice_file"
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('invoice_file', e.target.files[0])}
                            />
                            <InputError message={errors.invoice_file} className="mt-2" />
                        </div>
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    </div>
                    <div className="flex items-center justify-end mt-4 gap-2">
                        <button
                            onClick={() => {setOpenModal(false)}}
                            className="font-medium px-2 py-2 rounded-lg text-white hover:bg-orange-400 bg-sky-900"
                        >
                            Cancel
                        </button>
                        <PrimaryButton className="font-medium px-2 py-3 rounded-lg text-white hover:bg-sky-900 bg-orange-400" processing={processing}>
                            Send Email
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal