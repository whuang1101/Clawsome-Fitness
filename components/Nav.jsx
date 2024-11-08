import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href= "/" className='flex gap-2 flex-center' >
            <Image src='/assets/images/company-logo.svg'
                width={30}
                alt='cat logo'
                height={30}
                className='object-contain'
            />
            <p className='logo_text'>Clawsome Fitness</p>
        </Link>

    </nav>
  )
}

export default Nav
