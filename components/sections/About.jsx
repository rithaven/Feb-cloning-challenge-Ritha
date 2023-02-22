
import React from 'react'
import Card from '../UI/Card'
import Impact from './Impact'
import Staff from '@/components/sections/Staff'
import News from './News'


const About = () => {
    return (
        <div className='m-auto max-w-7xl '>
            <div className='pt-4 mx-auto -mt-10 max-w-7xl'>

                <div className='flex items-center justify-between  bg-[#fdfdfd] p-6 '>
                    {
                        [
                            {
                                image: "/graduate.svg",
                                title: "31.704 students"
                            },
                            {
                                image: "/glob.svg",
                                title: "31.704 students"
                            },
                            {
                                image: "/medal.svg",
                                title: "31.704 students"
                            },
                            {
                                image: "/puzzle.svg",
                                title: "31.704 students"
                            },
                        ].map((e, key) => {
                            return (
                                <div key={key} className='flex max-w-4xl gap-2 mx-auto md:gap-4 md:max-w-5xl '>
                                    <img className='md:w-[29.88px] w-[17.88px]' src={e.image} alt="" />
                                    <p className='text-[10px] font-bold  md:font-bold'>{e.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' pb-10 m-auto -mt-4 bg-[#faf7f5] mb-4'>
                    <div className='grid max-w-4xl grid-cols-1 gap-4 m-auto my-4 md:grid-cols-2'>
                        <Card title="Edication" links={["Master's programmes", "Honours programme", "Education for professionals", "Study guide",]} />
                        <Card title="Research" links={["Research highlights", "Honours programme", "Education for professionals", "Study guide",]} />
                    </div>

                <Impact />
                <Staff />
               
                </div>
                
              
            </div>

        </div>

    )
}

export default About