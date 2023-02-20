import Link from 'next/link'
import React from 'react'
import News from './News'

const Staff = () => {
    return (
        <div className='max-w-6xl m-auto bg-[#faf7f5] pb-11'>

            <div className='p-10'>
                <h3 className='text-[#cc4100] ml-4 text-4xl'>Impact</h3>
            </div>
            <div style={{ backgroundImage: "url(https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1);background-repeat: no-repeat; background-size:cover;" }} className='w-full h-[500px] mb-36 '>
                 <div className='absolute'>
                <div className='relative right-0 p-6 m-auto ml-56 bg-white mt-80'>
                    <hr className='w-full' />
                    <h1 className='text-[#cc4100] p-4'>
                        Science to Impact

                    </h1>
                    <div>
                        <p className='mb-4 w-96'>An interview with entrepreneurial scientist Davide Iannuzzi, Chief Impact Officer of Vrije Universiteit Amsterdam</p>
                    </div>
                    <div className='flex justify-start gap-40'>
                        <div className='flex gap-2'>
                            <Link href='/'>Read more</Link>
                            <img className='h-6' src="/right.svg" alt="" />
                        </div>



                        <div className='flex '>

                            <div className='flex gap-3 mt-2'>
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

                    <News />
             
        </div>
    )
}

export default Staff