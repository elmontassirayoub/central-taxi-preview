import PageLayout from "@/components/common/PageLayout";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import { useEffect, useState } from "react";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Tarifs({admin}: {admin: boolean}) {

    const [lang, setLang] = useState("fr")

    useEffect(() => {
        const storedLang = localStorage.getItem("lang")
        if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])

    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
    }

    return <PageLayout lang={lang} changeLanguage={changeLanguage} page="/terms-of-use" admin={admin}>
        Tarifs
    </PageLayout>
}