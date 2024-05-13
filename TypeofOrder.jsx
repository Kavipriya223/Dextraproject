import React from 'react'
import too from '../Assets/img-2.png'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TypeofOrder = () => {
  return (
    <div>
        <div className=''>
      <img src={too} alt="type of order" className='w-full h-full' />
      </div>
      <div className='text-center'>
        <p className='font-semibold text-2xl'>Which type of order you would like to order now?</p>
        <div className=''>
            
        <div><button className='rounded-md border-2 mt-2 border-gray-400 w-80 h-10 hover:border-orange-400 hover:bg-orange-100'>Walk In</button></div>
        <div><button className='rounded-md border-2 mt-2 border-gray-400 w-80 h-10 hover:border-orange-400 hover:bg-orange-100'>Bulk Order</button></div>
        <div><button className='rounded-md border-2 mt-2 border-gray-400 w-80 h-10 hover:border-orange-400 hover:bg-orange-100'>Online Order</button></div>
        <div><button className='rounded-md border-2 mt-2 border-gray-400 w-80 h-10 hover:border-orange-400 hover:bg-orange-100'>For Event</button></div>
        <div><button className='rounded-md border-2 mt-2 border-gray-400 w-80 h-10 hover:border-orange-400 hover:bg-orange-100'>Corporate Order</button></div>
        </div>
      </div>
      <div className='text-center mt-10'>
        <button className='bg-yellow-400 rounded-xl w-40 h-10 font-semibold'>
        <Link to="/book"> Get Started</Link>
        </button>
      </div>
    </div>
  )
}

export default TypeofOrder
