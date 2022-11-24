import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, usePage, Link } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';

const Index = () => {
    const { invoices } = usePage().props;
    const {
        data,
        meta: { links }
    } = invoices;

  return (
    <AuthenticatedLayout>
        <Head title="Invoices | Index" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">Invoices</h1>
                    <div className="flex items-center justify-end mb-6">
                        <InertiaLink
                            className="px-3 py-2 bg-indigo-600 hover:bg-orange-400 rounded-lg text-white hover:text-gray-700 focus:outline-none"
                            href={route('invoices.create')}
                        >
                            <span>Create Invoice</span>
                        </InertiaLink>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Name
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Invoice Number
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Invoice Date
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Account
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Amount
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Created at
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(({id, client_full_name, invoice_number, invoice_date, account, created_at, amount}) => (
                                        <tr className="bg-white border-b hover:bg-gray-50" key={id}>
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                <InertiaLink href={route('invoices.show', id)}>
                                                    {client_full_name}
                                                </InertiaLink>
                                            </th>
                                            <td className="py-4 px-6">
                                                <InertiaLink href={route('invoices.show', id)}>
                                                    {invoice_number}
                                                </InertiaLink>
                                            </td>
                                            <td className="py-4 px-6">
                                                <InertiaLink href={route('invoices.show', id)}>
                                                    {invoice_date}
                                                </InertiaLink>
                                            </td>
                                            <td className="py-4 px-6">
                                                <InertiaLink href={route('invoices.show', id)}>
                                                    {account.name}
                                                </InertiaLink>
                                            </td>
                                            <td className="py-4 px-6">
                                                <InertiaLink href={route('invoices.show', id)}>
                                                    {amount}
                                                </InertiaLink>
                                            </td>
                                            <td className="py-4 px-6">
                                                <InertiaLink href={route('invoices.show', id)}>
                                                    {created_at}
                                                </InertiaLink>
                                            </td>
                                            <td className="py-4 px-6 text-right flex justify-between">
                                                <Link 
                                                    href={route('invoices.destroy', id)} 
                                                    type="button" 
                                                    method="delete" 
                                                    as="button" 
                                                    className="font-medium text-indigo-700 hover:underline"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    {data.length === 0 && (
                                        <tr>
                                            <td className="py-4 px-6">
                                                No invoices found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="mt-3 mb-3 ml-3">
                                <Pagination 
                                    links={links} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default Index