import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo dinhouse.png"
import Hero from "../assets/hero.png"
import sanity from "../sanity.js"
import { imageUrlFor } from '../imageBuilder.js'

const HeroSection = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Mengambil data dari Sanity
      sanity
      .fetch('*[_type == "headpage"]') // Ganti dengan tipe data dan query yang sesuai
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
        {data.map((doc, i) => (
          <div key={i} className='relative h-96 lg:h-screen bg-greenPrimary'>
            <img src={imageUrlFor(doc.background).url()} alt="Image Hero" className='absolute h-full w-full object-cover'/>
            <div className='absolute bg-gradient-to-b from-greenPrimary to-transparent h-40 w-full'/>
            <div className="p-3 absolute flex">
                <div className="bg-[#fff] rounded-full">
                    <img src={Logo} alt="Logo Din House" className='w-16'/>
                </div>
                <h1 className='uppercase my-auto ms-5 text-[#fff] font-BreeSerif text-xl'>din house classic bali</h1>
            </div>
            <h1 className='absolute bottom-5 w-72 bg-greenPrimary/50 text-[#fff] font-CantoraOne text-2xl rounded-e-full ps-3 py-3 lg:text-5xl lg:w-2/4'>{doc.texthead}</h1>
        </div>
        ))}
    </>
  )
}

export default HeroSection