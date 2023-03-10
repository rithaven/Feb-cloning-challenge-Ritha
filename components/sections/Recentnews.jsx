import React from 'react'

const Recentnews = () => {
    return (
        <div className='max-w-5xl m-auto'>

            <h2 className='p-8 text-3xl '>News</h2>
            <div className='grid gap-20 p-4 md:grid-cols-2 sm:grid-cols-1'>
                <div className='grid gap-10'>
                    <div className='flex gap-3'>
                        <img className='h-20 md:h-40' src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226" alt="" />
                        <div className='grid '>
                            
                            <div className='flex flex-col justify-between space-y-10'>
                                <div>
                                    <h3 className='text-[#3b2171] text-[18px]'>08 Feb 2023</h3>
                                    <p>Earthquakes Turkey and Syria</p>
                                </div>
                               
                                <img className='self-end h-4' src="/right.svg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-3'>
                        <img className='h-20 md:h-40' src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png" alt="" />
                        <div className='grid '>
                            
                            <div className='flex flex-col justify-between space-y-10'>
                                <div>
                                    <h3 className='text-[#3b2171] text-[18px]'>08 Feb 2023</h3>
                                    <p>Earthquakes Turkey and Syria</p>
                                    </div>
                               
                                <img className='self-end h-4' src="/right.svg" alt="" />
                            </div>
                        </div>

                    </div>

                </div>
                <div className='grid gap-16'>
                    <div className='flex gap-3'> 
                        <img className='h-20' src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg" alt="" />
                        <div className='grid '>
                             <h3 className='text-[#3b2171] text-[18px]'>08 Feb 2023</h3>
                             <div className='flex gap-2'>  
                                <p>Earthquakes Turkey and Syria</p> 
                                <img className='h-4 ' src="/right.svg" alt="" />
                                </div>
                        </div>

                    </div>
                    <div className='flex gap-3'>
                        <img className='h-20' src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720" alt="" />
                        <div className='grid '>
                             <h3 className='text-[#3b2171] text-[18px]'>08 Feb 2023</h3>
                             <div className='flex gap-2'>  
                                <p>Earthquakes Turkey and Syria</p> 
                                <img className='h-4 ' src="/right.svg" alt="" />
                                </div>
                        </div>

                    </div>
                    <div className='flex gap-3'>
                        <img className='h-20' src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png" alt="" />
                        <div className='grid '>
                             <h3 className='text-[#3b2171] text-[18px]'>08 Feb 2023</h3>
                             <div className='flex gap-2'>  
                                <p>Earthquakes Turkey and Syria</p> 
                                <img className='h-4 ' src="/right.svg" alt="" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pb-10 mt-20'>
                <div>
                    <p className='text-xl font-semibold'>News overview</p>
                </div>
                <div>
                    <img className='h-6' src="/right.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Recentnews