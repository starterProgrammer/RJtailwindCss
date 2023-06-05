import React from 'react'

const Banner = ({ bannerAPI: { title, text, imgSrc, btnText } }) => {
    return (
        <>
            <div className='relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw]'>
                <div className='relative flex items-center'>
                    <img src={imgSrc} alt="banner" className='rounded-lg h-[50vh] w-full' />
                </div>

                <div className='absolute top-24 left-12 w-full flex gap-4 flex-col items-start  md:gap-1 md:items-center md:justify-center md:left-0 md:bottom-14'>
                    <h1 className='font-bold text-slate-900 text-3xl filter drop-shadow-lg '>{title}</h1>
                    <p className='text-gray-500 font-normal text-sm md:text-slate-900'>{text}</p>
                    <button className='button-black px-2' type='button'>{btnText}</button>
                </div>
            </div>
        </>
    )
}

export default Banner