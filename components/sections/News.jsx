import React from 'react'

const News = () => {
  return (
    <div className='bg-[#fefefe] p-6 mt-32 mx-w-7xl mx-auto'>
      <div className='grid max-w-5xl grid-cols-2 gap-4 p-6 m-auto'>
        <div className='bg-white shadow-lg p-4 flex flex-col justify-between h-44  '>
          <div >
            <h3 className='text-green-900'>Ukraine</h3>
            <p>Information and support</p>
          </div>
          <img className='h-6 self-end' src="/right.svg" alt="" />
        </div>
        <div className='bg-white shadow-lg  p-4 flex flex-col justify-between'>
          <h3 className='font-thin'>VU & Corona</h3>
          <img className='h-6 self-end  ' src="/right.svg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default News