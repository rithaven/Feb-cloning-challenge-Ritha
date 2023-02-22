import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react'
import Pages from './Pages';


const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false);
    const [menu, setmenu] = useState(false);
    useEffect(() => {
        document.body.style.overflow = showmenu ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
    }, [showmenu]);
    return (
        <div className=''>
            <div className='m-auto bg-[#f7f4f2] md:max-w-7xl h-[400px] shadow-md max-w-4xl  '>
                <div className='absolute'>
                    <div className='fixed z-10 flex items-center justify-between max-w-4xl mx-auto bg-white md:inset-x-0 md:max-w-7xl '>
                        <div className='p-3 bg-white shadow-sm py-7 md:p-4'>
                            <img className='h-8 ml-5 md:h-12' src="/logo.svg" alt="" />
                        </div>
                        
                       <div className='flex gap-4 p-8 px-6 cursor-pointer bg-bgnav'>
                                    <p>NL</p>
                                    <img onClick={()=>setmenu(!menu)} className='h-6' src="/user.svg" alt="user icon" />
                                    <img className='h-6' src="/search.svg" alt="search icon" />
                                    <div onClick={() => setShowmenu(!showmenu)} className='cursor-pointer'>
                                        {showmenu ?
                                            <img className='h-6 ' src="/close.svg" alt="menu icon" /> : <img className='h-6' src="/menu.svg" alt="menu icon" />
                                        }
                                    </div>
                        </div>
                               
                        
                       
                    </div>
                    
                    {
                        showmenu &&
                        <div className=' bg-white  h-screen  z-[500] relative w-[1280px] overflow-y-hidden'>
                            <div onClick={() => setShowmenu(!showmenu)} className='flex justify-end cursor-pointer '>

                                <div className='bg-[#f2efed] p-6 '>
                                    {showmenu ?
                                        <img className='h-6 duration-300 ease-in-out rotate-180 material-symbols-outlined ' src="/close.svg" alt="menu icon" /> : <img className='h-6' src="/menu.svg" alt="menu icon" />
                                    }
                                </div>
                            </div>
                            <div className='max-w-5xl p-10 pt-24 m-auto bg-white '>
                                <div className='flex justify-start text-base font-medium space-x-14'>
                                    <div className='grid space-y-10'>
                                        <Link className='text-2xl ' href='/pageone'>
                                            Study at VU Amsterdam
                                        </Link>
                                        <Link className='text-2xl ' href='/pagetwo'>
                                            Research
                                        </Link>
                                        <Link className='text-2xl ' href='/pagethee'>
                                            About VU Amsterdam
                                        </Link>
                                        <Link className='text-2xl ' href='/pagefour'>
                                            VU press office
                                        </Link>
                                        <Link className='text-2xl ' href='/pagefive'>
                                            Alumni
                                        </Link>
                                        <Link className='text-2xl ' href='/pagesix'>
                                            Student
                                        </Link>
                                        <Link className='text-2xl ' href='/pageseven'>
                                            Employee
                                        </Link>

                                    </div>
                                    <div className='grid space-y-10'>
                                        <img className='h-10' src="/plus.svg" alt="" />
                                        <img className='h-10' src="/plus.svg" alt="" />
                                        <img className='h-6' src="/right.svg" alt="" />
                                        <img className='h-6' src="/right.svg" alt="" />
                                        <img className='h-6' src="/right.svg" alt="" />
                                        <img className='h-6' src="/right.svg" alt="" />
                                        <img className='h-6' src="/right.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className='bg-[#fefefe]'>
                    <div className='flex p-6'>
                        <p className='max-w-4xl m-auto mt-32 text-5xl font-thin sm:text-2xl md:text-5xl'>You don’t just become something, you become someone</p>
                        {
                                menu&&
                                <div className='h-64 p-4 mx-auto mt-12 bg-white shadow-xl w-80'>
                                <div className='flex justify-end'>
                                    {menu?
                                        <div><img className='h-3' src="/close.svg" alt="" /></div>:
                                       <div><img className='h-3' src="/user.svg" alt="" /></div> 
                                    }
                                   
                                </div>
                                <div className='flex justify-between'>
                                    <div className='grid mt-5 space-y-4'>
                                        <p className='text-[#0077b3]'>Prospective student - login</p>
                                        <p className='text-[#0077b3]'>Student - login</p>
                                        <p className='text-[#0077b3]'>Employee - login</p>
                                        
                                    </div>
                                    <div className='grid'>
                                        <img className='h-6' src="/right.svg" alt="" />
                                        <img className='h-6' src="/right.svg" alt="" />
                                        <img className='h-6' src="/right.svg" alt="" />
                                    </div>
                                </div>
                               
                            </div>
                            }  
                    </div>
                    <div className='grid max-w-5xl grid-cols-1 m-auto mt-20 md:grid-cols-3 '>
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

        </div>
    )
}

export default Navbar