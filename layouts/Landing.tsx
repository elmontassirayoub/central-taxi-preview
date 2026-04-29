import Data, { CardDataType, Home_section1, ServiceFeaturesType, Vehicule_Type } from "@/assets/data"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import InfoCard from "@/components/users/elements/InfoCard"
import EuroIcon from '@mui/icons-material/Euro';
import ReviewCard from "@/components/users/elements/ReviewCard"
import Review from "@/components/common/Buttons/Review"
import BookLayout from "./book"
import Link from "next/link"
import { ReactNode, useState } from "react"

const Landing = ({ admin = false }: { admin: boolean }) => {

  const { lang } = useAppContext()
  const [activeInfoTab, setActiveInfoTab] = useState(0)
  const linkInlineClass = "font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"

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

  const pageData = Data[lang]
  const pricingRows: { route: string | ReactNode; duration: string; day?: string; night?: string }[] = [
    {
      route: (
        <Link href="/taxi/taxi-strasbourg-aeroport-Entzheim" className={linkInlineClass}>
          Strasbourg → Aéroport d&apos;Entzheim
        </Link>
      ),
      duration: "20 min",
      day: "35 – 40 €",
      night: "45 – 60 €"
    },
    {
      route: (
        <Link href="/taxi/taxi-circuit-touristique-alsace" className={linkInlineClass}>
          Strasbourg → Circuit touristique Alsace (ex. Route des Vins)
        </Link>
      ),
      duration: "4 à 6 h",
      day: "150 – 220 €"
    },
    {
      route: (
        <Link href="/taxi/taxi-strasbourg-gare" className={linkInlineClass}>
          Strasbourg → Gare (SNCF ou centre-ville)
        </Link>
      ),
      duration: "5 à 15 min selon gare",
      day: "10 – 20 €",
      night: "15 – 25 €"
    },
    {
      route: (
        <Link href="/taxi/taxi-strasbourg-europapark" className={linkInlineClass}>
          Strasbourg → Europa Park
        </Link>
      ),
      duration: "1h à 1h15",
      day: "100 – 120 €",
      night: "150 – 180 €"
    },
  ]

  const faqItems: { title: string; description: string | ReactNode }[] = [
    {
      title: "Quels types de trajets pouvez-vous réserver avec un taxi à Strasbourg ?",
      description:
        "Nos taxis à Strasbourg couvrent tous vos besoins : transferts vers l'aéroport d'Entzheim, trajets vers la gare, déplacements professionnels, visites touristiques, sorties nocturnes et même circuits touristiques en Alsace. Nous proposons aussi des trajets interurbains vers Colmar, Mulhouse, Haguenau ou Europa Park.",
    },
    {
      title: "Quels types de véhicules proposez-vous ?",
      description:
        "Nous mettons à disposition des berlines, monospaces et vans spacieux. Tous nos véhicules sont haut de gamme et parfaitement entretenus. Ils sont adaptés à votre nombre de passagers",
    },
    {
      title: "Comment sont calculés les tarifs des trajets ?",
      description:
        "Nos tarifs sont précis et transparents : ils se basent sur la durée et la distance, ajustés si nécessaire selon le véhicule ou le trafic. Le taximètre reste la référence ultime. Nous proposons également des tarifs compétitifs pour les trajets longue distance et les circuits touristiques.",
    },
    {
      title: "Peut-on bénéficier de services supplémentaires à bord ?",
      description: (
        <>
          Oui ! Nos taxis offrent le Wi-Fi gratuit, des bouteilles d&apos;eau, des sièges auto pour enfants sur demande, et un accueil personnalisé pour les transferts aéroport. Pour les occasions spéciales, vous pouvez également réserver des véhicules élégants comme des limousines ou vans confortables. Retrouvez ici les détails sur nos{" "}
          <Link href="/services/supplementaire" className={linkInlineClass}>
            services supplémentaires
          </Link>
          .
        </>
      ),
    },
  ]

  const infoTabs = [
    { id: 0, label: lang === "fr" ? "Tarifs" : "Pricing" },
    { id: 1, label: "FAQ" }
  ]

  return (
    <>
      <section className="flex-1 section z-1 flex flex-col gap-20">
        <div className="hero lg:h-[600px] min-h-[calc(100vh_-_60px)] flex">
          <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start my-auto">
            <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
              <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
                <h1 className="mb-10 lg:mb-0 uppercase text-[36px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">taxi strasbourg</h1>
                <h2 className="text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.home.hero.h2}</h2>
                <h3 className="lg:text-[18px] mt-3">{pageData.home.hero.h3}</h3>
              </div>
              <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
                <Call bounce={false} />
                <Book btn={pageData.home.hero.btn} primary={true} bounce={false} />
              </div>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
              <Image draggable={false} height={1000} width={1000} className="lg:h-[600px] object-contain" src="/logo.png" alt="Logo" />
            </div>
          </div>
        </div>

        {/* Featured photo (home) */}
        <div className="px-5 lg:px-20 -mt-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent z-[1]" />
              <Image
                src="/images/home/acceuil-taxis-cathedrale.png"
                alt="Taxis devant la Cathédrale de Strasbourg"
                width={1600}
                height={900}
                className="w-full h-[220px] sm:h-[320px] lg:h-[380px] object-cover"
                priority={true}
              />
              <div className="absolute inset-x-0 bottom-0 z-[2] p-4 sm:p-6">
                <p className="text-white font-semibold text-base sm:text-xl drop-shadow">
                  Taxi Strasbourg – Central Taxi 67
                </p>
                <p className="text-white/90 text-xs sm:text-sm drop-shadow">
                  Chauffeurs professionnels • Véhicules confortables • Disponible 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center gap-1 bg-gray-100 rounded-lg p-1 max-w-full overflow-x-auto">
                {infoTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInfoTab(tab.id)}
                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${activeInfoTab === tab.id
                      ? "bg-slate-800 text-white shadow-md transform scale-105 ring-1 ring-blue-700/50"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeInfoTab === 0 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Estimations de durée et tarif pour les trajets les plus demandés depuis Strasbourg
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 px-4">
                    {lang === "fr" ? "Tarifs transparents et compétitifs" : "Transparent and competitive pricing"}
                  </p>
                </div>

                <div className="sm:hidden space-y-4">
                  {pricingRows.map((row, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 space-y-2">
                      <p className="text-sm font-semibold text-gray-900">{row.route}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{lang === "fr" ? "Durée" : "Duration"}</span>
                        <span className="font-medium text-gray-700">{row.duration}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">{lang === "fr" ? "Tarif Jour" : "Day Rate"}</span>
                        <span className="font-semibold text-green-600">{row.day ?? "-"}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">{lang === "fr" ? "Tarif Nuit" : "Night Rate"}</span>
                        <span className="font-semibold text-blue-600">{row.night ?? "-"}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden sm:block bg-white rounded-2xl shadow-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {lang === "fr" ? "Trajet" : "Route"}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {lang === "fr" ? "Durée" : "Duration"}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {lang === "fr" ? "Tarif Jour" : "Day Rate"}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {lang === "fr" ? "Tarif Nuit" : "Night Rate"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pricingRows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {row.route}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {row.duration}
                          </td>
                          <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                            {row.day ?? "-"}
                          </td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-semibold">
                            {row.night ?? "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-yellow-800 text-center">
                    Les prix et temps de trajet indiqués restent des estimations et peuvent évoluer en fonction du type de véhicule, des conditions de circulation ou des arrêts effectués. Seul le montant indiqué par le taximètre fait référence.
                  </p>
                </div>
              </div>
            )}

            {activeInfoTab === 1 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    FAQ taxi à Strasbourg
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 px-4">
                    {lang === "fr" ? "Questions fréquemment posées" : "Frequently asked questions"}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {faqItems.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {faq.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        {
          !admin && <div className="px-[10%]">
            <p className="font-bold title">{pageData.home.headerBeforeCards}</p>
            <BookLayout />
          </div>
        }
        <div className="px-[10%] text-center">
          <p className="font-bold title">{pageData.home.section1.title}</p>
          <p className="text-sm lg:text-base lg:leading-[30px]">À la recherche d’une prestation de service taxi haute gamme  à Strasbourg ? Notre mission sera d’arriver à votre destination avec pleine satisfaction! Laissez-nous vous transporter pour vos trajets privés ou professionnels dans l’Eurométropole de Strasbourg et dans toute la région. Des chauffeurs de taxis, fins connaissant parfaitement la région n’attendent que vous, 24/7, derrière notre centre d’appel. Notre société de transport de personnes dessert toutes les villes Alsaciennes, mais aussi ses aéroports, gares TGV et routières.</p>
        </div>
        <div className="flex flex-col gap-10 px-10">
          <p className="font-bold title">{pageData.home.headerBeforeCards}</p>
          <div className="flex lg:flex-row flex-col justify-around gap-10 lg:gap-0">
            {
              pageData.home.cardData?.map((card: CardDataType, idx: number) => <InfoCard key={idx} idx={idx} {...card} />)
            }
          </div>
        </div>
        <div className="px-[10%] text-center">
          <p className="font-bold title">{pageData.home.services.title}</p>
          <p>{pageData.home.services.description}</p>
          <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            {
              pageData.home.services.features.map((feature: ServiceFeaturesType, index: number) => <div className="text-left border-[1px] !p-4 rounded-[16px] flex flex-col gap-4 my-5 lg:my-0" key={index}>
                <p className="font-semibold">
                  {
                    feature?.url ? (
                      <Link href={feature.url} className="hover:underline">
                        {feature.title}
                      </Link>
                    ) : feature.title
                  }
                </p>
                <span className="text-sm">{feature.description}</span>
                {
                  feature?.space && <>
                    <span className="text-sm">
                      <label className="font-semibold">{!feature?.vsl && (lang === "fr" ? "Capacité :" : "Capacity : ")}</label>
                    </span>
                    <span className="text-sm">
                      <label className="font-semibold">{!feature?.vsl && (lang === "fr" ? "Espace pour :" : "Spcae for : ")}</label> {feature.space}</span>
                  </>
                }
              </div>)
            }
          </div>
        </div>
        <section className="pb-[100px] flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <p className="title font-bold">{pageData.home.news}</p>
            <div className="bg-primary-200 h-20 mx-10 lg:mx-20 rounded-2xl flex lg:flex-row flex-col h-auto lg:h-[550px]">
              <div className="lg:flex-[0.4] news py-10 lg:py-[2rem] overflow-hidden">
                <Image draggable={false} width={1000} height={1000} className="lg:flex-1 max-h-[80%] object-contain" src="/logo.png" alt="Logo" />
                <p className="text-center uppercase text-[20px] text-white lg:text-[28px] lg:[word-spacing:5px] font-meduim">{pageData.home.contact}</p>
                <p className="text-[#fff]/[90%] text-sm lg:text-[18px] italic font-medium text-center">contact@strasbourgtaxi.fr</p>
                <p className="text-[#fff]/[90%] text-sm lg:text-[18px] lg:mt-3 text-center">06 47 60 01 71</p>
              </div>
              <div className="lg:flex-[0.6] flex items-center">
                <div className="w-full px-5 lg:px-10 flex flex-col lg:gap-10 text-white py-10 lg:py-0">
                  <p className="mb-2 lg:mb-0 uppercase text-[20px] text-white lg:text-[28px] lg:[word-spacing:5px] font-meduim">taxi strasbourg</p>
                  <p className="text-white/[80%] italic text-sm lg:text-base">{pageData.home.paragraph}</p>
                  <div className="lg:flex hidden justify-end">
                    <Call bounce={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[10%] text-center">
            <p className="font-bold title">{pageData.home.vehicules.title}</p>
            <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              {
                pageData.home.vehicules.types.map((type: Vehicule_Type, index: number) => <div className="text-left border-[1px] !p-4 rounded-[16px] flex flex-col gap-4 my-5 lg:py-0" key={index}>
                  <p className="font-semibold uppercase">{type.title}</p>
                  <span className="text-sm"><label className="font-semibold">{!type?.vsl && (lang === "fr" ? "Capacité :" : "Capacity : ")}</label> {type.capacity}</span>
                  <span className="text-sm"><label className="font-semibold">{!type?.vsl && (lang === "fr" ? "Espace pour :" : "Spcae for : ")}</label> {type.space}</span>
                </div>)
              }
            </div>
          </div>

          <div className="px-[10%] text-center">
            <p className="title font-bold">{pageData.home.values.title}</p>
            <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
              {
                pageData.home.values.features.map((type: Home_section1, index: number) => <div className="text-left border-[1px] !p-4 rounded-[16px] flex flex-col gap-4 my-5 lg:py-0" key={index}>
                  <p className="font-semibold uppercase">{type.title}</p>
                  <span className="text-sm">{type.description}</span>
                </div>)
              }
            </div>
          </div>

        </section>
      </section>
      <div className="relative h-[300px] w-screen ">
        <div className="absolute top-0 left-[-40px] w-[120%] lg:w-[105%] h-[300px] rotated flex flex-col justify-center items-center rotate-[-1.75deg] shrink-0">
          <div className="rotate-[1.75deg] items-center flex flex-col gap-4 lg:gap-2 justify-center w-full">
            <EuroIcon sx={{ fontSize: 50 }} className="rounded-[50%] bg-[#33475A] text-white p-2" />
            <p className="text-[20px] lg:text-[35px] text-[#fff] font-medium uppercase">Taxi Strasbourg</p>
            <p className="text-[13px] lg:text-[20px] text-[#fff]/[75%] italic mb-10">{pageData.home.yellowSection.h2}</p>
            <Book bounce={true} btn={pageData.home.yellowSection.btn} primary={true} />
          </div>
        </div>
      </div>
      <section className="py-20 px-10 lg:px-20 lg:py-[100px] section">
        <p className="title font-bold">{pageData.home.reviews.h1}</p>
        <p className="text-[#000]/85%] text-[18px] lg:text-[18px] italic text-center">{pageData.home.reviews.h2}</p>
        <div className="my-5 lg:m-10 flex lg:flex-row flex-col justify-center gap-5 py-10 lg:py-0">
          {
            reviews?.map((review, idx) => <ReviewCard key={idx} idx={idx} {...review} />)
          }
        </div>
        <div className="flex justify-center">
          <Review btn={pageData.home.reviews.btn} />
        </div>
      </section>
    </>
  )
}

export default Landing