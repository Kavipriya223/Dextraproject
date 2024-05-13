import React from 'react'
import login from '../Assets/login.png'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <div className=''>
      <img src={login} alt="login img" className='w-full' />
      </div>
      <button className=' absolute right-7 top-10 bg-gray-500 w-16 h-6 rounded-lg text-white'>Skip</button>
      <div className=''>
        <p className='font-bold text-3xl mt-2 text-center
        '>Login or Signup</p>
        <p className='text-gray-500 font-medium mt-2 text-center'>"Simplify mealtime with our delicious options."</p>
        <div className='flex justify-center'><input type="text" placeholder='Enter your mobile number' className='border-2 absolute w-52 mt-2'/>
        </div>
      </div>
      <div className='mt-60 flex justify-center mb-10'>
        <button className='bg-yellow-400  rounded-md w-40 h-10 font-semibold'><Link to="/otp">Send OTP</Link></button>
      </div>
    </div>
  )
}

export default Index
