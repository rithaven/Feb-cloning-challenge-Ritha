import React from 'react'

const Menu = (props) => {
    console.log('propsfd',props)
  return (
    <div className='p-6 bg-white  shadow-[0 0 60px 0 rgb(0 0 0 / 10%)]'>
        <div className=' grid'>
            {
                props.title.map((e,key) =>{
                  return (
                    <div  className='flex justify-between space-y-3 '>
                       <p key={key} className='text-md'>{e}</p>
                       <img className='h-4' src="/right.svg" alt="" />
                    </div>
                  )
                })
            }
            
        </div>
        <div className='flex gap-2 '>
            {
               props.icons&&props.icons.map((m,key)=>{
                return (
                    <div key={key} className='bg-[#0077b3] p-2 mt-16'>
                        <img className='' src={m} alt="" />
                    </div>
                )
               }) 
            }

        </div>
           
    </div>
  )
}

export default Menu