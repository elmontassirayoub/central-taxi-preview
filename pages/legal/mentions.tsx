import PageLayout from "@/components/common/PageLayout"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"
import { useEffect, useState } from "react"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})
export default function Mentions({ admin = false }: { admin: boolean }) {
    const [lang, setLang] = useState("fr")

    useEffect(() => {
        const storedLang = localStorage.getItem("lang")
        if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])

    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
    }

    return <PageLayout lang={lang} changeLanguage={changeLanguage} page="/mentions" admin={admin}>
        <section className="text-white py-10 px-2 lg:p-20">
            <h1 className="lg:text-4xl text-2xl pb-10">Mention légales</h1>
            <div className="lg:p-10 px-3 flex flex-col gap-8">
                <div>
                    <p className="lg:text-2xl text-xl pb-2">Hébergeur:</p>
                    <p className="">NAMECHEAP, Inc.</p>
                    <p className="">4600 East Washington Street</p>
                    <p className="">Suite 305, Phoenix</p>
                    <p className="">AZ 85034, USA</p>
                </div>
                <div>
                    <p className="lg:text-2xl text-xl pb-2">Loi CNIL informatique et libertés :</p>
                    <p className="">Conformément à la loi «Informatique et Libertés » du 6 janvier 1978, les personnes ayant fourni des informations personnelles peuvent exercer leurs droits d’accès et de modification sur ces données, en envoyant un courrier électronique à l’adresse suivante : contact@strasbourgtaxi.fr. De plus, aucune information personnelle n’est collectée à l’insu des utilisateurs du site, ni cédée à des tiers, ni utilisée à des fins personnelles sans votre accord.</p>
                </div>
                <div>
                    <p className="lg:text-2xl text-xl pb-2">Propriété intellectuelle :</p>
                    <p className="">Tout le contenu du présent site incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société Taxi Strasbourg Service. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de Taxi Strasbourg Service. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à leur encontre.</p>
                </div>
            </div>
        </section>
    </PageLayout>
}