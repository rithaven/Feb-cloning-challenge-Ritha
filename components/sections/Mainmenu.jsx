import React from 'react'
import Menu from '../UI/Menu'

const Mainmenu = () => {
  return (
    <div className='p-6 mx-auto max-w-7xl bg-slate-50 '>
          {
            [
            {
                titleone: "VU main menu",
                titletwo: "Most searched",
                titlethree:"Featured"
            }
               
            ].map((e,key)=>{
                return (
                    <div  className='grid max-w-4xl grid-cols-1 gap-4 mx-auto mb-4 md:grid-cols-3'>
                        <h2 key={key} className='text-4xl text-[#0077b3]'>{e.titleone}</h2>
                        <h2 key={key}  className='text-4xl text-[#cc4100]' >{e.titletwo}</h2>
                        <h2 key={key}  className='text-4xl text-[#008053]' >{e.titlethree}</h2>
                        
                    </div>
                )
            })
          }
       <div className='grid max-w-4xl grid-cols-1 gap-4 mx-auto md:grid-cols-3'>
        <Menu title={["Home","Education","Research","About VU Amsterdam","University Library","VU Press Office","Alumni"] } />
        <Menu title={["Home","Education","Research","About VU Amsterdam","University Library","VU Press Office","Alumni"] } />
        <Menu icons={["/instagram.svg","/linkedin.svg","/facebook-.svg","/twitter-.svg","/youtube.svg"]} title={["Home","Education","Research"] } />
       </div>

    </div>
  )
}

export default Mainmenu