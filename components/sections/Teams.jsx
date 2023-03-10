import React from 'react'

const Teams = () => {
    return (
        <div className='p-4 bg-white'>
            <h3 className='ml-10 text-[#cc4100] p-6 md:text-[38px] text-[18px] '>We are VU Amsterdam</h3>

            <div className='grid grid-cols-3 gap-4'>
                {
                    [
                        {
                            image: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&dpr=1",
                            title: " Vrije Schrijver (Writer in Residence) ",
                            links: "Read more"
                        },
                        {
                            image: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c4f807f9-18b8-4d8a-ab3d-006f345289fb/DreamTeams_webbanner_1600x750_tcm289-955609.jpg?fm=jpg&auto=format&dpr=1",
                            title: " Vrije Schrijver (Writer in Residence) ",
                            links: "Read more"
                        },
                        {
                            image: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&dpr=1",
                            title: " Vrije Schrijver (Writer in Residence) ",
                            links: "Read more"
                        },
                      
                    ].map((e, key) => {
                        return (
                            <div key={key} className=''>
                                <img className='h-[200px] object-cover' src={e.image} alt="" />
                                <h3 className='p-2 text-[#cc4100] text-[14px] md:text-[24px]'>{e.title}</h3>
                                <div className='flex flex-col justify-between gap-4'>
                                    <p className='tex-[18px]'>{e.links}</p>
                                    <img className='self-end h-4' src="/right.svg" alt="" />
                                </div>
                            </div>
                        )
                    }
                    )
                }

            </div>
            <div className='p-6 m-auto max-w-7xl'>
                <div className='flex justify-end gap-4 '>
                    <div className=' bg-[#fcd3b6] w-40 p-6 flex justify-between'>
                        <img className='h-4' src="/chevron-left.svg" alt="" />
                        <img className='h-4' src="/chevron-right.svg" alt="" />
                    </div>
                    <div>
                        
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Teams