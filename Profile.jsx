import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";

const Profile = () => {
  return (
    <div>
      <div className='flex pl-6 mt-5'>
      <p className='  text-xl mt-1.5'><Link to='/edit'><FaArrowLeft /></Link></p>
      <p className=' text-xl mt-0.5 pb-5  font-bold bg-white pl-6 max-sm:text-sm'>Edit Profile</p>
      </div>

    <div className='flex justify-center'>
    <button className='  border-solid border-2 border-gray-400 rounded-full  max-sm:w-12 max-sm:h-12 '>
        <p className='text-5xl max-sm:text-2xl font-bold text-orange-400   max-sm:-ml-5 max-sm:-mt-5 px-8 py-7'>N</p>
    </button>
    </div>

    <div className='bg-yellow-400 w-6 ml-5 h-6 rounded-md items-center absolute left-1/2 top-40 text-white max-sm:top-24 max-sm:w-5 max-sm:h-5 max-sm:left-36'><MdOutlineModeEdit className='ml-1'/></div>

    <div className='ml-5 '><label className='text-lg max-sm:text-sm'>Name</label><br />
    <div className='flex justify-between'><input type="text" placeholder='Nandhu' className='shadow-lg text-xl w-full mt-2 placeholder:text-black max-sm:text-lg'/><Link to='/edit'><p className='text-orange-400 text-xl max-sm:text-lg'>Edit</p></Link></div>
    </div>

    <div className='ml-5 mt-5 '><label className='text-lg max-sm:text-sm'>Mobile Number</label><br />
    <div className='flex justify-between'><input type="text" placeholder='9854238623' className='shadow-lg text-xl w-full mt-2 placeholder:text-black max-sm:text-lg'/><p className='text-orange-400 text-xl max-sm:text-lg'>Edit</p></div>
    </div>

    <div className='ml-5 mt-5 '><label className='text-lg max-sm:text-sm'>Email</label><br />
    <div className='flex justify-between'><input type="text" placeholder='Add your Email' className='shadow-lg text-xl w-full mt-2 placeholder:text-gray max-sm:text-lg'/><p className='text-orange-400 text-xl max-sm:text-lg'>Add</p></div>
    </div>

    <div className='ml-5 mt-5 '><label className='text-lg max-sm:text-sm'>your Birthday</label><br />
    <div className='flex justify-between'><input type="text" placeholder='28-june-2001' className='shadow-lg text-xl w-full mt-2 placeholder:text-black max-sm:text-lg'/></div>
    </div>

    <div className='ml-5 mt-5 '><label className='text-lg max-sm:text-sm'>Gender</label><br />
    <div className='flex justify-between'><input type="text" placeholder='Male' className='shadow-lg text-xl w-full mt-2 placeholder:text-black max-sm:text-lg'/><p className='text-orange-400 text-xl max-sm:text-lg'>Edit</p></div>
    </div>
    <div></div>
    </div>
    
  )
}

export default Profile
