import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

const Modal = ({ setOpenModal, accountId, stages, id }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        pipeline: '',
        stage: '',
        amount: '',
        probability: '',
        close_date: '',
        account_id: accountId,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('leads.deal', id));

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
                    Convert a Lead to a Deal
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
                            <InputLabel forInput="name" value="Name" />
                            <TextInput
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={e => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel forInput="pipeline" value="Pipeline" />
                            <TextInput
                                type="text"
                                name="pipeline"
                                value={data.pipeline}
                                className="mt-1 block w-full"
                                handleChange={e => setData('pipeline', e.target.value)}
                            />
                            <InputError message={errors.pipeline} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="stage" value="Stage" />
                            <select
                                name="stage"
                                value={data.stage}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('stage', e.target.value)}
                            >
                                <option value="">Select a Stage</option>
                                {stages.data.map(({ id, name }) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.stage} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="amount" value="Amount" />
                            <TextInput
                                type="text"
                                name="amount"
                                value={data.amount}
                                className="mt-1 block w-full"
                                handleChange={e => setData('amount', e.target.value)}
                            />
                            <InputError message={errors.amount} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="probability" value="Enter probablity from 0-100%" />
                            <TextInput
                                type="text"
                                name="probability"
                                value={data.probability}
                                className="mt-1 block w-full"
                                handleChange={e => setData('probability', e.target.value)}
                            />
                            <InputError message={errors.probability} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel forInput="close_date" value="Close Date" />
                            <TextInput
                                type="date"
                                name="close_date"
                                value={data.close_date}
                                className="mt-1 block w-full"
                                handleChange={e => setData('close_date', e.target.value)}
                            />
                            <InputError message={errors.close_date} className="mt-2" />
                        </div>
                        <div className="hidden">
                            <InputLabel forInput="account_id" value="Account" />
                            <select
                                name="account_id"
                                value={data.account_id}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('account_id', e.target.value)}
                            >
                                <option value="">{data.account_id}</option>
                                
                            </select>
                            <InputError message={errors.account_id} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-4 gap-2">
                        <button
                            onClick={() => {setOpenModal(false)}}
                            className="font-medium px-2 py-2 rounded-lg text-white hover:bg-orange-400 bg-sky-900"
                        >
                            Cancel
                        </button>
                        <PrimaryButton className="font-medium px-2 py-3 rounded-lg text-white hover:bg-sky-900 bg-orange-400" processing={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal