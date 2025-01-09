import React from 'react'
import { testimonialsData } from '../assets/assets'
const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg-px32 w-full overflow-hidden'  id='Testimonials'>
   <h1 className='text-2xl sm:text-4xl font-bold mb-2'
     >Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span> </h1>
    <p  className='text-gray-500 max-w-80 text-center mb-8'>Real Stories from Those Who Found Home with Us</p>

    <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial,index)=>(
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt="" />
                <h2>{testimonial.name}</h2>
                <p>{testimonial.title}</p>
               <p className='m-5 text-sm'>{testimonial.text}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Testimonials