import Navbar from "@/components/users/elements/Navbar";
import "tailwindcss/tailwind.css";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SellIcon from '@mui/icons-material/Sell';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EuroIcon from '@mui/icons-material/Euro';
import StarRating from "@/components/users/elements/StarRating";
import Footer from "@/components/users/elements/Footer";
import Data, { CardDataType } from '@/assets/data'
import { useEffect, useState } from "react";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import Image from "next/image";
import Call from "@/components/common/Buttons/Call";
import Book from "@/components/common/Buttons/Book";
import Review from "@/components/common/Buttons/Review";
// import GRPD from "@/components/common/GRPD"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
  return {
    props: {
      admin
    }
  }
})
export default function Home({ admin = false }: { admin: boolean }) {

  const [lang, setLang] = useState("fr")
  // const [showGrpd, setShowGrpd] = useState(false)

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    // const isNew = localStorage.getItem("isNew")
    if (storedLang && storedLang !== lang) setLang(storedLang)
    /*if(isNew !== "false") {
      setShowGrpd(true)
      localStorage.setItem("isNew", "false")
    }*/
  }, [])

  const reviews = [
    {
      name: "Thorhildur Hallgrims",
      date: "Le 15 Novembre 2023",
      rating: 5,
      review: "Best taxi driver in town!! Was super helpfull and kind."
    },
    {
      name: "Leila Bellam",
      date: "Le 16 fevrier 2024",
      rating: 5,
      review: "Taxi poli, ponctuel et très sympathique. Il a appelé 5 mns avant l’heure de rendez-vous comme prévu. Voiture nickel au niveau propreté."
    },
    {
      name: "D B",
      date: "Le 16 fevrier 2024",
      rating: 5,
      review: "Je tenais à déposer un avis pour le professionnalisme et la gentillesse du chauffeur. Nous avons pris le taxi avec ma maman et la course s’est très bien déroulée. Chauffeur très poli ,  avec de la discussion et le trajet est passé rapidement . Nous le recommandons et nous referons appel à ses services de chauffeur en cas de besoin . Merci à vous !"
    }
  ]

  const changeLanguage = (val: string) => {
    setLang(val);
    localStorage.setItem("lang", val)
  }

  const getIcon = (label: string) => label === "book" ? <BookOnlineIcon className="text-center" sx={{ fontSize: 30 }} /> : label === "price" ? <SellIcon className="text-center" sx={{ fontSize: 30 }} /> : <EventAvailableIcon className="text-center" sx={{ fontSize: 30 }} />

  const pageData = Data[lang]

  return (
    <main className="overflow-x-hidden flex flex-col min-h-screen relative">
      {/* {
        showGrpd && <section className="fixed top-0 left-0 w-screen h-screen z-[99] flex items-center justify-center">
          <GRPD setShowGrpd={setShowGrpd} />
        </section>
      } */}
      <Navbar lang={lang} changeLanguage={changeLanguage} page="/" admin={admin} />
      <section className="flex-1">
        <div className="hero lg:h-[700px] h-[calc(100vh_-_60px)] text-white flex">
          <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
            <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
              <Image draggable={false} width={1000} height={1000} className="md:hidden block flex-1 object-cover" src="/logo.png" alt="Logo" />
              <div className="w-full lg:px-0 px-5 text-white flex flex-col gap-2 lg:gap-1">
                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">taxi strasbourg services</h1>
                <h2 className="text-[#fff]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.home.hero.h2}</h2>
                <h3 className="text-[#fff]/[50%] lg:text-[18px] mt-3">{pageData.home.hero.h3}</h3>
              </div>
              <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
                <Call />
                <Book btn={pageData.home.hero.btn} primary={false} />
              </div>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
              <Image draggable={false} height={1000} width={1000} className="lg:h-[700px] object-cover" src="/logo.png" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 my-[150px] mx-10">
          <p className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim text-center text-white">{pageData.home.headerBeforeCards}</p>
          <div className="flex lg:flex-row flex-col justify-around gap-10 lg:gap-0">
            {
              pageData.home.cardData?.map((card: CardDataType, idx: number) => <div key={idx} className="lg:w-[400px] w-fit h-auto flex flex-col gap-3 p-5 rounded-[10px] shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-center">
                  <div className="bg-secondary-100 w-fit p-3 rounded-[50%] text-white">
                    {
                      getIcon(card?.icon)
                    }
                  </div>
                </div>
                <p className="lg:text-[18px] italic font-medium text-center">{card.title}</p>
                <p className="text-white/[90%] text-xs lg:text-sm">{card.text}</p>
              </div>)
            }
          </div>
        </div>
        <section className="mb-[200px]">
          <p className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim text-center text-white">{pageData.home.news}</p>
          <div className="bg-primary-200 h-20 mx-10 lg:mx-20 my-10 rounded-2xl flex lg:flex-row flex-col h-auto lg:h-[550px]">
            <div className="lg:flex-[0.4] news py-10 lg:py-[2rem] overflow-hidden">
              <Image width={1000} height={1000} className="lg:flex-1 max-h-[80%] object-contain" src="/logo.png" alt="Logo" />
              <p className="text-center uppercase text-[20px] text-white lg:text-[28px] lg:[word-spacing:5px] font-meduim">{pageData.home.contact}</p>
              <p className="text-[#fff]/[90%] text-sm lg:text-[18px] italic font-medium text-center">contact@strasbourgtaxi.fr</p>
              <p className="text-[#fff]/[90%] text-sm lg:text-[18px] lg:mt-3 text-center">06 47 60 01 71</p>
            </div>
            <div className="lg:flex-[0.6] flex items-center">
              <div className="w-full px-5 lg:px-10 flex flex-col lg:gap-10 text-white py-10 lg:py-0">
                <h4 className="mb-2 lg:mb-0 uppercase text-[20px] text-white lg:text-[28px] lg:[word-spacing:5px] font-meduim">taxi strasbourg services</h4>
                <p className="text-white/[80%] italic text-sm lg:text-base">{pageData.home.paragraph}</p>
                <div className="lg:flex hidden justify-end">
                  <Call />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative my-10 h-[300px]">
          <div className="absolute top-0 left-[-40px] w-[120%] lg:w-[105%] h-[300px] rotated flex flex-col justify-center items-center rotate-[-1.75deg] shrink-0">
            <div className="rotate-[1.75deg] items-center flex flex-col gap-4 lg:gap-2 justify-center w-full">
              <EuroIcon sx={{ fontSize: 50 }} className="rounded-[50%] bg-[#33475A] text-white p-2" />
              <p className="text-[20px] lg:text-[35px] text-[#fff] font-medium uppercase">taxi strasbourg services</p>
              <p className="text-[13px] lg:text-[20px] text-[#fff]/[75%] italic mb-10">{pageData.home.yellowSection.h2}</p>
              <Book btn={pageData.home.yellowSection.btn} primary={true} />
            </div>
          </div>
        </div>
        <section className="p-10 lg:p-20">
          <p className="mb-2 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim text-center text-white">{pageData.home.reviews.h1}</p>
          <p className="text-[#fff]/[70%] text-[18px] lg:text-[18px] italic text-center">{pageData.home.reviews.h2}</p>
          <div className="my-5 lg:m-10 flex lg:flex-row flex-col justify-center gap-5 py-10 lg:py-0">
            {
              reviews?.map((review, idx) => <div key={idx} className="bg-[#33475A] p-5 rounded-[5px] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-1 h-auto flex flex-col justify-between gap-10">
                <p className="lg:text-base text-sm text-white/[85%] flex-1">&quot;{review.review}&quot;</p>
                <div className="flex justify-between">
                  <div>
                    <p className="lg:text-base text-sm italic">{review?.name}</p>
                    <small className="text-xs text-white/[50%]">{review?.date}</small>
                  </div>
                  <StarRating rating={review?.rating} />
                </div>
              </div>)
            }
          </div>
          <div className="flex justify-center">
            <Review btn={pageData.home.reviews.btn} />
          </div>
        </section>
      </section>
      <Footer lang={lang} changeLanguage={changeLanguage} />
    </main>
  )
}
