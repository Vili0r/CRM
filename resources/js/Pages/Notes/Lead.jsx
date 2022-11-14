import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const Lead = ({ id }) => {
    const { data, setData, post, processing, errors } = useForm({
        content: '',
    });

    const onChange = (value) => {
        setData({ ...data,
          content:value
        });
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('leads.note', id));

        setData({ ...data,
            content: ''
        });
    };

  return (
    <form onSubmit={submit}>
        <div>
            <ReactQuill 
                theme="snow" 
                value={data.content} 
                onChange={onChange} 
                placeholder={"Start typing to leave a note..."}
                className="h-36"
            />

            <InputError message={errors.content} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-16">
            <PrimaryButton className="ml-4 hover:bg-purple-700 bg-orange-400" processing={processing}>
                Add a note
            </PrimaryButton>
        </div>
    </form>
  )
}

export default Lead