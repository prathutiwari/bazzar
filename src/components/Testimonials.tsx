import React from "react";

const testimonials = [
    {
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed leo laoreet, eleifend metus laoreet, condimentum magna. Fusce nec libero aliquam, rutrum lacus et, faucibus nisl.",
        author: "Customer 1",
    },
    {
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed leo laoreet, eleifend metus laoreet, condimentum magna. Fusce nec libero aliquam, rutrum lacus et, faucibus nisl.",
        author: "Customer 2",
    },
    {
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed leo laoreet, eleifend metus laoreet, condimentum magna. Fusce nec libero aliquam, rutrum lacus et, faucibus nisl.",
        author: "Customer 2",
    },
];

const Testimonial = () => {
    return (
        <div className="bg-amber-100 py-16 px-6 md:px-12 mt-16 mb-16">
            <div className="container">
                <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>People love Us</h1>
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