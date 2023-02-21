import React from 'react'
import Menu from '../UI/Menu'

const Mainmenu = () => {
  return (
    <div className='max-w-5xl m-auto p-6'>
          {
            [
            {
                titleone: "VU main menu",
                titletwo: "Most searched",
                titlethree:"Featured"
            }
               
            ].map((e,key)=>{
                return (
                    <div  className='grid grid-cols-3 gap-4 mb-4'>
                        <h2 key={key} className='text-2xl text-[#0077b3]'>{e.titleone}</h2>
                        <h2 key={key}  className='text-2xl text-[#cc4100]' >{e.titletwo}</h2>
                        <h2 key={key}  className='text-2xl text-[#008053]' >{e.titlethree}</h2>
                        
                    </div>
                )
            })
          }
       <div className='grid grid-cols-3 gap-4 '>
        <Menu title={["Home","Education","Research","About VU Amsterdam","University Library","VU Press Office","Alumni"] } />
        <Menu title={["Home","Education","Research","About VU Amsterdam","University Library","VU Press Office","Alumni"] } />
        <Menu icons={["/instagram.svg","/linkedin.svg","/facebook-.svg","/twitter-.svg","/youtube.svg"]} title={["Home","Education","Research"] } />
       </div>

    </div>
  )
}

export default Mainmenu