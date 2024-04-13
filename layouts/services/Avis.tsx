import Data, { AvisType, FeedbcakType, TestemonialType } from "@/assets/data/avis"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const AvisLayout = () => {

    const { lang } = useAppContext()
    const pageData: AvisType = Data[lang]

    return (
        <div className="">
            <div className="flex-1 section z-1">
                <div className="hero lg:h-[700px] min-h-[calc(100vh_-_60px)] lg:mb-0 mb-10 flex">
                    <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                        <div className="text-center lg:text-left lg:pl-20 pt-[5%] text-[#000] flex-1 flex flex-col gap-12">
                            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
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
                            <Image width={1000} height={1000} className="lg:h-[600px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mx-[15%] mx-5 flex flex-col lg:gap-10 gap-4 pb-10">
                <div className="flex flex-col gap-4">
                    <p className="text-center text-base font-medium">{pageData?.list1.title}</p>
                    <ul className="text-[#000]/[85%] text-sm grid lg:grid-cols-2 gap-3 ml-5">
                        {
                            pageData?.list1?.options?.map((op: string, idx: number) => <li className="list-disc" key={idx}>
                                {op}
                            </li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    {pageData?.testemoials?.map((el: TestemonialType, idx: number) => <div className="flex lg:flex-row flex-col gap-5 items-center p-4 border-[1px] border-[#000]/[20%] rounded-[16px]" key={idx}>
                        <div className="flex-1 flex flex-col gap-4">
                            <Image alt="Social logo" className="lg:mx-0 mx-auto" width={100} height={100} src={el?.img} draggable={false} />
                            <p className="text-base font-medium text-left">{el?.title}</p>
                            <p className="text-sm text-[#000]/[75%] text-left">{el?.description}</p>
                            <p className="text-base font-medium text-left">
                                {el?.footer}
                                <a href={el?.url} target="_blank" className="pl-2">
                                <OpenInNewIcon />
                            </a>
                            </p>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            {
                                el?.feedbacks?.map((feedback: FeedbcakType, idx) => <div className="border-[1px] border-[#000]/[5%] p-2 rounded-[8px] flex flex-col gap-2" key={idx}>
                                    <p className="text-sm text-[#000]/[75%]">"{feedback?.feedback}"</p>
                                    <p className="text-sm font-medium text-right"><span className="text-xs font-light">Par</span> {feedback?.author}</p>
                                </div>)
                            }
                        </div>
                    </div>)}
                </div>
                <div className="mx-auto">
                    <Book bounce={false} btn={lang === "fr" ? "Reserver" : "Book"} primary={true} />
                </div>
                <p className="text-center text-base font-medium">{pageData?.title2}</p>
                <p className="text-sm text-[#000]/[75%] text-left">{pageData?.p1}</p>
                <p className="text-sm text-[#000]/[75%] text-left">{pageData?.p2}</p>
                <p className="text-sm text-[#000]/[75%] text-left">{pageData?.p3}</p>
            </div>
        </div>
    )
}

export default AvisLayout