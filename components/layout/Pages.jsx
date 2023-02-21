import Link from 'next/link'
import React from 'react'

const Pages = () => {
  return (
    <div className='max-w-6xl mx-auto h-screen bg-white  '>
       <div className='p-6 bg-white max-w-4xl m-auto'>
                     <Link className='p-4 text-2xl font-bold' href='/pageone'>
                     Study at VU Amsterdam
                     </Link>  
                     <Link className='p-4 text-2xl font-bold' href='/pagetwo'>
                     Research
                     </Link> 
                     <Link className='p-4 text-2xl font-bold' href='/pagethee'>
                     About VU Amsterdam
                     </Link>  
                     <Link className='p-4 text-2xl font-bold' href='/pagefour'>
                     VU press office
                     </Link> 
                     <Link className='p-4 text-2xl font-bold' href='/pagefive'>
                     Alumni
                     </Link> 
                     <Link className='p-4 text-2xl font-bold' href='/pagesix'>
                     Student
                     </Link> 
                     <Link className='p-4 text-2xl font-bold' href='/pageseven'>
                     Employee
                     </Link> 
                     
           </div>
    </div>
  )
}

export default Pages