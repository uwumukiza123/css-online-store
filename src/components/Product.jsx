import React from 'react'
import queenPanel from '../assets/images/product-1.jpeg'
import kingPanel from '../assets/images/product-2 (1).jpeg'
import singlePanel from '../assets/images/product-3.jpeg'
import twinPanel from '../assets/images/product-4 (1).jpeg'
import fridge from '../assets/images/product-5 (1).jpeg'
import dresser from '../assets/images/product-6 (1).jpeg'
import couch from '../assets/images/product-7 (1).jpeg'
import table from '../assets/images/product-8.jpeg'

const Product = () => {
  return (
    <>
        <div className='h-40 flex justify-center items-center font-medium'>
            <h1 className='text-4xl'>Our Products</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 pl-4 md:pl-40 pr-4 md:pr-40 pb-10'>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-96' src={queenPanel} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>Queen Panel Bed</p>
                <span className='text-[#f09d51]'>$10.99</span>
            </div>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-80' src={kingPanel} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>King Panel Bed</p>
                <span className='text-[#f09d51]'>$12.99</span>
            </div>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-80' src={singlePanel} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>Single Panel Bed</p>
                <span className='text-[#f09d51]'>$12.99</span>
            </div>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-80' src={twinPanel} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>Twin Panel Bed</p>
                <span className='text-[#f09d51]'>$22.99</span>
            </div>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-80' src={fridge} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>Fridge</p>
                <span className='text-[#f09d51]'>$88.99</span>
            </div>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-80' src={dresser} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>Dresser</p>
                <span className='text-[#f09d51]'>$32.99</span>
            </div>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-80' src={couch} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>Couch</p>
                <span className='text-[#f09d51]'>$45.99</span>
            </div>
            <div className='h-60 flex flex-col justify-center items-center p-4'>
                <img className='w-80' src={queenPanel} alt="queen panel bed" />
                <p className='text-xl font-medium pt-4'>Table</p>
                <span className='text-[#f09d51]'>$33.99</span>
            </div>
        </div>
    </>
  )
}

export default Product