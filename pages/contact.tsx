import Footer from "@/components/users/elements/Footer";
import Navbar from "@/components/users/elements/Navbar";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import { useEffect, useState } from "react";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
  return {
    props: {
      admin
    }
  }
})

export default function Contact ({admin = false}: {admin: boolean}) {

  const [lang, setLang] = useState("fr")

    useEffect(() => {
      const storedLang = localStorage.getItem("lang")
      if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])

    
    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
      }

    return <main className="flex flex-col min-h-screen">
      <Navbar admin={admin} lang={lang} changeLanguage={changeLanguage} page="/contact" />
      <section className="flex-1">

      </section>
      <Footer lang={lang} changeLanguage={changeLanguage} />
  </main>
}