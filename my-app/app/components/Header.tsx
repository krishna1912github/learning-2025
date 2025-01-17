import React from 'react'

import { IoMdMenu } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";
function Header() {
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-3   px-6 lg:mt-10 lg:justify-center p-4 lg:px-14 ">
      <div className="grid grid-cols-2">
      <div>
      <div className=" block lg:hidden">
        <DiGithubBadge size={50} /> 
      </div>
      <div className="hidden lg:block ">
        <DiGithubBadge size={40} />
      </div>
    </div>
      </div>
      <div className=" hidden sm:block">
        <div className="flex items-stretch gap-5  py-2 justify-center">
          <div className="text-lg font-semibold">About Me</div>
          <div className="text-lg font-semibold">Skills</div>
          <div className="text-lg font-semibold">Project</div>
          <div className="text-lg font-semibold">Blogs</div>
          <div className="text-lg font-semibold">Contact Me</div>
        </div>
      </div>
      <div className="grid justify-end">
        <div className="lg:hidden">
          <IoMdMenu size={50} />
        </div>
        <div className="hidden lg:block ">
          <button className="flex gap-2 justify-center p-2 bg-black text-white rounded">
            Resume <MdOutlineFileDownload  size={20} /> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header