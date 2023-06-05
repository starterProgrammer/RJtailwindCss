import React from 'react'

const Hero = ({ hero: { title, subtitle, text, btn1, btn2, img } }) => {
    return (
        <>
            <div className='flex flex-col  h-auto w-auto '>
                <div className='travigo-container grid item-start justify-items-center '>
                    <div className='grid item-center mt-36 justify-items-center  mb-16  md:mb-12 md:mt-28'>
                        <h1 className='text-5xl font-bold xl:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl filter drop-shadow-lg text-black'>{title}</h1>
                        <h1 className='text-5xl font-bold xl:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl filter drop-shadow-lg text-black'>{subtitle}</h1>
                        <p className='text-center text-base my-5 sm:text-sm'>{text}</p>
                        <div className='flex justify-center items-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
                            <button className='button-emelan' type='button'>{btn1}</button>
                            <button className='button-light' type='button'>{btn2}</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mb-11 '>
                        <img className='
                        h-[85vh] w-full object-fill lg:h-[75vh] 
                        md:h-[57vh]  sm:h-[35vh] object-contain
                        drop-shadow-emerlad
                        ' src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
