import Link from 'next/link'
import React from 'react'
import Footer from '../layout/Footer'
import Calender from './Calender'
import Contactus from './Contactus'
import Mainmenu from './Mainmenu'
import News from './News'
import Recentnews from './Recentnews'
import Teams from './Teams'

const Staff = () => {
    return (
        <div className='max-w-6xl m-auto bg-[#faf7f5]'>

            <div className='p-10'>
                <h3 className='text-[#cc4100] ml-4 text-4xl'>Impact</h3>
            </div>
            <div className=' md:overflow-hidden bg-[#faf7f5]'>
                <div className='md:h-[575px]'><img className='object-cover w-full' src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1" alt="" />
                
                <div className='md:absolute'>
                    
                    <div className=' pl-6 m-auto md:ml-[375px]  md:-mt-[370px] md:relative  bg-white'>
                 
                        <h1 className='text-[#cc4100] p-4   '>
                            <hr className='mt-4 mb-6'/>
                            Science to Impact

                        </h1>
                        <div>
                            <p className='mb-4 w-96'>An interview with entrepreneurial scientist Davide Iannuzzi, Chief Impact Officer of Vrije Universiteit Amsterdam</p>
                        </div>
                        <div className='flex justify-between md:justify-start md:gap-40'>
                            <div className='flex gap-2'>
                                <Link href='/' className='font-bold'>Read more</Link>
                                <img className='h-6' src="/right.svg" alt="" />
                            </div>



                            <div className='flex gap-4'>

                                <div className='flex gap-3 mt-2 mr-4'>
                                    <div>
                                        <button className='rounded-full bg-[#cc4100] h-3 w-3 mt-1'></button>
                                    </div>
                                    <div>
                                        <button className='rounded-full bg-[#cc4100] h-2 w-2'></button>
                                    </div>
                                    <div>
                                        <button className='rounded-full bg-[#cc4100] h-2 w-2'></button>
                                    </div>
                                    <div>
                                        <button className='rounded-full bg-[#cc4100] h-2 w-2'></button>
                                    </div>


                                </div>
                                    <div className='bg-[#fcd3b6] flex justify-between p-4 gap-6 '>

                                        <img src="/chevron-left.svg" alt="" />
                                        <img src="/chevron-right.svg" alt="" />


                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* 
               
             */}

            <News />
            <Recentnews />
            <Calender />
            <Teams />
            <Contactus />
            <Mainmenu />
            
        </div>
    )
}

export default Staff