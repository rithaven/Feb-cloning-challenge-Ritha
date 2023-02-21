import React from 'react'

const News = () => {
  return (
    <div className='bg-[#fefefe] p-6 mt-32'>
        <div className='grid max-w-5xl grid-cols-2 gap-4 p-6 m-auto'>
           <div className='bg-white shadow-lg p-14 '>
            <h3 className='text-green-900'>Ukraine</h3>
            <p>Information and support</p>
            <img className='h-6' src="/right.svg" alt="" />
           </div>
           <div className='bg-white shadow-lg  p-14'>
            <h3 className='font-thin'>VU & Corona</h3>
            <img className='h-6 ' src="/right.svg" alt="" />
            
           </div>

        </div>
    </div>
  )
}

export default News