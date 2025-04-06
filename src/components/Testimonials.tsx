import React from "react";

const testimonials = [
    {
        quote:
            "shopName is my go-to grocery store. They always have fresh produce, and I love their wide variety of spices. The staff is super friendly and helpful!",
        author: "Priya, Iselin",
    },
    {
        quote:
            "The weekly specials at shopName help me stock up on my favorite items without breaking the bank. Great prices and quality – highly recommended!",
        author: "Amit, Edison",
    },
    {
        quote:
            "I can always count on shopName for authentic products. It feels like home here, with everything I need for traditional cooking.",
        author: "Farah, Woodbridge",
    },
];

const Testimonial = () => {
    return (
        <div className="bg-amber-100 py-16 px-6 md:px-12">
            <div className="container">
                <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>Why do People love Us?</h1>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md relative"
                        >
                            <div className="text-red-600 text-3xl mb-4">❝</div>
                            <p className="text-gray-700 text-base mb-6">“{t.quote}”</p>
                            <p className="font-semibold text-gray-900">{t.author}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Testimonial;