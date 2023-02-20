
import React from 'react'
import Card from '../UI/Card'
import Impact from './Impact'
import Staff from '@/components/sections/Staff'
import News from './News'


const About = () => {
    return (
        <div className='max-w-6xl m-auto '>
            <div className='pt-4 m-auto -mt-10'>

                <div className='flex items-center justify-between  bg-[#fdfdfd] p-6  '>
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
                                <div key={key} className='flex gap-2 '>
                                    <img className='h-10' src={e.image} alt="" />
                                    <p className='font-bold'>{e.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' pb-10 m-auto -mt-4 bg-[#faf7f5] mb-4'>
                    <div className='grid max-w-5xl grid-cols-2 gap-4 m-auto my-4 '>
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