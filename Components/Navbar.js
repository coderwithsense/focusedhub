import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-[#222831]'>
        <div className='flex justify-center items-center text-3xl text-[#EEEEEE]'>
            PomoFocus
        </div>
        <div>
            <UserButton />
        </div>
    </div>
  )
}

export default Navbar