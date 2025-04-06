import React from 'react'
import client_Desktop from '../assets/images/clients/client_desktop.webp';
import client_mobile from '../assets/images/clients/client_mobile.jpg'

const Partners = () => {
  return (
    <div className='container mt-10'>
      <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>Find Us At</h1>
      <img alt='client' src={client_Desktop} className='w-full hidden md:block'/>
      <img alt='client' src={client_mobile} className='w-full md:hidden'/>

    </div>
  )
}

export default Partners