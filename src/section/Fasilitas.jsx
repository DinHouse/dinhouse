import React, { useEffect, useState } from 'react'
import sanity from "../sanity"
import { imageUrlFor } from '../imageBuilder'

const Fasilitas = () => {
    const [fasilitasJembrana, setFasilitasJembrana] = useState([])
    useEffect(() => {
        sanity
      .fetch('*[_type == "fasilitas_jembrana"]') // Ganti dengan tipe data dan query yang sesuai
      .then((result) => setFasilitasJembrana(result))
      .catch((error) => console.error('Error fetching data:', error));
    }, [])

    const [fasilitasJimbaran, setFasilitasJimbaran] = useState([])
    useEffect(() => {
        sanity
      .fetch('*[_type == "fasilitas_jimbaran"]') // Ganti dengan tipe data dan query yang sesuai
      .then((result) => setFasilitasJimbaran(result))
      .catch((error) => console.error('Error fetching data:', error));
    }, [])

    const [price, setPrice] = useState([])
    useEffect(() => {
        sanity
      .fetch('*[_type == "price"]') // Ganti dengan tipe data dan query yang sesuai
      .then((result) => setPrice(result))
      .catch((error) => console.error('Error fetching data:', error));
    }, [])
    
  return (
    <div>
        <h1 className='font-CantoraOne text-2xl text-greenPrimary text-center drop-shadow-md mb-5'>Fasilitas</h1>
        <div className="flex space-x-3 px-3">
            <div className="grid grid-cols-3 w-full">
                {fasilitasJimbaran && 
                    fasilitasJimbaran.map((item, i) => (
                    <div key={i} className="text-center mx-2">
                        <img src={imageUrlFor(item.icon).url()} alt={item.label} className='mx-auto w-10'/>
                        <p className='text-xs text-greenPrimary font-Brawler'>{item.label}</p>
                    </div>
                )) }
            </div>
            <div className="block w-2 bg-greenPrimary rounded-full"></div>
            <div className="grid grid-cols-3 w-full">
                {fasilitasJembrana && fasilitasJembrana.map((item, i) => (
                    <div key={i} className="text-center mx-2">
                        <img src={imageUrlFor(item.icon).url()} alt={item.label} className='mx-auto w-10'/>
                        <p className='text-xs text-greenPrimary font-Brawler'>{item.label}</p>
                    </div>
                )) }
            </div>
        </div>
        {price && price.map((doc, i) => (
            <div key={i} className="flex justify-between p-3 lg:w-2/3 mx-auto lg:mt-20">
                <div>
                    <h1 className='text-3xl text-error font-CantoraOne'>Rp. {doc.harga_jimbaran}</h1>
                    <h1 className='font-CantoraOne text-xl line-through text-base-content/70'>Rp. {doc.diskon_jimbaran}</h1>
                </div>
                <div>
                    <h1 className='text-3xl text-error font-CantoraOne'>Rp. {doc.harga_jembrana}</h1>
                    <h1 className='font-CantoraOne text-xl line-through text-base-content/70'>Rp. {doc.diskon_jembrana}</h1>
                </div>
            </div>
        ))}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='fill-greenPrimary' fillOpacity="1" d="M0,288L120,250.7C240,213,480,139,720,138.7C960,139,1200,213,1320,250.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
  )
}

export default Fasilitas