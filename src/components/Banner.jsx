import React from 'react'
import pizzaBackground from '../assets/images/pizza-background.webp';

const Banner = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={pizzaBackground} alt="Pizza background" className='object-cover h-52 w-screen opacity-50' />
                <div className="absolute bottom-12 w-full text-center drop-shadow-lg">
                    <div className='inline-block'>
                        <h1 className='text-black font-bold text-7xl'>Plus</h1>
                        <div className='bg-white rounded-2xl text-black font-bold text-4xl'>Pizza</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner