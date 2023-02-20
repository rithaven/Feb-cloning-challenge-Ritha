import React from 'react'
import Link from 'next/link'

const Calender = () => {
    return (
        <>
        <div className='p-5 bg-white'>

            <div className='flex justify-between gap-2-4'>
                <h3 className='p-6 text-3xl'>Calender</h3>
                <div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex justify-between gap-4 bg-white'>
                            <h2 className='text-2xl font-bold'> All categories </h2>
                            <img className='h-6' src="/down.svg" alt="" />
                        </div>
                        <div className='flex justify-between gap-4 bg-white'>
                            <h2 className='text-2xl font-bold'> Date </h2>
                            <img className='h-6' src="/down.svg" alt="" />
                        </div>


                    </div>
                </div>

            </div>
            <div className='grid max-w-5xl grid-cols-4 m-auto mt-8'>
                <div>
                 <p className='text-gray-500 underlined'>PHD Defences</p>
                 <h2 className='text-green-400'>20 February 2023</h2>
                 <p className='text-xl'>PhD defence by T.J.H. Jonkers</p>
              
                </div>
                <div>
                 <p className='text-gray-500 underline'>PHD Defences</p>
                 <h2 className='text-gray-500 underline'>20 February 2023</h2>
                 <p className='text-gray-500 underline'>PhD defence by T.J.H. Jonkers</p>
                 <h2 className='text-green-400'>20 February 2023</h2>
                 <p className='text-xl'>PhD defence by T.J.H. Jonkers</p>
              
                </div>
                <div>
                 <p className='text-gray-500 underline'>PHD Defences</p>
                 <h2 className='text-green-400'>20 February 2023</h2>
                 <p className='text-gray-500 underline'>PhD defence by T.J.H. Jonkers</p>
              
                </div>
                <div>
                 <p className='text-gray-500 underline'>PHD Defences</p>
                 <h2 className='text-green-400'>20 February 2023</h2>
                 <p className='text-xl'>PhD defence by T.J.H. Jonkers</p>
              
                </div>

            </div>
            
            <div className='flex justify-between mt-10 border-t-2 border-black'>
                <div className='flex gap-4'>  
                    <h3 className='text-2xl'>View calendar
                    </h3>
                    <img className='h-4' src="/right.svg" alt="" />
                 </div>
                 <div className='flex gap-6 p-6 bg-blue-300'>  
                   <img className='h-4' src="/chevron-left.svg" alt="" />

                    <img className='h-4' src="/chevron-right.svg" alt="" />
                 </div>
              
            </div>

        </div>
        <div className='p-8 bg-bgnav'>
        <div className='bg-[#0077b3] max-w-6xl m-auto' >
                    <div className='flex items-center justify-between max-w-4xl p-6 m-auto'>

                        <p className='text-2xl font-bold text-white'>Working at VU Amsterdam?</p>
                        <div className='p-4 bg-white'>
                            <Link href='/' className='p-4 text-2xl font-bold'>
                            Take a look at our vacancies!
                            </Link>
                        </div>


                    </div>

                </div>

        </div>
        
        </>
    )
}

export default Calender