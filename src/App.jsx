import React, { useEffect, useState } from 'react'
import HeroSection from './section/HeroSection'
import Money from "../src/assets/Banknotes.png"
import Family from "../src/assets/Full Family.png"
import Privasi from "../src/assets/Lock.png"
import Exterior from "../src/assets/Exterior.png"
import PhotoKamar from "../src/assets/Photo Kamar.png"
import Location from './section/Location'
import Fasilitas from './section/Fasilitas'
import Booking from './section/Booking'
import Footer from './section/Footer'
import { imageUrlFor } from './imageBuilder'
import sanity from "./sanity"
import Photo from './section/Photo'

const App = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    // Mengambil data dari Sanity
      sanity
      .fetch('*[_type == "photos"]') // Ganti dengan tipe data dan query yang sesuai
      .then((result) => setPhotos(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  const fiturs = [
    {
      icon: Money,
      label: "Harga Terjangkau",
    },
    {
      icon: Family,
      label: "Cocok Untuk Keluarga",
    },
    {
      icon: Privasi,
      label: "Privasi Yang Tinggi",
    },
    {
      icon: Exterior,
      label: "Fasilitas Lengkap",
    },
  ]
  return (
    <div className='relative'>
      <HeroSection/>
      <section className='relative py-14 px-3'>
        <h1 className='font-CantoraOne text-xl text-greenPrimary text-center drop-shadow-md mb-3 px-5'>Saatnya Liburan Hemat Dengan Beralih ke Penginapan Pilihan Keluarga</h1>
        <p className='text-center font-Brawler text-sm mb-14 px-7'>Penginapan keluarga adalah pilihan yang tepat untuk menjadi tempat istirahat keluarga anda saat liburan karena banyak sekali keuntungan yang bisa keluarga anda dapatkan yang belum tentu didapat saat memilih penginapan lain</p>
        <div className="grid grid-cols-2 items-center justify-items-center">
        {
          fiturs.map((fitur, i) => (
            <div key={i} className='mb-10 text-center'>
              <img src={fitur.icon} alt={fitur.label} className='w-24 mx-auto'/>
              <p className='text-lg font-CantoraOne text-greenPrimary'>{fitur.label}</p>
            </div>
          ))
        }
        </div>
      </section>
      <section className='relative overflow-hidden'>
        <img src={PhotoKamar} alt="photo" className='-mb-10'/>

        <svg viewBox="0 0 360 180"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M364 180H0V56.2156L364 0V180Z" fill="#147C3E"/>
        </svg>

      </section>

      <div className="-mt-28 lg:-mt-80 mb-20 relative">
        <h1 className='text-center px-3 lg:px-44 mb-5 lg:mb-10 font-CantoraOne text-xl lg:text-5xl text-[#fff]'>Saatnya Liburan Hemat Dengan Beralih ke Penginapan Pilihan Keluarga</h1>
      
          <div className="block w-64 h-44 lg:w-[520px] lg:h-80 rounded-3xl mx-auto shadow-lg mb-7 overflow-hidden">
            <Photo />
          </div>

          <p className='px-7 text-xs lg:text-base text-center font-Brawler'>Din House adalah penginapan keluarga yang bertemakan rumah klasik yang sampai saat ini sudah terletak di dua tempat yaitu di Jimbaran dan jembrana Bali penginapan ini memberikan kesan menginap yang berbeda, dengan memberikan nuansa klasik dan juga nyaman sehingga siapapun yang menginap  disini akan betah.</p>
      </div>
      <Location />
      <Fasilitas />
      <Booking />
      <Footer />
    </div>
  )
}

export default App