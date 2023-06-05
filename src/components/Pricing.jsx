import React from 'react'

const Pricing = ({ pricingapi }) => {
    return (
        <>
            <div className='relative my-16'>
                <div className='travigo-container'>
                    <div className='grid justify-items-center gap-4 mb-11 md:mb-7 text-center'>
                        <h1 className='font-bold text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl filter drop-shadow-lg text-slate-900 '>{pricingapi.title}</h1>
                        <p className='text-xl lg:text-sm text-gray-900'>{pricingapi.text}</p>
                        <div className='ring-1 ring-slate-100 rounded-lg px-5 py-2 my-5 shadow-md shadow-slate-200 flex gap-4 md:flex-col sm:w-auto  items-center'>
                            <button type='button' className='button-emelan sm:w-auto'> {pricingapi.btn1}</button>
                            <button type='button' className='button-light sm:w-auto'> {pricingapi.btn2}</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-10 md:grid-cols-1'>
                        {pricingapi.plans?.map((item, i) => {
                            return (
                                <div key={i} className="bg-white rounded-lg  filter drop-shadow-md">
                                    <div className='border-b-black flex justify-between items-center p-4 '>
                                        <div className='flex gap-4 items-center'>
                                            <div>
                                                <img src={item.planicon} className="w-14 h-14 lg:h-10 lg:w-10 object-cover" />
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <h1 className='font-semibold text-slate-900 lg:text-xs md:text-sm filter drop-shadow-md'>{item.title}</h1>
                                                <h1 className='text-gray-600 text-sm md:text-sm lg:text-xs font-normal'>{item.text}</h1>
                                            </div>
                                        </div>

                                        <h1 className='text-center font-bold filter drop-shadow-md lg:text-xs'>{item.plantype}</h1>
                                    </div>

                                    <div className='h-[0.1vh] bg-slate-200 mx-5'></div>
                                    <div className='flex flex-col px-4 py-2 gap-2 items-start justify-center'>
                                        {
                                            item.plancontent?.map((plan, i) => {
                                                return (
                                                    <div key={i} className="flex gap-3 items-center">
                                                        <img className='flex w-4 h-4' src={plan.iconbox} />
                                                        <p className='text-gray-700 text-sm font-normal'>{plan.text}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className='w-full flex justify-center items-center p-2'>
                                            <button type='button' className='button-emelan text-sm sm:text-base md:w-[30vw]'>{item.buttonText}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
