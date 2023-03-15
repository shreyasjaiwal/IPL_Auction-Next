import React from 'react'

import Vnitlogo from '../assets/vnitlogo.png'
import Computer from '../assets/computer.png'
import Connection from '../assets/connection.png'
import Profits from '../assets/profits.png'


const Cards = () => {
  return (
    <div className='w-full py-[7rem] px-4 bg-white duration-500 relative transform transition-all translate-y-12 ease-out' data-replace='{ "translate-y-12": "translate-y-0" }'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-24 mx-auto mt-[-3rem] bg-white' src={Vnitlogo} alt="/" />
                <p className='text-2xl font-bold text-center py-8'>Get a chance to showcase your products at NIT Nagpur</p>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-24 mx-auto mt-[-3rem] bg-white' src={Computer} alt="/" />
                <p className='text-2xl font-bold text-center py-8'>Don't miss the opportunity to get your product tested</p>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-24 mx-auto mt-[-3rem] bg-white' src={Connection} alt="/" />
                <p className='text-2xl font-bold text-center py-8'>Make connections with industries experts and professsionals </p>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-24 mx-auto mt-[-3rem] bg-white' src={Profits} alt="/" />
                <p className='text-2xl font-bold text-center py-8'>Good chance of getting investment from investors and VCs </p>
            </div>


        </div>
      
    </div>
  )
}

export default Cards
