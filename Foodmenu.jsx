import React from 'react'
import menu from '../Assets/menu.jpeg'
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import leaf from '../Assets/leaf.png';
import meals from '../Assets/meals.png';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Foodmenu = () => {
  return (
    <div>
      <div><img src={menu} alt="" className='w-full h-full' /></div>
      <div className='ml-80 max-sm:ml-10 '>
        <div className=''><input type="search" name="" id="" placeholder='Search "Briyani"' className=' border-2 text-center text-black border-black rounded-3xl w-1/2 h-10 absolute top-52 placeholder:text-black font-semibold max-sm:w-60 max-sm:h-8 max-sm:top-10'   /></div>
      <div><FaSearch className='w-5 h-5 absolute top-52 ml-2 mt-3 max-sm:mt-1.5 max-sm:top-10'/></div>
      </div>
      <div className='bg-gray-100 pt-3'>
        <div className='flex bg-white w-36 h-10 justify-center rounded-xl mt-3  ml-5 max-sm:h-8 max-sm:w-28 max-sm:mt-0'><FaStar className='text-yellow-400 mt-4 max-sm:mt-2' />
        <p className='ml-3 mt-3 max-sm:mt-1'> Top Rated</p></div>

        <div className='font-bold text-4xl ml-5 mt-2 max-sm:text-lg'>Delicious Food Menu</div>
      </div>

      <div className='bg-white  border-r-2 grid grid-cols-4 gap-10 max-sm:grid-cols-2'>
        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'><Link to ="/account">ADD</Link></button>
        </div>
        </div>

        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'>ADD</button>
        </div>
        </div>

        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'>ADD</button>
        </div>
        </div>

        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'>ADD</button>
        </div>
        </div>

        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'>ADD</button>
        </div>
        </div>

        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'>ADD</button>
        </div>
        </div>

        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'>ADD</button>
        </div>
        </div>

        <div className=' shadow-2xl rounded-xl w-40 h-60 mt-5 max-sm:h-48 max-sm:w-36'>
          <img src={meals} alt="" className='w-32 h-24 mt-2 ml-3 max-sm:w-24 max-sm:h-20' />
          <div className='bg-white h-6 w-6 rounded-full absolute -bottom-2/3 left-4 '><img src={leaf} alt=""  className=' h-6 w-6 max-sm:hidden'/>
          <CiHeart className=' absolute  -bottom-1/4 left-24 bg-white rounded-full h-6 w-6 max-sm:hidden'/>
</div>
<div className='font-semibold ml-2 max-sm:text-sm'>Mega veg snacks combo</div>
<div className='flex justify-around'><div className='bg-white shadow-2xl ml-1 flex justify-around h-2 w-12 rounded-xl max-sm:ml-0'><FaStar className='text-yellow-400 mt-1 max-sm:text-xs max-sm:mt-0.5'/>
<p className='max-sm:text-xs'>4.3</p></div> <p className='text-orange-500 underline max-sm:text-xs'>480 reviews</p></div>

<div className=' flex justify-around mt-5 max-sm:mt-2'>
          <p className='mt-2 max-sm:mt-1  max-sm:text-sm'>Rs.580</p>
          <button className='h-9 border-2 rounded-xl border-orange-300 text-orange-300 w-20 max-sm:h-7 max-sm:w-12 max-sm:text-xs'>ADD</button>
        </div>
        </div>

        
        
      </div>

    </div>

  )
}

export default Foodmenu
