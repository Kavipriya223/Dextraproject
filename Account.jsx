import React from 'react'
import { MdOutlineModeEdit } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { PiHeadsetBold } from "react-icons/pi";
import { GrCircleQuestion } from "react-icons/gr";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { TbMapPinCheck } from "react-icons/tb";
import { PiToggleLeftFill } from "react-icons/pi";
import { Link } from 'react-router-dom';








export const Account = () => {
  return (
    <>
    <div className=' bg-gray-100 '>
    <p className=' text-xl mt-6 pb-5  font-bold bg-white pl-6 max-sm:text-sm'>My Account</p>
    <br></br>

    <div className='  bg-white pt-5 pb-5   flex justify-between items-center pl-6 pr-6'>    
        <div className='flex items-center'>
    <button className='  border-solid border-2 border-gray-400 rounded-full max-sm:w-12 max-sm:h-12 '>
        <p className='text-5xl max-sm:text-2xl font-bold text-orange-400   max-sm:-ml-5 max-sm:-mt-5 px-8 py-7'>N</p>
    </button>
    <div className=' ml-4  '>   
         <p className=' text-xl font-semibold max-sm:text-sm'>Nandhu</p>
    <p className=' text-xl font-medium max-sm:text-sm '>+919876543210</p>
    </div>
    </div>

    <div>
        <button>
        <Link to="/cart">
        <MdOutlineModeEdit className=' text-5xl border-gray-200 bg-gray-200 border-solid border-2 rounded-full p-2'/>
        </Link>
        </button>
    </div>
    </div>

<div className=' flex justify-between pb-5 pl-6 pr-6'>
<button className=' rounded-xl bg-white w-52 max-sm:w-32 mt-5 max-sm:p-2  justify-center text-center p-7'>
    <button>

        <GoHome className='mb-3 text-6xl border-gray-200  bg-gray-200 border-solid border-2 rounded-full p-2'/>
        </button>
        <p className=' text-xl font-medium max-sm:text-sm'>Manage Address</p>
        </button>

        <button className=' rounded-xl bg-white w-52 max-sm:w-32 mt-5 max-sm:p-2 justify-center text-center p-7'>
    <button>
        
        <PiToggleLeftFill className='mb-3 text-6xl text-gray-500 border-gray-200 bg-gray-200 border-solid border-2 rounded-full p-2'/>
        
        </button>
        <p className=' text-xl font-medium max-sm:text-sm'>Pure Veg</p>
        </button>
        </div>

        
</div>

{/* ---- */}

<div className=' pl-6 pr-6'>
<div className='mt-6 flex'>
<PiHeadsetBold className='mt-0.5 text-2xl'/>
        <p  className=' text-xl font-medium ml-4 max-sm:text-sm' >Help & Support</p>
        </div>
        <hr className=' border-gray-500 ml-10 mt-4'/>
    

        <div className='mt-7 flex'>
<GrCircleQuestion className='mt-0.5 text-2xl'/>
        <p  className=' text-xl font-medium ml-4 max-sm:text-sm' >Legal & FAQ’s</p>
        </div>
        <hr className=' border-gray-500 ml-10 mt-4'/>
    

        <div className='mt-7 flex'>
<HiOutlineCurrencyRupee className='mt-0.5 text-2xl'/>
        <p  className=' text-xl font-medium ml-4 max-sm:text-sm' >Refund Policy</p>
        </div>
        <hr className=' border-gray-500 ml-10 mt-4'/>
    
        <div className='mt-7 flex'>
<LuShieldCheck className='mt-0.5 text-2xl'/>
        <p  className=' text-xl font-medium ml-4 max-sm:text-sm' >Privacy Policy</p>
        </div>
        <hr className=' border-gray-500 ml-10 mt-4'/>
    

        <div className='mt-7 flex'>
<FaRegFileAlt className='mt-0.5 text-2xl'/>
        <p  className=' text-xl font-medium ml-4 max-sm:text-sm' >Terms & Conditions</p>
        </div>
        <hr className=' border-gray-500 ml-10 mt-4'/>
    

        <div className='mt-7 flex'>
<LuSettings className='mt-0.5 text-2xl'/>
        <p  className=' text-xl font-medium ml-4 max-sm:text-sm' >Settings</p>
        </div>
        <hr className=' border-gray-500 ml-10 mt-4'/>

        <div className='mt-7 flex'>
<TbMapPinCheck className='mt-0.5 text-2xl '/>
        <p  className=' text-xl font-medium ml-4 max-sm:text-sm' >Delivery Areas</p>
        </div>
        <hr className=' border-gray-500 ml-10 mt-4'/>
   
        </div>
    <br></br><br></br><br></br>
    </>
  )
}