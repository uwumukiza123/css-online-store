import React from 'react'
import landingImage from "../assets/images/hero-bcg.jpeg"

const Landing = () => {
  return (
    <>
        <div>
            <img className='w-screen h-screen' src={landingImage} alt="product-3" />
        </div>

        <div className='bg-[#fff] opacity-80 h-52 md:h-56 md:w-1/2 absolute top-80 md:left-96 flex flex-col items-center'>
          <h1 className="text-6xl font-medium p-6">FURNITURE COLLECTION</h1>
          
          <div className="bg-[#f09d51] w-48 h-14 flex justify-center items-center mt-6 hover:bg-transparent hover:border hover:border-[#f09d51] hover:text-[#f09d51]">
            <button className='opacity-100 hover:animate-spin'>SHOP NOW</button>
          </div>
        </div>
    </>
  )
}

export default Landing