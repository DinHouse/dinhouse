import React, { useEffect, useState } from 'react'
import sanity from "../sanity"
import { imageUrlFor } from '../imageBuilder';

const Photo = () => {
    const [photos, setPhotos] =  useState(null)
    async function fetchData() {
        try {
          // Ganti 'yourTypeName' dengan nama tipe dokumen yang ingin Anda ambil
          const response = await sanity.fetch('*[_type == "photos"]');
                                
          // Lakukan sesuatu dengan data yang telah diambil
          setPhotos(response[0].photo)
          
          return response; // Mengembalikan data jika perlu
        } catch (error) {
          throw error; // Melemparkan error untuk ditangani di bagian pemanggil fungsi
        }
    }
    useEffect(() => {
        // Mengambil data dari Sanity
        fetchData()
    }, []);


  return (
    // <></>
    <>
        {
            photos &&
            <img src={imageUrlFor(photos).url()} alt="Villa" className='w-full h-full object-cover'/>
        }
    </>
  )
}

export default Photo