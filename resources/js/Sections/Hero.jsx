import React from 'react';

const Hero = () => {
    
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <section className="bg-gray-100">
            <div className="container px-6 py-16 mx-auto text-center">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">Start manging your team with Axius CRM</h1>
                    <p className="mt-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.</p>
                    <button className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-indigo-600 rounded-lg hover:bg-indigo-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Start 14-Day free trial
                    </button>
                    <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
                </div>

                <div className="flex justify-center mt-10">
                    <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero