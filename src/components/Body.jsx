import React from 'react'
import CompanyInfo from './CompanyInfo'
import HeroBanner from './HeroBanner'
import Partners from './Partners'
import OffersCard from './OfferCards'
import HowItWorks from './HowItWorks'
import Categories from './Categories'
import CardContent from './CardContent'
import Testimonial from './Testimonials'

const Body = () => {
     return (
          <div>
               <HeroBanner />
               <Categories />
               <OffersCard />
               <HowItWorks />
               <CompanyInfo />
               <CardContent />
               <Testimonial />
               <Partners />
          </div>
     )
}

export default Body