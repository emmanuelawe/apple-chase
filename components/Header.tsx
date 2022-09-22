import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {HiSearch, HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi'
import {useSelector} from 'react-redux'
import { selectBasketItems } from '../redux/basketSlice'

const Header = () => {
     const session = false
     const items = useSelector(selectBasketItems)

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4'>
        <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'>
        <div className='relative w-5 cursor-pointer h-10 opacity-75 transition
        hover:opacity-100'>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' 
            alt='' layout='fill' objectFit='contain'/>
        </div>
        </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>

    <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <HiSearch className='headerIcon'/>
        <Link href='/checkout'>
    <div className='relative cursor-pointer'>
    {items.length > 0 && (
        <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center
        rounded-full justify-center bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
          {items.length}
        </span>
    )}
    <HiOutlineShoppingBag className='headerIcon'/>
    </div>
    </Link>
    
    {session ? (
          <Image
            src={
            //   session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            // onClick={() => signOut()}
          />
        ) : (
          <HiOutlineUser className="headerIcon" 
        //   onClick={() => signIn()} 
          />
        )}
    </div>

    </header>
  )
}

export default Header