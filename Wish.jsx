import React from 'react'
import leaf from "../Assets/leaf.png"
import { FaStar } from "react-icons/fa6";
import { FaConciergeBell } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import sain from "../Assets/sain.png"
import { MdFavoriteBorder } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
// import searchs from "../Assets/search.webp"
import french from "../Assets/french.png"
import samosa from "../Assets/samosa.png"
import frie from "../Assets/frie.png"
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';




export const Wish = () => {
  return (
    <>
    <div className=' pl-4 pr-4'>

       <p className=' text-xl font-bold mt-5 mb-10  max-sm:text-sm'>Wishlist (23)</p>
                <div className=" flex  w-full pl-3 pr-3 max-sm:w-72  border-white shadow-sm shadow-black border-2 border-solid items-center rounded-full overflow-hidden">
                    <input type="text" placeholder="Search for food or snacks..."
                        className="   h-10 flex-1 outline-none p-2 text-xl placeholder:max-sm:text-sm"/>
                    <div className=" cursor-pointer">
                       <Link to='/profile'> <FaSearch alt="search"
                            className=" w-10 h-10 mt-1 max-sm:w-5 max-sm:h-5"/></Link>
                    </div>
                </div>
                </div>
    
            {/* image  */}
            <div className=' flex justify-between pl-6 pr-6 mt-5 w-full'>
<div >    
    <div className=' flex '>
            <button className=' flex border-green-200 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8 bg-green-200   justify-center'>
                <img src={leaf} alt="leaf"
                    className=' w-6 h-6 mt-1 max-sm:w-4 max-sm:h-4' />
                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Veg</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8   justify-center'>
                <p> <FaStar className=' text-yellow-400 text-2xl max-sm:w-4 max-sm:h-4 mt-0.5' /></p>

                <p className=' text-xl font-medium ml-2  max-sm:text-sm'>4.5</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-36 max-sm:w-24 max-sm:h-8   justify-center'>
                <p> <FaConciergeBell  className=' text-yellow-400 text-2xl mt-0.5 max-sm:w-3 max-sm:h-4' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Serves 1</p>
            </button>
            </div>

            <p className=' font-bold text-xl mt-5 max-sm:text-sm'>Veg Sandwich</p>
             <p className=' font-bold text-xl mt-3 max-sm:text-sm'>Rs.40</p>

             <button className='mt-5 flex border-gray-500 border-2 border-solid p-2 pb-2 rounded-xl w-36 max-sm:w-20 max-sm:h-9  justify-center'>
                <p> <MdOutlineFavorite className=' text-red-600 text-2xl mt-0.5 max-sm:text-xl' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm '>Added</p>
            </button>
            </div>
           

            {/* sand image  */}
<div>
            <img src={sain} alt="sand"
            className=' h-36 w-36 rounded-full max-sm:h-10  max-sm:mt-10 max-sm:-ml-28 max-sm:w-16' />

           
                
                <button className='mt-5  flex justify-center gap-x-4 border-2 border-orange-400 border-solid w-36 max-sm:w-20 max-sm:h-10 max-sm:-ml-10 p-3 max-sm:p-1.5 max-sm:gap-2 rounded-xl'>
                    <FiMinus className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                    <p className=' font-bold text-2xl max-sm:text-xl'>1</p>
                    <IoMdAdd className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                </button>
               
                </div> 
                </div>
                {/* image2  */}
                <div className=' flex justify-between pl-6 pr-6 mt-5 w-full'>
<div >    
    <div className=' flex '>
            <button className=' flex border-green-200 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8 bg-green-200   justify-center'>
                <img src={leaf} alt="leaf"
                    className=' w-6 h-6 mt-1 max-sm:w-4 max-sm:h-4' />
                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Veg</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8   justify-center'>
                <p> <FaStar className=' text-yellow-400 text-2xl max-sm:w-4 max-sm:h-4 mt-0.5' /></p>

                <p className=' text-xl font-medium ml-2  max-sm:text-sm'>4.5</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-36 max-sm:w-24 max-sm:h-8   justify-center'>
                <p> <FaConciergeBell  className=' text-yellow-400 text-2xl mt-0.5 max-sm:w-3 max-sm:h-4' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Serves 1</p>
            </button>
            </div>

            <p className=' font-bold text-xl mt-5 max-sm:text-sm'>Veg Sandwich</p>
             <p className=' font-bold text-xl mt-3 max-sm:text-sm'>Rs.40</p>

             <button className='mt-5 flex border-gray-500 border-2 border-solid p-2 pb-2 rounded-xl w-36 max-sm:w-20 max-sm:h-9  justify-center'>
                <p> <MdOutlineFavorite className=' text-red-600 text-2xl mt-0.5 max-sm:text-xl' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm '>Added</p>
            </button>
            </div>
           

            {/* sand image  */}
<div>
            <img src={sain} alt="sand"
            className=' h-36 w-36 rounded-full max-sm:h-10 max-sm:mt-10 max-sm:-ml-28 max-sm:w-16' />

           
                
                <button className='mt-5  flex justify-center gap-x-4 border-2 border-orange-400 border-solid w-36 max-sm:w-20 max-sm:h-10 max-sm:-ml-10 p-3 max-sm:p-1.5 max-sm:gap-2 rounded-xl'>
                    <FiMinus className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                    <p className=' font-bold text-2xl max-sm:text-xl'>1</p>
                    <IoMdAdd className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                </button>
               
                </div> 
                </div> 

                {/* image3  */}
                <div className=' flex justify-between pl-6 pr-6 mt-5 w-full'>
<div >    
    <div className=' flex '>
            <button className=' flex border-green-200 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8 bg-green-200   justify-center'>
                <img src={leaf} alt="leaf"
                    className=' w-6 h-6 mt-1 max-sm:w-4 max-sm:h-4' />
                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Veg</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8   justify-center'>
                <p> <FaStar className=' text-yellow-400 text-2xl max-sm:w-4 max-sm:h-4 mt-0.5' /></p>

                <p className=' text-xl font-medium ml-2  max-sm:text-sm'>4.5</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-36 max-sm:w-24 max-sm:h-8   justify-center'>
                <p> <FaConciergeBell  className=' text-yellow-400 text-2xl mt-0.5 max-sm:w-3 max-sm:h-4' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Serves 1</p>
            </button>
            </div>

            <p className=' font-bold text-xl mt-5 max-sm:text-sm'>Veg Sandwich</p>
             <p className=' font-bold text-xl mt-3 max-sm:text-sm'>Rs.40</p>

             <button className='mt-5 flex border-gray-500 border-2 border-solid p-2 pb-2 rounded-xl w-36 max-sm:w-20 max-sm:h-9  justify-center'>
                <p> <MdOutlineFavorite className=' text-red-600 text-2xl mt-0.5 max-sm:text-xl' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm '>Added</p>
            </button>
            </div>
           

            {/* sand image  */}
<div>
            <img src={sain} alt="sand"
            className=' h-36 w-36 rounded-full max-sm:h-10 max-sm:mt-10 max-sm:-ml-28 max-sm:w-16' />

           
                
                <button className='mt-5  flex justify-center gap-x-4 border-2 border-orange-400 border-solid w-36 max-sm:w-20 max-sm:h-10 max-sm:-ml-10 p-3 max-sm:p-1.5 max-sm:gap-2 rounded-xl'>
                    <FiMinus className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                    <p className=' font-bold text-2xl max-sm:text-xl'>1</p>
                    <IoMdAdd className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                </button>
               
                </div> 
                </div>

                {/* image 4 */}
                <div className=' flex justify-between pl-6 pr-6 mt-5 w-full'>
<div >    
    <div className=' flex '>
            <button className=' flex border-green-200 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8 bg-green-200   justify-center'>
                <img src={leaf} alt="leaf"
                    className=' w-6 h-6 mt-1 max-sm:w-4 max-sm:h-4' />
                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Veg</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-28 max-sm:w-16 max-sm:h-8   justify-center'>
                <p> <FaStar className=' text-yellow-400 text-2xl max-sm:w-4 max-sm:h-4 mt-0.5' /></p>

                <p className=' text-xl font-medium ml-2  max-sm:text-sm'>4.5</p>
            </button>

            <button className='ml-4 flex border-gray-500 border-2 border-solid p-1 pb-2 rounded-full w-36 max-sm:w-24 max-sm:h-8   justify-center'>
                <p> <FaConciergeBell  className=' text-yellow-400 text-2xl mt-0.5 max-sm:w-3 max-sm:h-4' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm'>Serves 1</p>
            </button>
            </div>

            <p className=' font-bold text-xl mt-5 max-sm:text-sm'>Veg Sandwich</p>
             <p className=' font-bold text-xl mt-3 max-sm:text-sm'>Rs.40</p>

             <button className='mt-5 flex border-gray-500 border-2 border-solid p-2 pb-2 rounded-xl w-36 max-sm:w-20 max-sm:h-9  justify-center'>
                <p> <MdOutlineFavorite className=' text-red-600 text-2xl mt-0.5 max-sm:text-xl' /></p>

                <p className=' text-xl font-medium ml-2 max-sm:text-sm '>Added</p>
            </button>
            </div>
           

            {/* sand image  */}
<div>
            <img src={sain} alt="sand"
            className=' h-36 w-36 rounded-full max-sm:h-10 max-sm:mt-10 max-sm:-ml-28 max-sm:w-16' />

           
                
                <button className='mt-5  flex justify-center gap-x-4 border-2 border-orange-400 border-solid w-36 max-sm:w-20 max-sm:h-10 max-sm:-ml-10 p-3 max-sm:p-1.5 max-sm:gap-2 rounded-xl'>
                    <FiMinus className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                    <p className=' font-bold text-2xl max-sm:text-xl'>1</p>
                    <IoMdAdd className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                </button>
               
                </div> 
                </div>
    </>
   
  )
}