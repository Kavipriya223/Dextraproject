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
import map from '../Assets/map.png'



export const Map = () => {
  return (
   <>
   
   <div className=' flex pl-6 mt-5 '>
                <p className='  text-xl mt-1 max-sm:text-sm'><Link to='/map1'><FaArrowLeft /></Link></p>
                <p className=' text-xl ml-3 font-bold max-sm:text-sm'>Enter Address</p>
            </div>

            <hr className=' border-gray-400 mt-6 mb-6 border-solid'/>

            {/* map */}
            <div>
                <img src={map} alt="" className='w-full' />
            </div>

                {/* ---- */}
                <div className=' flex justify-between mt-10 pl-6  pr-6'>
                <div className=' flex'>
                
                <p className='ml-4 text-xl font-medium max-sm:text-sm text-gray-400'>Your Location</p>
                </div>
                 
                 </div>
                 <p className='font-semibold text-xl ml-10 mt-2 max-sm:text-lg'>Srinivasa Nagar</p>
            <hr className=' border-gray-400 mt-6 mb-6 border-solid'/>

            <div className=' flex justify-between mt-10 pl-6  pr-6'>
                <div className=' flex'>
                
                <p className='ml-4 text-xl font-medium max-sm:text-sm text-gray-400'>House No/Flat No</p>
                </div>
                 
                 </div>
                 <p className='font-semibold text-xl ml-10 mt-2 max-sm:text-lg'>Madipakkam,Chennai</p>
            
            <hr className=' border-gray-400 mt-6 mb-6 border-solid'/>

            <div className=' flex justify-between mt-10 pl-6  pr-6'>
                <div className=' flex'>
                
                <p className='ml-4 text-xl font-medium max-sm:text-sm text-gray-400'>Area Name</p>
                </div>
                 
                 </div>
                 <p className='font-semibold text-xl ml-10 mt-2 max-sm:text-lg'>Ram Nagar</p>
                 <hr className=' border-gray-400 mt-6 mb-6 border-solid'/>

                 <div className=' flex justify-between mt-10 pl-6  pr-6'>
                <div className=' flex'>
                
                <p className='ml-4 text-xl font-medium max-sm:text-sm text-gray-400'>Nearest Landmark</p>
                </div>
                 
                 </div>
                 <p className='font-semibold text-xl ml-10 mt-2 max-sm:text-lg'>Ram Nagar</p>

<hr className=' border-gray-400 mt-6 mb-6 border-solid'/>
{/* ---- */} 

<div className='grid grid-cols-3 items-center'>
    <div className='w-20 h-9 rounded-lg font-semibold border-2 border-black text-center'>Home</div>
    <div className='w-20 h-9 rounded-lg font-semibold border-2 border-black text-center'>Home</div>
    <div className='w-20 h-9 rounded-lg font-semibold border-2 border-black text-center'>Home</div>
    <div className='w-20 h-9 rounded-lg font-semibold border-2 border-black text-center'>Home</div>
    <div className='w-20 h-9 rounded-lg font-semibold border-2 border-black text-center'>Home</div>

</div>


              







   </>
  )
}