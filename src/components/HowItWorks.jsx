import React from "react";
import One from '../assets/images/info/one.png'
import Two from '../assets/images/info/two.svg'
import Three from '../assets/images/info/three.svg'
import Four from '../assets/images/info/four.svg'

const HowItWorks = () => {
    return (
        <section className="container mt-16 mb-16">
            <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>How It Works</h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16 mt-10">
                {/* Order Online Section */}
                <div className="order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                    shopName, Now Just a Tap Away
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    Your favorite grocery destination is now online—bringing the same trusted quality, unbeatable value, and exceptional service right to your fingertips.

Shop with ease, choose in-store pickup or home delivery, and experience a whole new way to enjoy shopName—where tradition meets convenience.

One store. Endless possibilities. All just a click away.
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
                        Freshness at Your Doorstep
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Need it today? We’ve got you covered. Enjoy fast, reliable grocery delivery in as little as two hours—or schedule it at your convenience.

                        A minimum purchase applies for free delivery, but the ease and freshness are always included.

                        Because great groceries shouldn’t wait.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                {/* Free Pickup Section */}
                <div className="order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                        Convenience, On Your Schedule
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Skip the wait and shop smarter. With shopName’s Free In-Store Pickup, you can order online and collect your groceries at a time that suits you—no minimums, no fees, ever.

                        <b>No lines. No hassle. Just premium service and total convenience.</b>
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
                        Enjoy shopName’s signature quality, value, and service—now just a click away. Our online experience is designed with your convenience in mind, backed by our 100% Satisfaction Guarantee.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default HowItWorks;