import React from 'react'
import Logo from '../asserts/Logo.png'
import Image from 'next/image'
import menu from '../asserts/menu.png'


function Header() {
  return (
    <div className="mt-4 grid grid-cols-2 lg:grid-cols-3  px-6">
      <div className=" grid grid-cols-2">
        <div>
          <Image
            src={Logo}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="bg-blue-100  grid-cols-4 hidden  sm:block "></div>
      <div className="grid justify-end">        
        <div>
        <Image
            src={menu}
            width={26}
            height={26}
            alt="Picture of the author"
          />
        </div>
        </div>
    </div>
  )
}

export default Header