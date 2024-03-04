import { useEffect, useState } from "react";
import Data from "@/assets/data";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import BookLayout from "@/layouts/book";



export type CoordinationType = {
    lat: number,
    lng: number
}

export type ReservationData = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
    email: "",
    message: ""
}

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {

    if (admin) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            admin
        }
    }
})

export default function Book({ admin = false }: { admin: boolean }) {

    const [lang, setLang] = useState("fr")


    useEffect(() => {
        const storedLang = localStorage.getItem("lang")
        if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])


    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
    }


    const pageData = Data[lang]


    return <PageLayout admin={admin} lang={lang} changeLanguage={changeLanguage} page="/book">
        <BookLayout pageData={pageData} />
    </PageLayout>
}