'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '../../../assets/logo.png'
import { FaHome } from 'react-icons/fa'
import { IoTimeOutline } from 'react-icons/io5'
import { ImStatsDots } from 'react-icons/im'

function Navbar() {
    const pathName = usePathname()

    const links = <>
        <li><Link href='/' className={pathName === '/' ? 'btn-bg text-white rounded-sm': ''}><FaHome /> Home</Link></li>
        <li><Link href='/timeline' className={pathName === '/timeline' ? 'btn-bg text-white rounded-sm': ''}><IoTimeOutline /> Timeline</Link></li>
        <li><Link href='/stats' className={pathName === '/stats' ? 'btn-bg text-white rounded-sm': ''}><ImStatsDots /> Stats</Link></li>
    </>

  return (
    <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
        <div className="collapse-title navbar">
            <div className="navbar-start">
            <label htmlFor="navbar-1-toggle" className="btn border-none md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <Link href="/">
                <button className="btn border-none text-xl">
                    <Image src={Logo} alt='Logo' />
                </button>
            </Link>
            </div>
            <div className="navbar-end flex">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                {links} 
                </ul>
                <input type="search" placeholder="Find friends" className="input border-2 border-gray-200 focus:border-[#244D3F] text-[#244D3F] rounded-lg  w-60 lg:w-auto" />
            </div>
        </div>

        <div className="collapse-content md:hidden z-1">
            <ul className="menu">
                {links}
            </ul>
        </div>
    </div>
  )
}

export default Navbar