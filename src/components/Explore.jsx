import React from 'react'

const Explore = ({ title, placesAPI }) => {
    return (
        <>
            <div className='relative my-7 md:mt-3'>
                <div className='travigo-container'>
                    <div className='flex justify-center items-center text-center mb-11 md:mb-7'>
                        <h1 className='font-bold text-5xl lg:text-4xl md:text-3xl sm:text-2xl  xsm:text-xl filter drop-shadow-lg text-slate-900'>{title}</h1>
                    </div>
                    <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 items-start gap-5'>
                        {
                            placesAPI?.map((item, i) => {
                                return (
                                    <div key={i} className="rounded-lg flex gap-5 sm:gap-3 hover:bg-emerald-300  hover:scale-105 transition-all duraion-300 cursor-pointer">
                                        <div className='flex items-center'>
                                            <img className='w-20 h-20 rounded-lg sm:w-16 sm:h-16 filter drop-shadow-lg' src={item.placeImg} />
                                        </div>
                                        <div className='flex flex-col items-start justify-center text-slate-900'>
                                            <h4 className='text-lg sm:text-sm font-bold'>{item.location}</h4>
                                            <p className='text-base lg:text-sm font-normal sm:text-xs'>{item.distance}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore