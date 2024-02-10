import Navbar from "@/components/users/elements/Navbar";
import "tailwindcss/tailwind.css";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SellIcon from '@mui/icons-material/Sell';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EuroIcon from '@mui/icons-material/Euro';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarRating from "@/components/users/elements/StarRating";
import RateReviewIcon from '@mui/icons-material/RateReview';
import Footer from "@/components/users/elements/Footer";
import Data, { CardDataType } from '@/assets/data'
import { useEffect, useState } from "react";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import Image from "next/image";
import Logo from '@/assets/logo.png'
import Call from "@/components/common/Buttons/Call";
import Book from "@/components/common/Buttons/Book";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
  return {
    props: {
      admin
    }
  }
})
export default function Home({ admin = false }: { admin: boolean }) {

  const [lang, setLang] = useState("fr")

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    if (storedLang && storedLang !== lang) setLang(storedLang)
  }, [])

  const reviews = [
    {
      name: "Thorhildur Hallgrims",
      date: "Le 15 janvier 2023",
      rating: 5,
      review: "Best taxi driver in town!! Was super helpfull and kind."
    },
    {
      name: "Thorhildur Hallgrims",
      date: "Le 15 janvier 2023",
      rating: 4.5,
      review: "Best taxi driver in town!! Was super helpfull and kind."
    },
    {
      name: "Thorhildur Hallgrims",
      date: "Le 15 janvier 2023",
      rating: 3,
      review: "Best taxi driver in town!! Was super helpfull and kind."
    }
  ]

  const changeLanguage = (val: string) => {
    setLang(val);
    localStorage.setItem("lang", val)
  }

  const getIcon = (label: string) => label === "book" ? <BookOnlineIcon className="text-center rounded-[50%] bg-[#FFDC00] text-[#000] p-1" sx={{ fontSize: 40 }} /> : label === "price" ? <SellIcon className="text-center rounded-[50%] bg-[#FFDC00] text-[#000] p-1" sx={{ fontSize: 40 }} /> : <EventAvailableIcon className="text-center rounded-[50%] bg-[#FFDC00] text-[#000] p-1" sx={{ fontSize: 40 }} />

  const pageData = Data[lang]

  return (
    <main className="overflow-x-hidden">
      <Navbar lang={lang} changeLanguage={changeLanguage} page="/" admin={admin} />
      <div className="hero lg:h-[700px] h-[calc(100vh_-_60px)] text-white flex">
        <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
          <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
            <Image className="md:hidden block flex-1 object-cover" src={Logo} alt="Logo" />
            <div className="w-full lg:px-0 px-5 text-white flex flex-col gap-2 lg:gap-1">
              <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">taxi strasbourg services</h1>
              <h2 className="text-[#fff]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.home.hero.h2}</h2>
              <h3 className="text-[#fff]/[50%] lg:text-[18px] mt-3">{pageData.home.hero.h3}</h3>
            </div>
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
              <Call />
              <Book btn={pageData.home.hero.btn} />
            </div>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
            <Image className="lg:h-[700px] object-cover" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-around my-20 mx-10 gap-10 lg:gap-0">
        {
          pageData.home.cardData?.map((card: CardDataType, idx: number) => <div key={idx} className="lg:w-[400px] w-fit h-fit lg:h-[400px] bg-[#33475A] text-white flex flex-col gap-3 p-3 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="text-center">
              {
                getIcon(card?.icon)
              }
            </div>
            <h3 className="text-[16px] lg:text-[20px] font-bold text-center">{card.title}</h3>
            <p className="text-[13px] lg:text-[15px]">{card.text}</p>
          </div>)
        }
      </div>
      <div className="relative my-10 h-[300px]">
        <div className="absolute top-0 left-[-40px] w-[120%] lg:w-[105%] h-[300px] bg-[#FFDC00] flex flex-col justify-center items-center rotate-[-1.75deg] shrink-0">
          <div className="rotate-[1.75deg] items-center flex flex-col gap-4 lg:gap-2 justify-center">
            <EuroIcon sx={{ fontSize: 50 }} className="rounded-[50%] bg-[#33475A] text-[#000] p-2 text-white" />
            <p className="text-[20px] lg:text-[35px] font-bold uppercase">taxi strasbourg services</p>
            <p className="text-[13px] lg:text-[20px] font-bold">{pageData.home.yellowSection.h2}</p>
            <button className="flex items-center text-white gap-5 px-7 py-2 mx-auto bg-[#33475A] text-[16px] lg:text-[18px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <p>{pageData.home.yellowSection.btn}</p>
              <ArrowForwardIcon sx={{ fontSize: 30, fontWeight: 700 }} className="" />
            </button>
          </div>
        </div>
      </div>
      <section className="p-10 lg:p-20">
        <p className="text-[24px] underline font-bold">{pageData.home.reviews.h1}</p>
        <div className="my-5 lg:m-10 flex flex-col items-center justify-center gap-5">
          {
            reviews?.map((review, idx) => <div key={idx} className="lg:w-[950px] w-fit bg-[#33475A] lg:px-5 lg:py-3 p-3 rounded-[5px] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex justify-between">
                <div>
                  <p className="lg:text-[18px] font-semibold">{review?.name}</p>
                  <small className="text-[12px] font-light">{review?.date}</small>
                </div>
                <StarRating rating={review?.rating} />
              </div>
              <p className="lg:text-[18px] font-semibold mt-3 lg:mt-5">{review.review}</p>
            </div>)
          }
        </div>
        <div className="flex gap-2 justify-end items-center">
          <p className="lg:text-[20px] font-semibold underline">{pageData.home.reviews.footer}</p>
          <ArrowForwardIcon sx={{ fontSize: 30, fontWeight: 700 }} className="lg:block hidden" />
          <ArrowForwardIcon sx={{ fontSize: 20, fontWeight: 700 }} className="lg:hidden block" />
        </div>
        <button className="flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <p>{pageData.home.reviews.btn}</p>
          <RateReviewIcon sx={{ fontSize: 30, fontWeight: 700 }} className="lg:block hidden" />
          <RateReviewIcon sx={{ fontSize: 20, fontWeight: 700 }} className="lg:hidden block" />
        </button>
      </section>
      <Footer lang={lang} changeLanguage={changeLanguage} />
    </main>
  )
}
