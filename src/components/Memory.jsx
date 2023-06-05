import React from 'react'

const Memory = ({ memory: { title, subtitle, text, img, experience } }) => {
    return (
        <>
            <div className='relative my-16 md:mb-7'>
                <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>
                    <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
                        <img src={img} alt="memory/img" className='w-auto h-[99vh] object-fill' />
                    </div>
                    <div className='grid items-center w-full max-w-2xl lg:text-center'>
                        <h1 className='text-5xl md:text-3xl lg:text-4xl text-slate-900 font-bold filter drop-shadow-lg'>{title}</h1>
                        <h1 className='text-5xl md:text-3xl lg:text-4xl text-slate-900 font-bold filter drop-shadow-lg'>{subtitle}</h1>
                        <p className='text-base my-5 sm:text-sm'>{text}</p>
                        <div className='grid grid-cols-3 gap-7 items-center xl:gap-3'>
                            {experience?.map((item) => {
                                return (
                                    <div className='bg-gradient-to-b from-emerald-500 to-green-300 
                                                     h-auto w-auto text-slate-900 text-center py-7 px-5 
                                                     cursor-pointer hover:scale-105 transition-all duration-400
                                                     rounded-lg flex flex-col items-center xl:p-5'>
                                        <h1 className='font-bold text-3xl xl:text-2xl sm:text-xl'>{item.number}</h1>
                                        <p className='text-lg xl:text-base sm:text-sm xsm:text-xs font-medium'>{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Memory
