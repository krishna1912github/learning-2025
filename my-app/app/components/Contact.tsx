'use client';
import React, { useState, FormEvent } from 'react';
import { CiShare1 } from 'react-icons/ci'
import { GoPerson } from 'react-icons/go';
import { LuMail } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa";
const Contact = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        service: '',
        query: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form Values:', formValues);
    };
    return (
        <div>
            <div className=' flex flex-col gap-10 lg:gap-5 justify-between mt-10 lg:px-[132px]'>
                <div className=' flex flex-col lg:flex-row lg:gap-10'>
                    <div className='flex flex-col'>
                        <div className="">
                            <div className=" flex flex-col   md:flex-row items-center justify-center mt-[20px]  container mx-auto  ">
                                <div className="flex-1">
                                    <form className="" onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="flex items-center px-10 border-2 border-black rounded-lg bg-white overflow-hidden shadow-lg">
                                                <div className=" pr-1 py-1 border-r-2 border-[#0f0f10]">
                                                    <GoPerson className=" text-base" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={formValues.firstName}
                                                    onChange={handleChange}
                                                    className="w-full p-4  outline-none"
                                                />
                                            </div>
                                            <div className="flex items-center px-10 border-2 border-black rounded-lg bg-white overflow-hidden shadow-lg">
                                                <div className=" pr-1 py-1 border-r-2 border-[#0f0f10]">
                                                    <GoPerson className=" text-base" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={formValues.lastName}
                                                    onChange={handleChange}
                                                    className="w-full p-4 outline-none "
                                                />
                                            </div>
                                            <div className="flex items-center px-10 border-2 border-black rounded-lg bg-white overflow-hidden shadow-lg">
                                                <div className=" pr-1 py-1 border-r-2 border-[#0f0f10]">
                                                    <LuMail className=" text-base" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formValues.email}
                                                    onChange={handleChange}
                                                    className="w-full p-4 outline-none "
                                                />
                                            </div>
                                            <div className="flex items-center px-10 border-2 border-black rounded-lg bg-white overflow-hidden shadow-lg">
                                                <div className=" pr-1 py-1 border-r-2 border-[#0f0f10]">
                                                    <FiPhone className=" text-base" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone No"
                                                    value={formValues.phone}
                                                    onChange={handleChange}
                                                    className="w-full p-4 outline-none "
                                                />
                                            </div>
                                        </div>
                                        <div className=" border-2 border-black rounded-lg  bg-white overflow-hidden mt-5 shadow-lg">
                                            <textarea
                                                name="query"
                                                placeholder="Enter your query"
                                                value={formValues.query}
                                                onChange={handleChange}
                                                className="w-full p-4 outline-none"
                                            >
                                            </textarea>
                                        </div>
                                        <div className='flex gap-3'>
                                            <button
                                                type="submit"
                                                className="group mt-3 bg-primary text-white lg:px-6 lg:py-3 px-2 py-1 rounded-md font-poppins font-semibold shadow-lg hover:text-black hover:bg-white"
                                            >
                                                Submit
                                            </button>
                                            <div className="flex items-center ">

                                                <div className="flex lg:gap-6 gap-2 mt-4 ">
                                                    <div className='border-2 border-black p-2 rounded-lg text-black hover:border-white hover:text-white hover:bg-black'>
                                                        <FaInstagramSquare size={25} className=' ' />
                                                    </div>
                                                    <div className='border-2  border-black p-2 rounded-lg text-black hover:border-white hover:text-white hover:bg-black'>
                                                        <FaFacebook size={25} className='lg:text-5xl ' />
                                                    </div>
                                                    <div className='border-2 border-black p-2 rounded-lg text-black hover:border-white hover:text-white hover:bg-black'>
                                                        <BsFillThreadsFill size={25} className=' ' />
                                                    </div>
                                                    <div className='border-2 border-black p-2 rounded-lg text-black hover:border-white hover:text-white hover:bg-black'>
                                                        <FaGithub size={25} className=' ' />
                                                    </div>
                                                    <div className='border-2 border-black p-2 rounded-lg text-black hover:border-white hover:text-white hover:bg-black'>
                                                        <MdEmail size={25} className=' ' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-10 lg:py-3 text-justify text-base lg:text-xl max-w-[650px] px-8 lg:px-0 mt-5 lg:mt-0'>
                        <div className='text-3xl lg:text-5xl'>
                            <div>
                                <p className='flex flex-col text-4xl lg:text-6xl font-bold text-justify  '> Let's talk for <span className=' text-4xl lg:text-6xl font-bold text-white text-outline-shadow ' > Somthing special </span></p>
                            </div>
                        </div>
                        <div className=' text-zinc-500 text-lg lg:text-xl'>
                            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                        </div>
                        <div>
                            <p className='flex flex-col text-xl font-bold'> krishnakumar@gmail.com <span className='font-bold' > 9790450447</span></p>
                        </div>
                        <div className='text-zinc-500'>
                            <CiShare1 size={25} className='text-white' />
                        </div>

                    </div>
                </div>



            </div>
            <div className='border-4 border-black bg-black p-4'>
                <div className='text-white text-center lg:text-xl font-medium text-lg'>
                © 2025 ALL Rights Reserved For Coding
                </div>
        
            </div>
        </div>
    )
}

export default Contact