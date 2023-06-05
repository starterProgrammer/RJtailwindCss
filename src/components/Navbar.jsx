import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { navlinks } from '../data/travigodata.js'
import menu from '../images/menu.svg'
import PopupMenu from './PopupMenu'
import { useEffect } from 'react'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [navState, setNavState] = useState(false)

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true)
    } else {
      setNavState(false)
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', onNavScroll)
    return () => {
      window.removeEventListener('scroll', onNavScroll)
    }
  }, [])

  return (
    <>
      <header className={`nav-default ${navState && 'nav-sticky'}`}>
        <nav className='flex items-center justify-between travigo-container'>
          <NavLink to={'/'} className="flex items-center">
            <img src={logo} alt="" className='w-22 h-9 object-fill' />
          </NavLink>
          <ul className='flex items-center gap-7 sm:hidden md:hidden'>
            {
              navlinks.map((item) => {
                return (
                  <li>
                    <NavLink className="text-lg text-slate-900" to={item.id}>{item.link}</NavLink>
                  </li>
                )
              })
            }

          </ul>

          <ul className='flex items-center sm:hidden md:hidden'>
            <li>
              <button className='button-emelan px-7 text-base' type='button'>Join US</button>
            </li>
          </ul>

          <ul className='hidden md:flex items-center'>
            <li>
              <button onClick={() => { setShowMenu(!showMenu) }} type='button' className='flex justify-center items-center transition-all duration-200 active:scale-90'>
                <img src={menu} alt="" className='object-cover shadow-sm filter' />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <PopupMenu navlinks={navlinks} showMenu={showMenu} />
    </>
  )
}

export default Navbar
