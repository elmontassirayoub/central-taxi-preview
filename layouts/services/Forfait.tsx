import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import Data, { ForfaitOption, Forfaittype } from "@/assets/data/forfait"
import Call from "@/components/common/Buttons/Call"
import Book from "@/components/common/Buttons/Book"

const ForfaitLayout = () => {

    const { lang } = useAppContext()
    const pageData:Forfaittype = Data[lang]

    return (
        <div className="">
            <div className="flex-1 section z-1">
                <div className="hero lg:h-[700px] min-h-[calc(100vh_-_60px)] lg:mb-0 mb-10 flex">
                    <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                        <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
                            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" />
                            <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
                                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.h1}</h1>
                            </div>
                            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
                                <Call bounce={false} />
                                <Book bounce={false} btn={lang === "fr" ? "Reserver" : "Book"} primary={true} />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
                            <Image width={1000} height={1000} className="lg:h-[600px] object-contain" src="/logo.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mx-[15%] mx-5 flex flex-col gap-4 pb-10">
                <p className="text-center lg:text-[24px] text-[18px] font-medium">{pageData?.title}</p>
                <ul className="text-[#000]/[85%] ml-5 text-sm grid lg:grid-cols-2 gap-3">
                    {pageData?.options?.map((op: ForfaitOption, idx: number) => <li className="p-3 rounded-[8px] border-[1px] border-[#000]/[50%] flex flex-col gap-2" key={idx}>
                        <p className="text-base font-semibold">{op?.title}</p>
                        <p className="flex-1 text-sm text-[#000]/[50%]">{op?.desctiption}</p>
                        <p className="text-lg lg:text-base font-semibold text-right">{op?.price}€</p>
                    </li>)}
                </ul>
                <div className="mx-auto my-3">
                    <Book bounce={false} btn={lang === "fr" ? "Reserver" : "Book"} primary={true} />
                </div>
                <span className="text-center text-sm">{pageData?.footer}</span>
                <p className="text-center font-semibold">{pageData?.title1}</p>
                <p className="text-center text-sm text-[#000]/[50%]">{pageData?.description1}</p>
                <p className="text-center font-semibold">{pageData?.title2}</p>
                <p className="text-center text-sm text-[#000]/[50%]">{pageData?.description2}</p>
            </div>
        </div>
    )
}

export default ForfaitLayout