import Data, { TarifOptions } from "@/assets/data"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"

const Tarif = () => {

    const { lang } = useAppContext()
    const pageData = Data[lang]

    return (
        <div className="">
            <div className="flex-1 section z-1">
                <div className="hero lg:h-[700px] min-h-[calc(100vh_-_60px)] lg:mb-0 mb-10 flex">
                    <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                        <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
                            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" />
                            <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
                                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.tarif.h1}</h1>
                            </div>
                            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
                                <Call bounce={false} />
                                <Book bounce={false} btn={pageData.home.hero.btn} primary={true} />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
                            <Image width={1000} height={1000} className="lg:h-[600px] object-contain" src="/logo.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mx-[15%] mx-5 flex flex-col gap-1">
                <p className="text-center lg:text-[24px] text-[18px] font-medium">{pageData.tarif.h2}</p>
                <p className="text-center text-[#000]/[80%]">{pageData.tarif.h3}</p>
                <p className="text-center text-xs text-[#000]/[80%]">{pageData.tarif.p1}</p>
                <p className="text-center text-sm text-[#000]/[80%]">{pageData.tarif.p2}</p>
                <p className="text-center mt-5 font-medium">{pageData.tarif.h4}</p>
                <div className="grid lg:grid-cols-2 gap-3 my-3">
                    {
                        pageData.tarif.options?.map((option: TarifOptions, idx: number) => <div key={idx} className="p-2 border-[1px] border-[#000]/[20%] flex flex-col gap-2 rounded-[8px]">
                            <p className="text-center">{option.title}</p>
                            <ul className="text-[#000]/[85%] ml-5 text-sm">
                                {option?.feautures?.map((op: string, idx: number) => <li className="border-b-[1px] py-5 text-center border-[#000]/[12%]" key={idx}>
                                <span className="">{op}</span>
                                </li>)}
                            </ul>
                            <div className="mx-auto py-5">
                                <Book bounce={false} btn={pageData.home.hero.btn} primary={true} />
                            </div>
                        </div>)
                    }
                </div>
                <p className="text-center mt-5 font-medium">{pageData.tarif.h5}</p>
                <div className="my-10 flex flex-col gap-2">
                    <p>{pageData.tarif.option2?.title}</p>
                    <ul className="grid lg:grid-cols-2 gap-3">
                        {pageData.tarif.option2?.feautures?.map((op: string, idx: number) => <li className="p-2 border-[1px] border-[#000]/[20%] flex flex-col gap-2 rounded-[8px] text-sm text-center" key={idx}>{op}</li>)}
                    </ul>
                </div>
                <p className="text-center mt-5 font-medium">{pageData.tarif.h6}</p>
                <div className="my-10 flex flex-col gap-2">
                    <p>{pageData.tarif.option3?.title}</p>
                    <ul className="grid lg:grid-cols-2 gap-3">
                        {pageData.tarif.option3?.feautures?.map((op: string, idx: number) => <li className="p-2 border-[1px] border-[#000]/[20%] flex flex-col gap-2 rounded-[8px] text-sm text-center" key={idx}>{op}</li>)}
                    </ul>
                </div>
                <p className="text-center mb-5 text-sm font-medium">{pageData.tarif.p3}</p>
            </div>
        </div>
    )
}

export default Tarif