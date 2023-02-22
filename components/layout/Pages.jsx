import Link from 'next/link'
import React from 'react'

const Pages = () => {
  return (
    <div className='h-screen max-w-4xl mx-auto bg-white md:max-w-6xl '>
       <div className='max-w-4xl p-2 m-auto bg-white md:p-6'>
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