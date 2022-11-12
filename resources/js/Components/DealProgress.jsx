import React from 'react';
import InputLabel from './InputLabel';
import moment from 'moment';

const DealProgress = ({ deal, stages }) => {
    
  return (
    <div className="p-4 max-w-7xl bg-white rounded-lg border border-gray-200 shadow-md mb-16 grid grid-cols-8">
        <div className="col-span-1 ml-2">
            <InputLabel forInput="name" value="Deal Title" />
            <h3 className="mb-10 text-xl font-bold tracking-tight text-gray-900">{ deal.name }</h3>
            <InputLabel forInput="name" value="Account Name" />
            <h5 className="text-lg font-semibold tracking-tight text-gray-900">{ deal.account.name }</h5>
        </div>
        <div className="w-full mx-auto mt-10 my-4 border-b-2 pb-4 col-span-6">	
            <div className="flex pb-3">
                {stages.data.map((stage, index) => (
                    <>
                        <div key={index} className="flex-1">
                            <div 
                                className={deal.stage >= stage.id ? 
                                    'w-10 h-10 bg-green-500 mx-auto rounded-full text-lg text-white flex items-center'
                                    :
                                    'w-10 h-10 bg-white border-2 border-gray-100 mx-auto rounded-full text-lg text-white flex items-center'
                                }
                            >
                                {deal.stage >= stage.id ?
                                
                                    <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
                                    :
                                    <span className="text-gray-700 text-center w-full">{stage.id}</span>
                                }
                            </div>
                        </div>

                        <div className="w-1/6 align-center items-center align-middle content-center flex">
                            <div className="w-full bg-gray-100 rounded items-center align-middle align-center flex-1">
                                <div className="bg-green-300 text-xs leading-none py-1 text-center text-gray-700 rounded " style={deal.stage >= stage.id ? {width: '100%'}: {width: '0%'}}></div>
                            </div>
                        </div>
                    </>
                ))}		
            </div>
            
            <div className="flex text-xs content-center text-center">
                {stages.data.map((stage) => (
                    <div key={stage.id} className="w-1/4">
                        {stage.name}
                    </div>			
                ))}
            </div>
        </div>
        <div className="col-span-1 ml-6">
            <InputLabel forInput="name" value="Amount" /> 
            <h3 className="mb-10 text-xl font-bold tracking-tight text-gray-900">£{ deal.amount }</h3>
            {' '}
            <InputLabel forInput="name" value="Close Date" />
            <h5 className="text-lg font-semibold tracking-tight text-gray-900">{moment(deal.close_date).format('MMM DD, YYYY')}</h5>
        </div>
    </div>
  )
}

export default DealProgress