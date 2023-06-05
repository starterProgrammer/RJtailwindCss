import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const PopupMenu = ({ navlinks, showMenu }) => {
    return (
        <>
            <nav className={`
                            fixed top-14 right-14 bg-white
                            bg-opacity-70 opacity-100 z-50 border-r
                            transition-transfrom duration-300  active:scale-90
                            backdrop-filter backdrop-blur-md
                            rounded-lg w-40 h-auto py-4 px-6 hidden  ${(showMenu ? '  md:flex justify-center items-center' : '')}
                            `}>
                <ul className='flex flex-col items-center gap-3'>
                    {navlinks?.map((item) => {
                        return (
                            <li>
                                <NavLink to={item.link}>{item.id}</NavLink>
                            </li>
                        )
                    })}
                    <li><button type='button' className='button-light sm:w-auto text-sm w-36 rounded-lg'>Join Us</button></li>
                </ul>
            </nav>
        </>
    )
}

export default PopupMenu
