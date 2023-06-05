import React from 'react'

const Advertise = ({ brands }) => {
    return (
        <>
            <div className='my-16  lg:my-7 m-auto flex justify-between items-center w-9/12 lg:w-[85vw] xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden'>
                {brands?.map((item, i) => {
                    return (
                        <img src={item.iconSrc} className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-200 cursor-pointer filter drop-shadow-md " />
                    )
                })}
            </div>
        </>
    )
}

export default Advertise
