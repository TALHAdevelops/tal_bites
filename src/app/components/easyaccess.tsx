import React from 'react'
import address from "../../../public/assets/address.png"
import time from "../../../public/assets/time.png"
import fork from "../../../public/assets/fork.png"
import Image from 'next/image'

export default function Easyaccess() {
  return (
    <div>
<div className='flex flex-col py-8 sm:h-[500px]'>
  <h1 className='mx-auto text-5xl p-8 font-extrabold'>Get your food</h1>
  <div className='flex flex-col sm:flex-row justify-around'>
    <div className='w-[300px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0'>
      <Image className='w-[70px] mx-auto' src={address} alt='address pin' />
      <p className='mx-auto'>1. Find your address</p>
    </div>
    <div className='w-[300px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0'>
  <Image className='w-[70px] mx-auto' src={fork} alt='fork' />
  <p className='mx-auto'>2. Choose your food</p>
</div>
<div className='w-[300px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0'>
  <Image className='w-[70px] mx-auto' src={time} alt='time' />
  <p className='mx-auto'>3. Wait 30-40 minutes</p>
</div>
  </div>
</div>
    </div>
  )
}
