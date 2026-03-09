import Data, { TaxiPageContent } from "@/assets/data/taxi"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"

type TaxiLayoutProps = {
    pageKey: "index" | "strasbourg" | "aeroport" | "europapark" | "circuit" | "gare"
}

const TaxiLayout: React.FC<TaxiLayoutProps> = ({ pageKey }) => {
    const { lang } = useAppContext()
    const pageData: TaxiPageContent = Data[lang][pageKey]

    return (
        <div className="">
            <section className="flex-1 section z-1">
                <div className="hero lg:h-[700px] min-h-[calc(100vh_-_60px)] lg:mb-0 mb-10 flex">
                    <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                        <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
                            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
                            <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
                                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.heroTitle}</h1>
                                <h2 className="text-[#000]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.heroSubtitle}</h2>
                            </div>
                            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
                                <Call bounce={false} />
                                <Book bounce={false} btn={lang === "fr" ? "réserver" : "Book"} primary={true} />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
                            <Image width={1000} height={1000} className="lg:h-[600px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10 px-10 lg:px-0">
                <p className="text-[#000]/[70%] text-[18px] lg:px-[10%] lg:text-[18px] italic text-center">{pageData.intro}</p>
                <div className="grid lg:grid-cols-3 gris-cols-1 py-10 px-0 lg:p-20 gap-10">
                    {pageData.sections.map((section, idx) => (
                        <div key={idx} className="flex-1 border-[1px] text-center p-5 rounded-xl border-secondary-1 flex flex-col gap-5 justify-start items-center hover:md:-translate-y-3 md:ease-in-out transition">
                            <div className="bg-[#000] text-secondary-1 p-2 flex items-center justify-center rounded-[50%]">
                                <span className="uppercase text-xs">{section.title}</span>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                {section.items.map((feature, fIdx) => (
                                    <div key={fIdx} className="text-left">
                                        <p className="font-semibold">{feature.title}</p>
                                        <p className="text-sm text-[#000]/[80%]">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-10">
                    <Call bounce={false} />
                </div>
            </section>
        </div>
    )
}

export default TaxiLayout


