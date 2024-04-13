import Data, { EntrepriseOptionType, EntrepriseType } from "@/assets/data/entreprise"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"

const EntrepriseLayout = () => {

    const { lang } = useAppContext()
    const pageData: EntrepriseType = Data[lang]

    return (
        <div className="">
            <div className="flex-1 section z-1">
                <div className="hero lg:h-[700px] min-h-[calc(100vh_-_60px)] lg:mb-0 mb-10 flex">
                    <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                        <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
                            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
                            <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
                                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.title}</h1>
                                <h2 className="text-[#000]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.description}</h2>
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
            </div>
            <div className="lg:mx-[15%] mx-5 flex flex-col gap-4 pb-10">
                <div className="text-[#000]/[85%] text-sm grid lg:grid-cols-2 gap-3">
                    {pageData?.options?.map((op: EntrepriseOptionType, idx: number) => <div className="p-3 rounded-[8px] border-[1px] border-[#000]/[50%] flex flex-col gap-2" key={idx}>
                        <p className="text-base font-semibold">{op?.title}</p>
                        <hr />
                        <div className="flex h-[100px] items-center">
                            <p className="text-xs text-[#000]/[50%]">{op?.description}</p>
                        </div>
                        <hr />
                        <ul className="flex-1 text-[#000]/[85%] text-sm ml-5">
                            {op?.features?.map((op: string, idx: number) => <li className="list-disc" key={idx}>
                                {op}
                            </li>)}
                        </ul>
                        <hr />
                        <div className="mx-auto py-5">
                            <Book bounce={false} btn={lang === "fr" ? "réserver" : "Book"} primary={true} />
                        </div>
                    </div>)}
                </div>
                <span className="text-center mb-5 text-sm font-medium">{pageData?.footer}</span>
            </div>
        </div>
    )
}

export default EntrepriseLayout