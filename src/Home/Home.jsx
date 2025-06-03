import React from 'react'
import { Link } from 'react-router'
const Home = () => {
  return (
    <div className='bg-gradient-to-br from-[#0292b3] via-[#0292b3] to-[#81cee3] min-h-screen'>
      <div className='-z-1'>
        {/* hero */}
        <img src={"images/hero.jpg"} className='h-[full] '></img>
      <div className='absolute top-[25%] left-[10%] flex flex-col gap-y-4 items-start'>
        {/* hero items */}
        <p className='text-white text-lg'>Electronics / Stationaries</p>
        <h1 className='text-7xl text-sans font-thin text-white my-5'>College Starter Pack</h1>
        <p className='text-white text-lg'>Creative / Cutting-Edge / Affordable</p>
        <button className='px-4 pt-1 pb-2 bg-white border-2 border-blue-600 text-blue-600 rounded-4xl my-5 text-2xl'>Explore</button>
      </div>
      <hr className='h-2 bg-white border-none'/>
      </div>
    </div>
  )
}

export default Home