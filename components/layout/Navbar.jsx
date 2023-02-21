import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import Pages from './Pages';


const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false);

    return (
        <div className=''>
            <div className='m-auto bg-[#f7f4f2] max-w-6xl h-[400px] shadow-md '>
                <div className='fixed inset-x-0 flex items-center justify-between bg-bgnav max-w-6xl mx-auto'>
                    <div className='flex-1 p-4 bg-white shadow-sm '>
                        <img className='h-10' src="/logo.svg" alt="" />
                    </div>
                    <div className='flex gap-4 px-4'>
                        <p>NL</p>
                        <img className='h-6' src="/user.svg" alt="user icon" />
                        <img className='h-6' src="/search.svg" alt="search icon" />
                        <div onClick={()=> setShowmenu(!showmenu)} className='cursor-pointer'>
                            {showmenu ?
                               <img className='h-6 ' src="/close.svg" alt="menu icon" /> :<img className='h-6' src="/menu.svg" alt="menu icon" />
                            }
                        
                        </div>
                      
                    </div>
                </div>
               
                <div className='bg-[#fefefe]'>
                <div className='p-6 '>
                    <p className='max-w-4xl m-auto text-5xl font-thin mt-32 '>You don’t just become something, you become someone</p>
                </div>
                <div className='grid max-w-5xl grid-cols-3 m-auto mt-20 '>
                    <div className=' bg-[#0077b3] p-10 col-span-2'>
                        <div className='flex items-center justify-between border-b-2 '>
                            <input className='bg-[#0077b3] placeholder-white placeholder-opacity-100' type="text" placeholder='Search...' />
                            <img className='h-6' src="/white-search.svg" alt="" />
                        </div>
                    </div>
                    <div className='px-4 bg-white cursor-pointer'>
                        <div className='flex items-center justify-between gap-4 mt-8 '>
                            <p className='text-2xl font-thin text-[#0077b3]'>About VU Amsterdam</p>
                            <img className='h-6' src="/right-s.svg" alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {
                showmenu&&
                <Pages />
            }
        </div>
    )
}

export default Navbar