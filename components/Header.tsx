import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiSearch, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-30 pt-6 pb-10 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div
            className="relative h-10 w-5 cursor-pointer text-3xl font-bold opacity-75 transition
        hover:opacity-100"
          >
            SWIRX
            {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' 
            alt='' layout='fill' objectFit='contain'/> */}
          </div>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link href="/">
          <a className="headerLink">Product</a>
        </Link>
        <Link href="/">
          <a className="headerLink">Explore</a>
        </Link>
        <Link href="/">
          <a className="headerLink">Support</a>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <HiSearch className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span
                className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center
        justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white"
              >
                {items.length}
              </span>
            )}
            <HiOutlineShoppingBag className="headerIcon" />
          </div>
        </Link>

        {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <HiOutlineUser className="headerIcon" onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
};

export default Header;
