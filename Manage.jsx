import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';




export const Manage = () => {
  return (
   <>
   
   <div className=' flex pl-6 mt-5 '>
                <p className='  text-xl mt-1 max-sm:text-sm'><Link to='/delivery'><FaArrowLeft /></Link></p>
                <p className=' text-xl ml-3 font-bold max-sm:text-sm'>Manage Address</p>
            </div>

            <hr className=' border-gray-300 mt-6 mb-6 border-solid'/>

            <p className=' font-medium text-xl pl-6 max-sm:text-sm'>Saved Address</p>

  <div className=' flex  justify-between mt-7 pl-6 pr-6'> 
<div className=' flex '>
            <GoHome className=' text-3xl max-sm:text-xl'/>
            <p className='ml-4 text-xl font-semibold max-sm:text-sm'>
                HOME</p>
                </div>

<div className=' flex'>
                <RiDeleteBin6Line className='mr-4 text-3xl max-sm:text-xl'/>
                <Link to='/wish'><MdOutlineModeEdit className=' text-3xl max-sm:text-xl'/></Link>
                </div>
                </div>

                <p className=' pl-6 mt-4 font-semibold text-gray-500 ml-11 max-sm:text-sm'>R456, 6th Main Rd, Ram Nagar South, <br></br>
Madippakkam, Chennai, Tamil Nadu 600091</p>

<hr className=' border-gray-300 mt-6 mb-6 border-solid'/>

<p className=' font-medium text-xl pl-6 max-sm:text-sm'>Recent Location</p>

<div className=' flex mt-5 pl-6 '>
            <SlLocationPin className=' text-3xl max-sm:text-xl'/>
            <p className='ml-4 text-xl font-semibold max-sm:text-sm'>
            Ram Nagar South</p>
                </div>

                <p className='pl-6 mt-4 font-semibold text-gray-500 ml-11 max-sm:text-sm'>Ram Nagar South, Chennai, Tamil Nadu, India</p>

                

   </>
  )
}