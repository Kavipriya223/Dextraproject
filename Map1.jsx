import React from 'react'
import map1 from '../Assets/map2.png'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'

const Map1 = () => {
  return (
    <div>
        <div className=' flex pl-6 mt-5 '>
                <p className='  text-xl mt-1 max-sm:text-sm'><Link to='/map1'><FaArrowLeft /></Link></p>
                <p className=' text-xl ml-3 font-bold max-sm:text-sm'>Delivery to</p>
            </div>
      <img src={map1} alt="" className='w-full mt-2' />

      <div className=' flex mt-5 pl-6 '>
          <SlLocationPin className=' text-3xl max-sm:text-xl'/>
          <p className='ml-4 text-xl font-semibold max-sm:text-sm'>
          Ram Nagar South</p>
              </div>
              <p className='pl-6 mt-4 font-semibold text-gray-500 ml-10 max-sm:text-sm'>Ram Nagar South, Chennai, Tamil Nadu, India</p>

    <div className='mt-1'>
        <button className='border-2 border-yellow-400 w-32 ml-16 h-10 rounded-xl max-sm:w-24 max-sm:text-sm font-semibold text-yellow-400'>Enter Address</button>
        <button className='bg-yellow-400 w-32 h-10 font-semibold ml-5 max-sm:w-24 max-sm:text-sm rounded-xl'>Continue</button>
    </div>
    </div>
  )
}

export default Map1
