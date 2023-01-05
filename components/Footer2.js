import React from 'react'
import { FaInstagram, FaTelegram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import Image from 'next/image'


function Footer2() {
  return (
    <div className='items-center w-full p-10 bg-black h-1/3'>
      <div className='flex flex-row justify-between'>
            <div className='items-start text-white'>
                <Image src="/WADAF.jpg" width={150} height={100} /> 
            </div>
            <div className='items-end text-white '>
                <ul className='flex flex-row '>
                <li className="p-5 font-semibold text-white cursor-pointer text-md hover:text-yellow-500">
                Home
                </li>
                <li className="p-5 font-semibold text-white cursor-pointer text-md hover:text-yellow-500">
                Services
                </li>
                <li className="p-5 font-semibold text-white cursor-pointer text-md hover:text-yellow-500">
                Products
                </li>
                <li className="p-5 font-semibold text-white cursor-pointer text-md hover:text-yellow-500">
                About Us
                </li>
                <li className="p-5 font-semibold text-white cursor-pointer text-md hover:text-yellow-500">
                Contact Us
                </li>
                </ul>
            </div>
      </div>
      <div className='flex flex-row justify-between'>
            <div>
            <ul>
            <p className='pb-6 text-3xl font-bold text-green-200'>
                Contact Us
            </p>
            <div className='flex gap-6 pb-5'>
                <FaFacebook className="text-2xl bg-yellow-600 cursor-pointer hover:text-blue-600" />
                <FaInstagram className="text-2xl bg-yellow-600 cursor-pointer hover:text-blue-600" />
				<FaTwitter className="text-2xl bg-yellow-600 cursor-pointer hover:text-blue-600" />
				<FaLinkedin className="text-2xl bg-yellow-600 cursor-pointer hover:text-blue-600" />
				<FaTelegram className="text-2xl bg-yellow-600 cursor-pointer hover:text-blue-600" />
				
            </div>
            </ul>
            </div>
            <div className='items-end p-1' >
                <ul>
                    <p className='pb-2 font-bold text-gray-500 text-1xl'>
                    Email: <span className='text-green-200'> info@wadafmining.com</span>
                    </p>
                    <p className='font-bold text-gray-500 text-1xl'>
                    TelePhone: <span className='text-green-200'> +251902212223</span>
                    
                    </p>
                </ul>
            </div>
    
      </div>
      <div className='flex flex-row justify-between'>
            <p className='items-start p-2 text-gray-500'>© 2023 Wadaf Ethiopia Mining PLC. All Rights Reserved.</p>
            <div className='items-end text-white '>
                <ul className='flex flex-row '>
                <li className="p-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-white">
                Privacy Policy
                </li>
                <li className="p-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-white">
                Terms and Conditions
                </li>
               
                </ul>
            </div>
      </div>

    </div>
  )
}

export default Footer2
