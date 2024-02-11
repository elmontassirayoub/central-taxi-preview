import Book from "@/components/common/Buttons/Book";
import Call from "@/components/common/Buttons/Call";
import Navbar from "@/components/users/elements/Navbar";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '@/assets/logo.png'
import Data from '@/assets/data'
import Footer from "@/components/users/elements/Footer";
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TrainIcon from '@mui/icons-material/Train';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MapIcon from '@mui/icons-material/Map';

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Services({ admin = false }: { admin: boolean }) {

    const [lang, setLang] = useState("fr")

    useEffect(() => {
        const storedLang = localStorage.getItem("lang")
        if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])

    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
    }

    const services = [
        { icon: AddRoadIcon, text: "Taxi Strasbourg longue ou courte distance" },
        { icon: AirplanemodeActiveIcon, text: "Taxi Aéroport Strasbourg Provence" },
        { icon: TrainIcon, text: "Taxi Strasbourg gare" },
        { icon: LocalShippingIcon, text: "Service de livraison à Strasbourg en taxi" },
        { icon: MapIcon, text: "Chauffeur guide touristique Marseille" },
    ]

    const pageData = Data[lang]

    return <main className="overflow-x-hidden flex flex-col min-h-screen">
        <Navbar lang={lang} changeLanguage={changeLanguage} page="/services" admin={admin} />
        <section className="flex-1">
            <section className="lg:h-[700px] h-[calc(100vh_-_60px)] text-white flex">
                <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                    <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
                        <Image className="md:hidden block flex-1 object-cover" src={Logo} alt="Logo" />
                        <div className="w-full lg:px-0 px-5 text-white flex flex-col gap-2 lg:gap-1">
                            <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">nos services</h1>
                            <h2 className="text-[#fff]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">Nous pouvons vous offrir une grande variété de services</h2>
                        </div>
                        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
                            <Call />
                            <Book btn={pageData.home.hero.btn} primary={false} />
                        </div>
                    </div>
                    <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
                        <Image className="lg:h-[700px] object-cover" src={Logo} alt="Logo" />
                    </div>
                </div>
            </section>
            <section className="my-10 px-10 lg:px-0">
                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim text-center text-white">Ce que nous offrons</h1>
                <h2 className="text-[#fff]/[70%] text-[18px] lg:text-[18px] italic text-center">Nous avons beaucoup d'offres parmi lesquelles vous pouvez choisir</h2>
                <div className="text-white flex flex-col md:flex-row py-10 px-0 lg:p-20 gap-10">
                    {
                        services?.map((service, index) => <div key={index} className="flex-1 border-[1px] text-center p-5 rounded-xl border-secondary-1 flex flex-col gap-5 justify-start items-center">
                            <div className="bg-white text-secondary-1 p-2 flex items-center justify-center rounded-[50%]">
                                <service.icon />
                            </div>
                            <p>{service.text}</p>
                        </div>)
                    }
                </div>
                <div className="flex justify-center py-10">
                    <Call />
                </div>
            </section>
        </section>
        <Footer lang={lang} changeLanguage={changeLanguage} />
    </main>
}