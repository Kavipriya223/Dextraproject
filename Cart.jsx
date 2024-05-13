import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { BiCookie } from "react-icons/bi";
import leaf from "../Assets/leaf.png"
import { FaStar } from "react-icons/fa6";
import { FaConciergeBell } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import sain from "../Assets/sain.png"
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FaCreditCard } from "react-icons/fa6";
import { RiWallet3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';








export const Cart = () => {
    return (
        <>
            <div className=' flex pl-6 mt-5 '>
                <p className='  text-xl mt-1'><Link to='/account'><FaArrowLeft /></Link></p>
                <p className=' text-xl ml-3 font-bold'>Cart</p>
            </div>

            <div className=' bg-rose-500 p-3 flex text-xl max-sm:text-sm max-sm:h-16 text-white mt-5'>
                <p className=' mt-0.5 text-2xl'><BiCookie /></p>
                <p className=' ml-3 mb-3'>Whoa! You have a tasty & delicious snack here. </p>
            </div>

            <p className=' font-bold  mt-5 text-xl pl-6 max-sm:text-sm max-sm:pl-3'>Items (1)</p>

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
            className=' h-36 w-36 rounded-full max-sm:h-12 max-sm:mt-10 max-sm:-ml-28 max-sm:w-16' />

           
                
                <button className='mt-5  flex justify-center gap-x-4 border-2 border-orange-400 border-solid w-36 max-sm:w-20 max-sm:h-10 max-sm:-ml-10 p-3 max-sm:p-1.5 max-sm:gap-2 rounded-xl'>
                    <FiMinus className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                    <p className=' font-bold text-2xl max-sm:text-xl'>1</p>
                    <IoMdAdd className=' text-2xl font-bold mt-1 max-sm:text-xl text-orange-400'/>
                </button>
               
                </div> 
                </div>   

                {/* ----   */}
                <div className=' flex justify-end'>
                <button className=' bg-orange-400 p-4 flex max-sm:p-2  rounded-xl mt-10'>
                    <IoMdAdd className=' text-2xl max-sm:text-xl   mt-0.5  text-white'/>
                    <p className=' text-xl max-sm:text-sm font-semibold max-sm:mt-0.5 text-white ml-3 max-sm:ml-1'>ADD MORE ITEMS</p>
                </button>
                </div>
               

                {/* delivery */}

                <div className=' flex justify-between mt-9 pl-6 pr-6'>
                    <p className=' font-semibold text-xl max-sm:text-sm'>Delivery Address</p>
                    <u className=' text-xl text-orange-400 font-semibold max-sm:text-sm'>Edit</u>
                </div>


<div className=' flex pl-6 mt-5'>
                <button className=' border-2 border-gray-500 border-solid p-2 rounded-xl '>
                <SlLocationPin  className=' text-4xl text-orange-400 max-sm:text-xl'/>
                </button>
                <p className='ml-7 text-gray-500 text-xl max-sm:text-sm'>Srinivasa Nagar, Chennai, Tamil Nadu, India</p>
                </div>


                {/* event title  */}
                <div className=' flex flex-col pl-6 pr-6 mt-10'>
               

       
       <label className=' text-xl font-semibold mb-4 max-sm:text-sm' >Event Title</label>
                <input type=' text' placeholder='Colleague birthday party placeholder-text-sm'
                className='mb-4 border-solid border-2 border-orange-400 p-4  rounded-xl placeholder-black font-medium text-xl '/>
        

       <label className=' text-xl font-semibold mb-4 max-sm:text-sm'>Delivery on</label>
                <input type=' text' placeholder='Tue, 28 June 2021'
                className='mb-4 border-solid border-2 border-orange-400 p-4 rounded-xl placeholder-black font-medium text-xl '/>
        
        <input type=' text' placeholder='hh:mm'
                className='mt-4 mb-4 border-solid border-2 border-orange-400 p-4 rounded-xl placeholder-gray-500 font-medium text-xl '/>
        </div>

        {/* payment */}

<div className=' pl-6 pr-6'>
        <p  className=' text-xl font-semibold mt-10 max-sm:text-sm'>Payment Method</p>
        
        <button className=' border-solid border-2 border-gray-500 rounded-xl  flex justify-start mt-6 mb-4 p-4 w-full'>
        <FaCreditCard  className=' text-3xl mt-0.5'/>
         <p className=' text-xl font-semibold ml-3 max-sm:text-sm'>Pay using UPI</p>
        </button>

        <button className=' border-solid border-2 border-gray-500 rounded-xl  flex justify-start mt-9  p-4 w-full'>
        <RiWallet3Fill  className=' text-3xl mt-0.5'/>
         <p className=' text-xl font-semibold ml-3 max-sm:text-sm'><Link to ='/delivery'>Cash on delivery</Link></p>
        </button>
        </div>  


{/* receipt  */}
<div className=' pl-6 pr-6'>
        <p className='mt-10 text-xl font-semibold text-orange-400 max-sm:text-sm'>Receipt</p>    
        
        <hr className='mt-4 mb-4 border-dashed  border-gray-400 border-2'/>

        <div className=' flex justify-between '>
        <div className=' flex flex-col gap-5'>
        <p className=' font-semibold text-xl max-sm:text-sm'>Total Price</p>
        <p className=' font-semibold text-xl max-sm:text-sm'>Tax and Charges</p>
        <p className=' font-semibold text-xl max-sm:text-sm'>Delivery partner fee</p>
        <p className=' font-semibold text-xl max-sm:text-sm'>Platform fee</p>
        <p className=' font-semibold text-xl max-sm:text-sm'>Round off</p>
        </div>

        <div className=' flex flex-col gap-5'>
        <p className=' font-semibold text-xl max-sm:text-sm'>₹ 40.00</p>
        <p className=' font-semibold text-xl max-sm:text-sm'>₹ 0.50</p>
        <p className=' font-semibold text-xl max-sm:text-sm'>₹ 0.00</p>
        <p className=' font-semibold text-xl max-sm:text-sm text-green-500 '>FREE</p>
        <p className=' font-semibold text-xl max-sm:text-sm'>-₹ 0.00</p>
        </div>
        </div>
        <hr className='mt-4 mb-4 border-dashed  border-gray-400 border-2'/>

<div className=' flex justify-between'>
<p className=' font-semibold text-xl max-sm:text-sm'>Grand Total</p>
<p className=' font-semibold text-xl max-sm:text-sm'>₹ 40.50</p>
</div>

</div>
        
        <br /><br /><br /><br /><br /><br />
        </>
    )
}