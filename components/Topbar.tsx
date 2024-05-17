import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <nav className='topbar'>
        <Link href={'/'} className='flex items-center gap-2'>
            <Image 
                src={'/logo.svg'}
                alt='logo'
                height={28}
                width={28}
            />
        </Link>
        <p className="text-heading3-bold text-light-1 max-xs:hidden">XFriends</p>
    </nav>
  )
}

export default Topbar