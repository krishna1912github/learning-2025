import React from 'react'
import { DiJsBadge } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";  
import { FaPython } from "react-icons/fa6";
import { SiKeystone } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
const skills = () => {
    return (
        <div className="mt-10 lg:mt-20 px-8 gap-8 flex flex-col lg:gap-14" >
            <div className='text-3xl lg:text-5xl'>
                <div>
                    <p className='text-center'> My <span className='font-extrabold ' >Skills </span></p>
                </div>
            </div>
            <div className="lg:flex justify-evenly gap-[62px] ">
                <div className="mt-4 flex flex-col justify-center items-stretch lg:flex-row gap-4 ">
                    <div className="">
                        <div className="flex lg:flex-col gap-12 ">
                            <div className="group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="flex justify-center py-6">
                                <DiJsBadge className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]" />
                                </div>
                                <div className="font-medium text-2xl flex justify-center animate__animated animate__bounceIn">
                                    JavaScript
                                </div>
                            </div>

                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300 ">
                                <div className="flex justify-center py-6">
                                    <BiLogoTailwindCss className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]"  />
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
                        <div className="flex lg:flex-col gap-12 ">
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300 ">
                                <div className="flex justify-center py-6">
                                    <SiNextdotjs className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]" />
                                </div>

                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Next Js
                                </div>
                            </div>
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300 ">
                                <div className="flex justify-center py-6">
                                    <SiTypescript className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]"  />
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
                        <div className="flex lg:flex-col gap-12 ">
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300  ">
                                <div className="flex justify-center py-6">
                                    <FaNode className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]"  />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Node js
                                </div>
                            </div>
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300 ">
                                <div className="flex justify-center py-6">
                                    <BiLogoPostgresql className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]" />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Postgresql
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 hidden sm:block  flex-col justify-center items-stretch lg:flex-row gap-4  ">
                    <div className="">
                        <div className="flex lg:flex-col gap-12 ">
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300 ">
                                <div className="flex justify-center py-6">
                                    <SiKeystone className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]" />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Keystone js
                                </div>
                            </div>
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300  ">
                                <div className="flex justify-center py-6">
                                    <FaPython className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]"  />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Python
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 hidden sm:block  flex-col justify-center items-stretch lg:flex-row gap-4 ">
                    <div className="">
                        <div className="flex lg:flex-col gap-12 ">
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300 ">
                                <div className="flex justify-center py-6">
                                    <SiPrisma className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]" />
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                  Prisma.io
                                </div>
                            </div>
                            <div className=" group flex flex-col w-[160px] h-[160px] border-2 border-black lg:w-[200px] lg:h-[200px] hover:bg-black hover:text-white transition-colors duration-300  ">
                                <div className="flex justify-center py-6">
                                    <FaGithub className="text-black group-hover:text-white text-[58px] md:text-[72px] lg:text-[96px]"/>
                                </div>
                                <div className=" font-medium text-2xl flex justify-center animate__animated animate__bounceIn ">
                                    Git
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