import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'

function Testimonial() {
    const context = useContext(MyContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Hear from our <span className=' text-pink-500'>customers</span></h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./test_pro1.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">I’ve been shopping here for over a year, and every purchase has been smooth and satisfying. The variety is fantastic, and I always find exactly what I need, often at great discounts. Their customer service team is top-notch, quickly addressing any questions I have.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm capitalize">Exceptional Shopping Experience! </h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Aditi S</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./test_pro2.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">I love how fast my orders arrive! Even in busy times, they never fail to deliver on time with the better quality ever. Plus, the prices are hard to beat, with plenty of deals on my favorite items. I couldn’t ask for a better shopping experience.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm capitalize">Fast Shipping and Great Deals!</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Arjun K</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./test_pro3.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Shopping here is so easy! The website is user-friendly, and I can always rely on them for quality products. The detailed descriptions and customer reviews help me choose exactly what I want, and I feel confident with every purchase.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm capitalize"> User-Friendly and Reliable Platform</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial