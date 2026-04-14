import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import footerLogo from '../../../assets/logo-xl.png'
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg  text-white p-24">
        <aside>
            <Image src={footerLogo} />
            <p className="opacity-[0.7]">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
        </aside>
        <nav>
            <h2>Social Links</h2>
            <div className="grid grid-flow-col gap-4">
                <Link href=''><Image src={instagram} alt='instagram' /></Link>
                <Link href=''><Image src={facebook} alt='facebook' /></Link>
                <Link href=''><Image src={twitter} alt='twitter' /></Link>
            </div>
        </nav>
        <div className='border-b border-white opacity-[0.4] w-full'></div>
        <nav className="w-full flex flex-col justify-center md:flex-row md:justify-between gap-4">
            <p>Copyright © {new Date().getFullYear()} - KeenKeeper. All rights reserved.</p>
            <div className='flex gap-2'>
                <Link href=''>Privacy Policy</Link>
                <Link href=''>Terms of Service</Link>
                <Link href=''>Cookies</Link>
            </div>
        </nav>
    </footer>
  )
}

export default Footer