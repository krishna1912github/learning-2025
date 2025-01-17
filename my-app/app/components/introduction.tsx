import React from 'react'
import { Fb } from './../asserts/iconSvg'
import Banner from './../asserts/Banner.png'
import Image from 'next/image'
const introduction = () => {
  return (
    <div className="flex flex-col px-8 gap-8 lg:px-16 lg:mt-10" >
      <div className="text-3xl lg:text-5xl lg:mt-10 tracking-wide lg:flex flex-row ">
        <div className='flex flex-col gap-8 lg:w-2/4 lg:mt-10'>       
        <div className='flex flex-col lg:gap-5'>
          <p className=''> Hello <span className='font-extrabold' >I’am Krishna.</span></p>
          <p> <span className=' font-extrabold' > Fullstack  </span> Developer</p>
          <p> Based In <span className='font-extrabold' >India</span></p>
        </div>
        <div className="text-xl text-zinc-500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.   </div>
      <div className="flex gap-4">
        <Fb />
        <Fb />
        <Fb />
        <Fb />
        <Fb />
      </div>
      </div>
      <div className='hidden sm:block lg:ml-8'>
        <Image
          src={Banner}
          width={800}
          height={800}
          alt="Picture of the author"
        />
      </div>
      </div>
   
    </div>
  )
}

export default introduction