import React, { useEffect, useState } from 'react'
import User from "../assets/User.png"
import Schedule from "../assets/Schedule.png"
import Home from "../assets/home.png"
import Team from "../assets/Team.png"
import Payment from "../assets/Payment.png"
import sanity from "../sanity"

const Booking = () => {
    const [namaPenginap, setNamaPenginap] = useState("")
    const [tanggalMasuk, setTanggalMasuk] = useState("")
    const [tanggalKeluar, setTanggalKeluar] = useState("")
    const [penginapan, setPenginapan] = useState("")
    const [jumlahPenginap, setJumlahPenginap] = useState(0)
    const [metodePembayaran, setMetodePembayaran] = useState("")

    const handleBooking = (e) => {
        e.preventDefault();
        window.location.href = `https://wa.me/+6283892568959?text=*Nama Penginap*%3A+${namaPenginap}%0A*Tanggal Masuk*%3A+${tanggalMasuk}%0A*Tanggal Keluar*%3A+${tanggalKeluar}%0A*Penginapan*%3A+${penginapan}%0A*Jumlah Penginap*%3A+${jumlahPenginap} Orang%0A*Metode Pembayaran*%3A+${metodePembayaran}`
    } 

    const [discount, setDiscount] = useState([])
    useEffect(() => {
        sanity
      .fetch('*[_type == "diskon"]') // Ganti dengan tipe data dan query yang sesuai
      .then((result) => setDiscount(result[0]))
      .catch((error) => console.error('Error fetching data:', error));
    }, [])



    const targetDate = new Date(`${discount.date}T${discount.time}`);


    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return {
          days,
          hours,
          minutes,
          seconds,
          difference,
        };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });    

  return (
    <div className='bg-greenPrimary -mt-2 pt-16 text-center pb-20'>
        <h1 className='font-Brawler text-2xl lg:text-7xl text-[#fff] drop-shadow-md mb-10'>Pesan Sekarang <br/> Dapatkan Harga Spesial!!!</h1>
        {discount.isDiscount && <h2 className='font-Brawler bg-error w-fit mx-auto px-5 text-[#fff] rounded-full py-1 mb-7 lg:text-2xl animate-pulse'>Penawaran Terbatas</h2>}

        {discount.isDiscount & timeLeft.difference > 0 ? (
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mb-10">
            <div className="flex flex-col p-2 bg-[#fff] rounded-box text-error font-Brawler">
                <span className="countdown text-5xl">
                <span style={{"--value":timeLeft.days}}></span>
                </span>
                days
            </div> 
            <div className="flex flex-col p-2 bg-[#fff] rounded-box text-error font-Brawler">
                <span className="countdown text-5xl">
                <span style={{"--value":timeLeft.hours}}></span>
                </span>
                hours
            </div> 
            <div className="flex flex-col p-2 bg-[#fff] rounded-box text-error font-Brawler">
                <span className="countdown text-5xl">
                <span style={{"--value":timeLeft.minutes}}></span>
                </span>
                min
            </div> 
            <div className="flex flex-col p-2 bg-[#fff] rounded-box text-error font-Brawler">
                <span className="countdown text-5xl">
                <span style={{"--value":timeLeft.seconds}}></span>
                </span>
                sec
            </div> 
            </div>) : (
                ""
            )
        }

        <form className='px-3 flex-row space-y-5 lg:w-2/4 mx-auto' onSubmit={handleBooking}>
            <div className="flex bg-[#fff] input">
                <img src={User} alt="User" className='scale-75'/>
                <input value={namaPenginap} onChange={e=> setNamaPenginap(e.target.value)} type="text" placeholder='Nama Penginap' className='outline-none ms-3 w-full' required/>
            </div>
            <div className="bg-[#fff] rounded-md overflow-hidden">
                <p className='text-start mb-2 text-base font-Brawler px-6 pt-3'>Tanggal Masuk</p>
                <div className="flex bg-base-100 px-6 pb-3">
                    <img src={Schedule} alt="Schedule" className='scale-105'/>
                    <input value={tanggalMasuk} onChange={e=> setTanggalMasuk(e.target.value)} type="date" placeholder='Tanggal Keluar' className='ms-3 w-full outline-none' required/>
                </div>
            </div>
            <div className="bg-[#fff] rounded-md overflow-hidden">
                <p className='text-start mb-2 text-base font-Brawler px-6 pt-3'>Tanggal Keluar</p>
                <div className="flex bg-base-100 px-6 pb-3">
                    <img src={Schedule} alt="Schedule" className='scale-105'/>
                    <input value={tanggalKeluar} onChange={e=> setTanggalKeluar(e.target.value)} type="date" placeholder='Tanggal Keluar' className='ms-3 w-full outline-none' required/>
                </div>
            </div>
            <div className="flex bg-[#fff] input">
                <img src={Home} alt="Home" className='scale-75'/>
                <select value={penginapan} onChange={e=> setPenginapan(e.target.value)} className='w-full ms-3 outline-none'>
                    <option selected disabled value="">Pilih Penginapan</option>
                    {
                        discount.priceList && discount.priceList.map((price, i) => (
                            <option key={i} className='text-xs' value={price}>{price}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex bg-[#fff] input">
                <img src={Team} alt="Team" className='scale-75'/>
                <input value={jumlahPenginap} onChange={e=> setJumlahPenginap(e.target.value)} type="number" placeholder='Jumlah Pengunjung' className='outline-none ms-3 w-full' required/>
            </div>
            <div className="flex bg-[#fff] input">
                <img src={Payment} alt="Payment" className='scale-75'/>
                <select value={metodePembayaran} onChange={e=> setMetodePembayaran(e.target.value)} className='w-full ms-3 outline-none'>
                    <option selected disabled value="">Metode Pembayaran</option>
                    <option className='text-xs' value="Transfer BANK">Transfer BANK</option>
                    <option className='text-xs' value="COD">COD</option>
                </select>
            </div>
            <button type='submit' className='bg-[#000] px-7 py-2 rounded-full text-[#fff] font-Brawler'>Cek Ketersediaan</button>
        </form>
    </div>
  )
}

export default Booking