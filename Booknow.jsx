import React from 'react'
import bg from '../Assets/bg1.jpeg'
import profile from '../Assets/profile.jpeg'
import { FaSearch } from "react-icons/fa";
import ff from  '../Assets/frenchfries.png'
import sai from '../Assets/sai.png'
import samosa from '../Assets/samosa.png'
import shawarma from '../Assets/shawarma.png'
import burger from '../Assets/burger.png'
import { Link } from 'react-router-dom';
import diet from '../Assets/diet.png'
import pizza from '../Assets/pizza.png'

const Booknow = () => {
  return (
    <div>
      <div>
        <img src={bg} alt="bgimg" className='w-full h-full max-sm:w-96 max-sm:h-64' />
      </div>
      <div>
      <img src={profile} alt="profile" className=' w-12 h-12 rounded-full absolute top-5 left-5 max-sm:h-10 max-sm:w-10' />
      <p className='text-white font-semibold absolute top-5 left-20 text-2xl max-sm:text-sm'>Welcome,Nandhu P</p>
      <p className='text-white absolute top-12 left-20 font-light text-xl max-sm:text-sm'>You have 5 more offers</p>
      </div>
      <div className='ml-80 max-sm:ml-10'>
        <div className=''><input type="search" name="" id="" placeholder='Search "Briyani"' className=' border-2 text-center text-black border-black rounded-3xl w-1/2 h-10 absolute top-20 placeholder:text-black font-semibold max-sm:w-60 max-sm:h-8'   /></div>
      <div><FaSearch className='w-5 h-5 absolute top-20 ml-2 mt-3 max-sm:mt-1.5'/></div>
      </div>
      <div>
        <img src={sai} alt="sai" className='h-60 w-96 absolute top-40 left-48 max-sm:-left-2 max-sm:top-32 max-sm:h-28 max-sm:w-48' />
      </div>
      <div>
        <img src={ff} alt="" className='absolute top-36 right-60 h-36 w-36 max-sm:h-28 max-sm:w-28 max-sm:right-8 max-sm:top-24 ' />
        <img src={samosa} alt="" className='absolute top-80 right-80 h-36 w-36 max-sm:h-24 max-sm:w-24 max-sm:right-24 max-sm:top-44' />
        <img src={shawarma} alt="" className='absolute top-80 right-32 -rotate-90 h-36 w-36 max-sm:h-24 max-sm:w-24 max-sm:right-0 max-sm:top-44' />
      </div>

      <div className='mt-5 flex justify-around max-sm:justify-around max-sm:gap-x-0'>
        <div className='flex-col'>
            <div className='bg-gray-300 h-20 w-28 rounded-xl max-sm:h-12 max-sm:w-12'><img src={burger} alt=""  className='h-24 w-24 max-sm:h-16 max-sm:w-16'/></div>
            <p className='font-semibold text-center max-sm:text-xs'>Live <br /> Order</p>
        </div>
        <div className='flex-col'>
            <div className='bg-gray-300 h-20 w-28 rounded-xl max-sm:h-12 max-sm:w-12'><img src={burger} alt=""  className='h-24 w-24 max-sm:h-16 max-sm:w-16'/></div>
            <p className='font-semibold text-center max-sm:text-xs'>Pre-book</p>
        </div>
        <div className='flex-col'>
            <div className='bg-gray-300 h-20 w-28 rounded-xl max-sm:h-12 max-sm:w-12'><img src={burger} alt=""  className='h-24 w-24 max-sm:h-16 max-sm:w-16'/></div>
            <p className='font-semibold text-center max-sm:text-xs'>Corporate <br /> Order</p>
        </div>
        <div className='flex-col'>
            <div className='bg-gray-300 h-20 w-28 rounded-xl max-sm:h-12 max-sm:w-12'><img src={burger} alt=""  className='h-24 w-24 max-sm:h-16 max-sm:w-16'/></div>
            <p className='font-semibold text-center max-sm:text-xs'>Party <br /> Order</p>
        </div>
      </div>

      <div>
        <p className='font-semibold ml-24 mt-4 text-3xl max-sm:ml-4 max-sm:text-sm'>What's your favourite?</p>
        <div className='flex-col'>
        <div className='flex justify-around'>
            <Link to ="/menu"><img src={diet} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' /></Link>
            <img src={burger} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' />
            <img src={pizza} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' />
            <img src={samosa} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' />
        </div>
        <div className=' mt-4 flex justify-around'>
            <img src={diet} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' />
            <img src={burger} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' />
            <img src={pizza} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' />
            <img src={samosa} alt="" className='rounded-full w-32 h-32 border-red-500 border-4 max-sm:w-12 max-sm:h-12 max-sm:border-2' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Booknow
