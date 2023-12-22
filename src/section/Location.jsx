import React, { useEffect, useState } from 'react'
import BG from "../assets/Bg Lokasi.png"
import IconLocation from "../assets/location.png"
import sanity from "../sanity"
import { imageUrlFor } from '../imageBuilder'

const Location = () => {
  const [ImageJembrana, setImageJembrana] = useState(null)
  async function fetchData1() {
      try {
        // Ganti 'yourTypeName' dengan nama tipe dokumen yang ingin Anda ambil
        const response = await sanity.fetch('*[_type == "image_jembrana"]');
    
        // Lakukan sesuatu dengan data yang telah diambil
        setImageJembrana(response[0])
        
        return response; // Mengembalikan data jika perlu
      } catch (error) {
        throw error; // Melemparkan error untuk ditangani di bagian pemanggil fungsi
      }
  }
  const [ImageJimbaran, setImageJimbaran] = useState(null)
  async function fetchData2() {
      try {
        // Ganti 'yourTypeName' dengan nama tipe dokumen yang ingin Anda ambil
        const response = await sanity.fetch('*[_type == "image_jimbaran"]');
    
        // Lakukan sesuatu dengan data yang telah diambil
        setImageJimbaran(response[0])
        
        return response; // Mengembalikan data jika perlu
      } catch (error) {
        throw error; // Melemparkan error untuk ditangani di bagian pemanggil fungsi
      }
  }
  useEffect(() => {
      // Mengambil data dari Sanity
      fetchData1()
      fetchData2()
  }, []);

  return (
    <div className='mb-10'>
      <div className='relative h-40 lg:h-72'>
        <img src={BG} alt="bg" className='absolute w-full'/>
        <div className="text-center absolute w-full my-auto mt-4 lg:mt-32">
            <h2 className='font-Sacramento text-4xl text-base-100 drop-shadow-md'>Lokasi</h2>
            <h1 className='font-CantoraOne text-5xl text-base-100 drop-shadow-md'>DIN HOUSE</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center">
        <div className="relative card">
          <div className="block w-36 h-32 lg:w-60 lg:h-56 bg-base-300 relative z-10">
          {
              ImageJimbaran && <img src={imageUrlFor(ImageJimbaran.image).url()} alt="Jembrana" className='w-full h-full object-cover'/>
            }
          </div>
          <div className="relative">
            <div className="w-28 lg:w-44 mx-auto text-center bg-greenPrimary">
              {ImageJimbaran && 
              <a href={ImageJimbaran.maps} target='_blank'>
                <img src={IconLocation} alt="Icon" className='bg-base-100 p-5 rounded-full mx-auto mb-3 -mt-9 relative z-20 animate-bounce'/>
              </a>}
              <h3 className='font-Brawler text-base-100 drop-shadow-md text-lg'>Jimbaran<br />Bali</h3>
            </div>
          </div>
        </div>
        <div className="relative card">
          <div className="block w-36 h-32 lg:w-60 lg:h-56 bg-base-300 relative z-10">
            {
              ImageJembrana && <img src={imageUrlFor(ImageJembrana.image).url()} alt="Jembrana" className='w-full h-full object-cover'/>
            }
          </div>
          <div className="relative">
            <div className="w-28 lg:w-44 mx-auto text-center bg-greenPrimary">
              {ImageJembrana && 
                <a href={ImageJembrana.maps} target='_blank'>
                  <img src={IconLocation} alt="Icon" className='bg-base-100 p-5 rounded-full mx-auto mb-3 -mt-9 relative z-20 animate-bounce'/>
                </a>
              }
              <h3 className='font-Brawler text-base-100 drop-shadow-md text-lg'>Jembrana<br />Bali</h3>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Location