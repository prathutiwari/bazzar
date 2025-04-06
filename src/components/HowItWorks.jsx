import React from "react";
import One from '../assets/images/info/one.png'
import Two from '../assets/images/info/two.svg'
import Three from '../assets/images/info/three.svg'
import Four from '../assets/images/info/four.svg'

const HowItWorks = () => {
    return (
        <section className="container mt-10">
            <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>How It Works</h1>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                {/* Order Online Section */}
                <div className="order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                        Order Online
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Your most favorite grocery store, your most trusted brand, now at
                        your fingertips! Order Online, pick up from the store or get
                        groceries conveniently delivered to your home. Shop shopName in a
                        whole new way!
                    </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src={One}
                        alt="Order Online"
                        className="w-40 md:w-60"
                    />
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                {/* Same Day Delivery Section */}
                <div className="flex justify-center">
                    <img
                        src={Two}
                        alt="Same Day Delivery"
                        className="w-64 md:w-80"
                    />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                        Same Day Delivery
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Get your groceries delivered in as little as two hours or at the
                        time of your choice. Minimum purchase is required to qualify for a
                        free delivery.
                    </p>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                {/* Free Pickup Section */}
                <div className="order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                        Free In-Store Pick Up
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Skip the line! Order online & conveniently pick up your groceries at the time of your choice. No minimum order or additional fees on Pick Up orders, Ever! No Lines No Rush, Only Convenience!
                    </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src={Three}
                        alt="Order Online"
                        className="w-64 md:w-80"
                    />
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                {/* Same Day Delivery Section */}
                <div className="flex justify-center">
                    <img
                        src={Four}
                        alt="Same Day Delivery"
                        className="w-64 md:w-80"
                    />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                        100% Satisfaction Guaranteed
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    shopName's great Quality, Savings & Customer Service, now available Online. Shop online with confidence, you are always covered with our 100% Satisfaction Guarantee.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default HowItWorks;