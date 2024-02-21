import Footer from "@/components/users/elements/Footer";
import Navbar from "@/components/users/elements/Navbar";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import Image from "next/image";
import { useEffect, useState } from "react";
import Call from "@/components/common/Buttons/Call";
import Book from "@/components/common/Buttons/Book";
import Data from "@/assets/data";
import Email from "@/components/common/Buttons/Email";
import GRPD from "@/components/common/GRPD";
import PageLayout from "@/components/common/PageLayout";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
  return {
    props: {
      admin
    }
  }
})

export default function Contact({ admin = false }: { admin: boolean }) {

  const [lang, setLang] = useState("fr")
  const [showGrpd, setShowGrpd] = useState(false)

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    const isNew = localStorage.getItem("isNew")
    if (storedLang && storedLang !== lang) setLang(storedLang)
    if (isNew !== "false") {
      setShowGrpd(true)
      localStorage.setItem("isNew", "false")
    }
  }, [])


  const changeLanguage = (val: string) => {
    setLang(val);
    localStorage.setItem("lang", val)
  }

  const pageData = Data[lang]

  return <PageLayout admin={admin} lang={lang} changeLanguage={changeLanguage} page="/contact">
    <section className="flex-1">
      <section className="lg:h-[700px] min-h-[calc(100vh_-_60px)] text-white flex">
        <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
          <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
            <Image width={1000} height={1000} className="md:hidden block flex-1 object-cover" src="/logo.png" alt="Logo" />
            <div className="w-full lg:px-0 px-5 text-white flex flex-col gap-2 lg:gap-1">
              <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.contact.header}</h1>
              <h2 className="text-[#fff]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.contact.subHeader}</h2>
            </div>
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
              <Call />
              <Book btn={pageData.home.hero.btn} primary={false} />
              <Email />
            </div>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
            <Image width={1000} height={1000} className="lg:h-[700px] object-cover" src="/logo.png" alt="Logo" />
          </div>
        </div>
      </section>
    </section>
  </PageLayout>
}