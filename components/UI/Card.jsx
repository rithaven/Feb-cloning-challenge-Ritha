import React from 'react'

const Card = (propos) => {
    return (
        <div>
            <div className='p-6 bg-white shadow-xl'>
                <div className='grid gap-4'>
                    <div className='flex justify-between'>
                        <p className='text-3xl font-medium text-[#0077b3]'>{propos.title}</p>
                        <img className='h-6' src="/right.svg" alt="" />
                    </div>
                    {
                        propos.links.map((e, key) => {
                            return (
                                // <div key={key} className='max-w-5xl mx-10 -mt-10 shadow-sm'>
                                <div key={key} className='flex justify-between'>
                                    <p>{e}</p>
                                    <img className='h-6 ' src="/right.svg" alt="" />
                                </div>
                                // </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Card