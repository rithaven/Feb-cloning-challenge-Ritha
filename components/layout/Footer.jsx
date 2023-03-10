import React from 'react'

const Footer = () => {
  return (
    <div className='m-auto max-w-7xl bg-[#0077b3] p-10 text-white -mt-6'>
        <div className='flex gap-4'>
            {
                [
                    {
                        text: "Privacy Statement",
                        image:"/right-.svg"
                    },
                    {
                        text: "Privacy Statement",
                        image:"/right-.svg"
                    
                    },
                    {
                        text: "Privacy Statement",
                        image:"/right-.svg"
                    
                    },
                    {
                        text: "Privacy Statement",
                        image:"/right-.svg"
                    
                    },
                    {
                        text: "Privacy Statement",
                        image:"/right-.svg"
                    
                    },
                    {
                        text: "Privacy Statement",
                        image:"/right-.svg"
                    
                    },
                ].map((e,key)=>{
                    return(
                      <div key={key} className='flex gap-2'>
                        <p>{e.text}</p>
                        <img className='h-5 mt-1' src={e.image} alt="" />
                      </div>  
                    )
                }
                )
            }

        </div>
        <div className='mt-8'>
        Copyright © 2023 - Vrije Universiteit Amsterdam
        </div>
        

    </div>
  )
}

export default Footer