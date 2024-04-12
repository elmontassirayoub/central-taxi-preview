import Data, { ConventionneType } from "@/assets/data/conventionne"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"

const ConventionneLayout = () => {

    const { lang } = useAppContext()
    const pageData: ConventionneType = Data[lang]

    return (
        <div className="">
            <div className="flex-1 section z-1">
                <div className="hero lg:h-[700px] min-h-[calc(100vh_-_60px)] lg:mb-0 mb-10 flex">
                    <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                        <div className="text-center lg:text-left lg:pl-20 pt-[5%] text-[#000] flex-1 flex flex-col gap-12">
                            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" />
                            <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
                                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.title}</h1>
                                <h2 className="text-[#000]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.description}</h2>
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
                <div className="flex flex-col gap-2">
                    <p className="text-center text-base font-medium">{pageData?.question}</p>
                    <p className="text-center text-sm text-[#000]/[90%]">{pageData?.answer}</p>
                </div>
                <p className="text-sm text-[#000]/[90%]">{pageData?.p1}</p>
                <div className="flex flex-col gap-2">
                    <p className="font-medium">{pageData?.p2}</p>
                    <ul className="text-[#000]/[85%] text-sm list-disc ml-5 lg:ml-10">
                        {pageData?.list1?.map((op: string, idx: number) => <li className="" key={idx}>
                            {op}
                        </li>)}
                    </ul>
                </div>
                <div className="mx-auto">
                    <Book bounce={false} btn={lang === "fr" ? "Reserver" : "Book"} primary={true} />
                </div>
                <p className="text-sm text-[#000]/[90%]">{pageData?.p3}</p>
                <div className="flex flex-col gap-2">
                    <p className="font-medium">{pageData?.p4}</p>
                    <p className="text-sm text-[#000]/[90%]">{pageData?.answerP4}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-medium">{pageData?.p5}</p>
                    <ul className="text-[#000]/[85%] text-sm list-disc ml-5 lg:ml-10">
                        {pageData?.list2?.map((op: string, idx: number) => <li className="" key={idx}>
                            {op}
                        </li>)}
                    </ul>
                </div>
                <div className="mx-auto">
                    <Call bounce={false} />
                </div>
                <p className="text-sm text-[#000]/[90%]">{pageData?.p6}</p>
                <p className="text-sm text-[#000]/[90%]">{pageData?.p7}</p>
                <p className="text-sm text-[#000]/[90%]">{pageData?.p8}</p>
                <p className="text-sm text-[#000]/[90%]">{pageData?.p9}</p>
            </div>
        </div>
    )
}

export default ConventionneLayout