import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

const Lead = ({ id }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        details: '',
        due_date: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('leads.task', id));

        setData({ ...data,
            title: '',
            due_date: '',
            details: '',
        });
    };

  return (
    <form onSubmit={submit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <InputLabel forInput="title" value="Title" />
                <TextInput
                    type="text"
                    name="title"
                    value={data.title}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={e => setData('title', e.target.value)}
                />
                <InputError message={errors.title} className="mt-2" />
            </div>
            
            <div>
                <InputLabel forInput="due_date" value="Due date" />
                <TextInput
                    type="date"
                    name="due_date"
                    value={data.due_date}
                    className="mt-1 block w-full"
                    handleChange={e => setData('due_date', e.target.value)}
                />
                <InputError message={errors.due_date} className="mt-2" />
            </div>
        </div>
        <div>
            <InputLabel forInput="details" value="Details" className="mt-4" />
            <textarea
                id="details"
                name="details"
                value={data.details}
                className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                placeholder="Add details.."
                onChange={e => setData('details', e.target.value)}
            />
            <InputError message={errors.details} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-6">
            <PrimaryButton className="ml-4 hover:bg-purple-700 bg-orange-400" processing={processing}>
                Add a task
            </PrimaryButton>
        </div>
    </form>
  )
}

export default Lead