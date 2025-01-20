import React from 'react'
import { DiJsBadge } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
const skills = () => {
    return (
        <div className="mt-10 lg:mt-14 px-8 gap-8 flex flex-col" >
            <div className='text-3xl lg:text-5xl'>
                <div>
                    <p className='text-center'> My <span className='font-extrabold ' >Skills </span></p>
                </div>
            </div>
            <div className="">
                <div className="mt-4 flex flex-col justify-center items-stretch lg:flex-row gap-4 ">
                    <div className="">
                        <div className="flex lg:flex-col gap-4 ">
                            <div className=" flex flex-col   w-[160px] h-[160px] border-2 border-black ">
                                <div className="flex justify-center py-6">
                                    <DiJsBadge size={58} />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    JavaScript
                                </div>
                            </div>
                            <div className=" flex flex-col   w-[160px] h-[160px] border-2 border-black ">
                                <div className="flex justify-center py-6">
                                    <BiLogoTailwindCss size={58} />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Tailwind Css
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex flex-col justify-center items-stretch lg:flex-row gap-4 ">
                    <div className="">
                        <div className="flex lg:flex-col gap-4 ">
                            <div className=" flex flex-col   w-[160px] h-[160px] border-2 border-black ">
                                <div className="flex justify-center py-6">
                                    <SiNextdotjs size={58} />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Next Js 
                                </div>
                            </div>
                            <div className=" flex flex-col   w-[160px] h-[160px] border-2 border-black ">
                                <div className="flex justify-center py-6">
                                    <SiTypescript size={58} />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                Typescript
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex flex-col justify-center items-stretch lg:flex-row gap-4 ">
                    <div className="">
                        <div className="flex lg:flex-col gap-4 ">
                            <div className=" flex flex-col   w-[160px] h-[160px] border-2 border-black ">
                                <div className="flex justify-center py-6">
                                    <FaNode size={58} />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Node js
                                </div>
                            </div>
                            <div className=" flex flex-col   w-[160px] h-[160px] border-2 border-black ">
                                <div className="flex justify-center py-6">
                                    <BiLogoPostgresql size={58} />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                  Postgresql
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills