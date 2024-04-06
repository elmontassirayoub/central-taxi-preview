import Data, { CardDataType, Home_section1, Vehicule_Type } from "@/assets/data"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import InfoCard from "@/components/users/elements/InfoCard"
import EuroIcon from '@mui/icons-material/Euro';
import ReviewCard from "@/components/users/elements/ReviewCard"
import Review from "@/components/common/Buttons/Review"
import BookLayout  from "./book"

const Landing = ({ admin = false }: { admin: boolean }) => {

    const { lang } = useAppContext()

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
                pageData.home.services.features.map((feature: Home_section1, index: number) => <div className="text-left border-[1px] !p-4 rounded-[16px] flex flex-col gap-4 my-5 lg:my-0" key={index}>
                  <p className="font-semibold">{feature.title}</p>
                  <span className="text-sm">{feature.description}</span>
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
                    <h4 className="mb-2 lg:mb-0 uppercase text-[20px] text-white lg:text-[28px] lg:[word-spacing:5px] font-meduim">taxi strasbourg</h4>
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
              <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
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