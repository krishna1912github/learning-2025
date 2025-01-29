import React from 'react'
import logo from "./../asserts/cloudactive-labs-logo.svg"
import aaldura from "./../asserts/all.jpeg"
import { SiFreelancer } from "react-icons/si";
import Image from 'next/image'
const Experience = () => {
    let iconStyles = { color: "skyblue" };
    return (
        <div className=" mt-10 lg:mt-20 p-8  flex flex-col lg:gap-14 bg-black" >
            <div className='text-3xl lg:text-5xl'>
                <div>
                    <p className='text-center text-white py-12'> My <span className='font-extrabold ' >Experience </span></p>
                </div>
            </div>
            <div>
                <div className=" lg:px-[6.5rem] flex flex-col gap-7 lg:gap-14" >
                    <div className="group hover:bg-slate-900 flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full  border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 lg:justify-between">
                                    <div className="lg:mt-[6px]">
                                        <div className='flex flex-row gap-4'>
                                            <Image src={logo} alt="Experience Image" width={84} height={84} />
                                            <div className='flex-row lg:flex gap-2 lg:ml-[10px]'>
                                                <p className='text-xl font-medium lg:text-2xl text-white'> Full Stack Engineer </p>
                                                <p className='text-xl font-medium lg:text-2xl text-white  '>At Cloudactive Labs </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block  lg:mt-[6px] text-xl font-normal text-white">May2022 - Present</div>
                                </div>
                                <div className="block lg:hidden text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg  text-justify font-light text-white lg:text-xl ">
                                    As a Senior Software Engineer at Google, I played a pivotal role
                                    in developing innovative solutions for Google's core search algorithms.
                                    Collaborating with a dynamic team of engineers, I contributed to the
                                    enhancement of search accuracy and efficiency, optimizing user experiences
                                    for millions of users worldwide.
                                    <span className="hidden sm:block">
                                    I contributed to the
                                    enhancement of search accuracy and efficiency, optimizing user experiences
                                    for millions of users worldwide.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group hover:bg-slate-900 flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full  border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 lg:justify-between">
                                    <div className="lg:mt-[6px]">
                                        <div className='flex flex-row gap-4'>
                                        <Image src={aaldura} alt="Experience Image" width={53} height={50} />
                                            <div className='flex-row lg:flex gap-2 lg:ml-[10px]'>
                                                <p className='text-xl font-medium lg:text-2xl text-white'> Jr.Full Stack Developer </p>
                                                <p className='text-xl font-medium lg:text-2xl text-white  '>At Aaludra Tech</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block  lg:mt-[6px] text-xl font-normal text-white">May2022 - Present</div>
                                </div>
                                <div className="block lg:hidden text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg  text-justify font-light text-white lg:text-xl ">
                                    As a Senior Software Engineer at Google, I played a pivotal role
                                    in developing innovative solutions for Google's core search algorithms.
                                    Collaborating with a dynamic team of engineers, I contributed to the
                                    enhancement of search accuracy and efficiency, optimizing user experiences
                                    for millions of users worldwide.
                                    <span className="hidden sm:block">
                                    I contributed to the
                                    enhancement of search accuracy and efficiency, optimizing user experiences
                                    for millions of users worldwide.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group hover:bg-slate-900 flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full  border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 lg:justify-between">
                                    <div className="lg:mt-[6px]">
                                        <div className='flex flex-row gap-4'>
                                        <SiFreelancer style={iconStyles} size={56} />
                                            <div className='flex-row lg:flex gap-2 lg:ml-[10px]'>
                                                <p className='text-xl font-medium lg:text-2xl text-white'>Freelance Full Stack </p>
                                                <p className='text-xl font-medium lg:text-2xl text-white  '>Developer & Consultant </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block  lg:mt-[6px] text-xl font-normal text-white">May2022 - Present</div>
                                </div>
                                <div className="block lg:hidden text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg  text-justify font-light text-white lg:text-xl ">
                                    As a Senior Software Engineer at Google, I played a pivotal role
                                    in developing innovative solutions for Google's core search algorithms.
                                    Collaborating with a dynamic team of engineers, I contributed to the
                                    enhancement of search accuracy and efficiency, optimizing user experiences
                                    for millions of users worldwide.
                                    <span className="hidden sm:block">
                                    I contributed to the
                                    enhancement of search accuracy and efficiency, optimizing user experiences
                                    for millions of users worldwide.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>

        </div>
    )
}

export default Experience