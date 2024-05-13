import React from 'react'
import login from '../Assets/login.png'
import { Link } from 'react-router-dom'

const Otp = () => {
  return (
    <div>
        <div className=''>
      <img src={login} alt="login img" className='w-full' />
      </div>
      <button className=' absolute right-7 top-10 bg-gray-500 w-16 h-6 rounded-lg text-white'>Skip</button>
      <div className='text-center'>
        <p className='font-bold text-3xl mt-2'>Enter OTP</p>
        <p className='text-gray-500 font-medium mt-2'>OTP has been sent to <span className='font-semibold'> 8724657383 </span><span className='text-yellow-400 underline'> Change</span></p>
        </div>
        <div className='flex'>
            <input type="text" className=' mt-2 m-auto border-2 w-12 h-12 text-2xl rounded-xl text-center border-gray hover:border-black' maxLength={1} />
            <input type="text" className=' mt-2 m-auto border-2 w-12 h-12 text-2xl rounded-xl text-center border-gray hover:border-black' maxLength={1} />
            <input type="text" className=' mt-2 m-auto border-2 w-12 h-12 text-2xl rounded-xl text-center border-gray hover:border-black' maxLength={1} />
            <input type="text" className=' mt-2 m-auto border-2 w-12 h-12 text-2xl rounded-xl text-center border-gray hover:border-black' maxLength={1} />
            <input type="text" className=' mt-2 m-auto border-2 w-12 h-12 text-2xl rounded-xl text-center border-gray hover:border-black' maxLength={1} />
            <input type="text" className=' mt-2 m-auto border-2 w-12 h-12 text-2xl rounded-xl text-center border-gray hover:border-black' maxLength={1} />
        </div>
        <div className='mt-5'> 
        <p className='text-gray-400 text-center '>Resend OTP</p>
        <div className='flex justify-center'><input type="text" className='border-2 rounded-lg w-20 mt-2 placeholder-black text-center' placeholder='00:59'/></div>
        </div>
      <div className='mt-60 flex justify-center mb-10'>
        <button className='bg-yellow-400  rounded-xl w-40 h-10 font-semibold'> <Link to ="/type">Submit</Link></button>
      </div>
    </div>
  )
}

export default Otp
