import React from 'react'
// import offer1 from '../assets/images/offers/1.png'
// import offer2 from '../assets/images/offers/2.png'
import offer3 from '../assets/images/offers/3.png'

const OffersCard = () => {
  return (
    <div className='container mt-16 mb-15'>
        <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>Avail These Offers</h1>
      <div className="flex flex-wrap justify-between items-center gap-4 md:gap-3">
        <img src={offer3} alt='Offer' className='w-full md:w-[32%] rounded-md shadow-lg'/>
        <img src={offer3} alt='Offer' className='w-full md:w-[32%] rounded-md shadow-lg'/>
        <img src={offer3} alt='Offer' className='w-full md:w-[32%] rounded-md shadow-lg'/>
      </div>
    </div>
  )
}

export default OffersCard