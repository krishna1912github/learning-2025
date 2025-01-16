import React from 'react'
import {Fb} from './../asserts/iconSvg'
const introduction = () => {
  return (
<div className="flex flex-col px-8 gap-4" >
  <div className="text-4xl tracking-wide">
    <p className=''> Hello <span className='font-bold ' >I’am Krishna.</span></p>
    <p> <span className='font-bold' > Fullstack  </span> Developer</p>
    <p> Based In <span className='font-bold' >India</span></p>
    </div>
  <div className="text-xl text-zinc-500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.   </div>
  <div className="bg-red-100">
    <Fb/>
  </div>
</div>
  )
}

export default introduction