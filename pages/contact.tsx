import Navbar from "@/components/users/elements/Navbar";
import { useEffect, useState } from "react";

export default function Contact () {

  const [lang, setLang] = useState("fr")

    useEffect(() => {
      const storedLang = localStorage.getItem("lang")
      if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])

    
    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
      }

    return <main className="">
      <Navbar lang={lang} changeLanguage={changeLanguage} page="/contact" />
    Contact page
  </main>
}