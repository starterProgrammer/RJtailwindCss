import React from 'react'

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <footer className='bg-gradient-to-b from-emerald-500 to-emerald-400 border-black p-3'>
        <div className='travigo-container grid grid-cols-3 gap-4 justify-center'>
          {titles?.map((item, i) => {
            return (
              <div key={i} className="flex justify-center">
                <h1 className='font-bold text-lg '>{item.title}</h1>
              </div>
            )
          })}
          {
            links.map((items, i) => {
              return (
                <ul key={i} className="flex flex-col items-center">
                  {items?.map((item, i) => {
                    return (
                      <li className='text-sm text-slate-600 text-center'>
                        {item.link}
                      </li>
                    )
                  })}
                </ul>
              )
            })}
        </div>

        <div className='h-[0.1vh] bg-slate-900 mx-1 mt-2'></div>

        <div className='flex justify-center items-center m-3 gap-3'>
          {
            sociallinks?.map((item, i) => {
              return (
                <div>
                  <img className='w-8 h-8 flex justify-center items-center bg-white rounded-full p-2 cursor-pointer transiton-all duraation-200 hover:scale-125 hover:bg-emerald-200' src={item.icon} alt={i} />
                </div>
              )
            })
          }

        </div>
        <div className='flex items-center justify-center'>
          <h1 className='text-sm text-gray-700 font-semibold'>Copyright All Reserved Rights 2023 Ali Talaee!</h1>
        </div>
      </footer>
    </>
  )
}

export default Footer
