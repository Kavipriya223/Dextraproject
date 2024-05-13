import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

// import searchs from "../assets/search.webp"
import { TbCurrentLocation } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';




export const Delivery = () => {
  return (
   <>
   
   <div className=' flex pl-6 mt-5 '>
                <p className='  text-xl mt-1 max-sm:text-sm'><Link to='/cart'><FaArrowLeft /></Link></p>
                <p className=' text-xl ml-3 font-bold max-sm:text-sm'>Delivery to</p>
            </div>

            <hr className=' border-gray-400 mt-6 mb-6 border-solid'/>

{/* search  */}
<div className=' pl-6 pr-6 '>
            <div className=" flex  w-full pl-3 pr-3 max-sm:w-60   border-white shadow-sm shadow-black border-2 border-solid items-center rounded-full overflow-hidden">
                    
            <div className=" cursor-pointer">
                        <FaSearch
                            className=" w-10 h-10 mt-1 max-sm:w-7 max-sm:h-7"/>
                    </div>
                    <input type="text" placeholder="Search delivery location"
                        className="   h-10 flex-1 outline-none p-2 text-xl max-sm:placeholder:text-sm"/>
                    
                </div>
                </div>

                {/* ---- */}
                <div className=' flex justify-between mt-10 pl-6 pr-6'>
                <div className=' flex'>
                <TbCurrentLocation className=' text-3xl max-sm:text-xl'/>
                <p className='ml-4 text-xl font-medium max-sm:text-sm'>Use Current Location</p>
                </div>
                 <MdArrowForwardIos className=' text-3xl max-sm:text-xl'/>
                 </div>
            <hr className=' border-gray-400 mt-6 mb-6 border-solid'/>


            <div className=' flex justify-between mt-8 pl-6 pr-6'>
                <div className=' flex'>
                <BiPlusCircle className=' text-3xl max-sm:text-xl'/>
                <p className='ml-4 text-xl font-medium max-sm:text-sm'>Add New Address</p>
                </div>
                 <MdArrowForwardIos className=' text-3xl max-sm:text-xl'/>
                 </div>
            <hr className=' border-gray-400 mt-6 mb-6 border-solid'/>


{/* ---- */}

<p className=' font-medium text-xl pl-6 max-sm:text-sm'>Saved Address</p>

<div className=' flex  justify-between mt-7 pl-6 pr-6'> 
<div className=' flex '>
          <GoHome className=' text-3xl max-sm:text-xl'/>
          <p className='ml-4 text-xl font-semibold max-sm:text-sm'>
              HOME</p>
              </div>

<div className=' flex'>
              <RiDeleteBin6Line className='mr-4 text-3xl max-sm:text-xl'/>
              <Link to='/manage'><MdOutlineModeEdit className=' text-3xl max-sm:text-xl'/></Link>
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
              <hr className=' border-gray-300 mt-6 mb-6 border-solid'/>


   </>
  )
}