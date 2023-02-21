import Link from 'next/link'
import React from 'react'

const Pages = () => {
  return (
    <div className='max-w-6xl mx-auto h-screen bg-white  '>
       <div className='p-6 bg-white '>
                     <Link className='p-4 text-2xl font-bold' href='/pageone'>
                     pageone
                     </Link>  
                     <hr />
                     <Link className='p-4 text-2xl font-bold' href='/pageone'>
                     pagetwo
                     </Link> 
                     <hr />
                     <Link className='p-4 text-2xl font-bold' href='/pageone'>
                     pagethree
                     </Link>  
                     <hr />
                     <Link className='p-4 text-2xl font-bold' href='/pageone'>
                     pagefour
                     </Link> 
                     
           </div>
    </div>
  )
}

export default Pages