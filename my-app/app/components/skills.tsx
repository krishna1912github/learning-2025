import React from 'react'

const skills = () => {
    return (
        <div className="mt-10 lg:mt-14 px-8 gap-8 flex flex-col" >
            <div className='text-3xl lg:text-5xl'>
                <div>
                    <p className='text-center'> My <span className='font-extrabold ' >Skills </span></p>
                </div>
            </div>
            <div className="bg-green-100">
                <div className="mt-4 flex flex-col justify-center items-stretch lg:flex-row gap-4 ">
                    <div className="bg-blue-100">
                        <div className="flex lg:flex-col gap-4 ">
                            <div className="bg-blue-100">Block-111</div>
                            <div className="bg-yellow-100">Block-211</div>
                        </div>
                    </div>
                    <div className="bg-yellow-100">
                        <div className="flex gap-4 lg:flex-col ">
                            <div className="bg-blue-100">Block-111</div>
                            <div className="bg-yellow-100">Block-211</div>
                        </div>
                    </div>
                    <div className="bg-red-100">
                        <div className="flex gap-4 lg:flex-col">
                            <div className="bg-blue-100">Block-111</div>
                            <div className="bg-yellow-100">Block-211</div>
                        </div>
                    </div>
                    <div className="bg-orange-100">
                        <div className="flex gap-4 lg:flex-col ">
                            <div className="bg-blue-100">Block-111</div>
                            <div className="bg-yellow-100">Block-211</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills