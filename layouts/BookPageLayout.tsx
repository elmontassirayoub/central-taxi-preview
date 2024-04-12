import { useAppContext } from "@/context/appContext"
import Data from "@/assets/data"
import BookLayout from "@/layouts/book";
import Call from "@/components/common/Buttons/Call";
import Image from "next/image";
import { Home_section1 } from "@/assets/data";
import Book from "@/components/common/Buttons/Book";

const BookPageLayout = () => {

    const { lang } = useAppContext()
    const pageData = Data[lang]


    return (
        <section className="mb-10 flex flex-col gap-10 lg:gap-[80px]">
            <div className="flex-1 section z-1">
                <div className="hero lg:h-[700px] min-h-[calc(100vh_-_60px)] lg:mb-0 mb-10 flex">
                    <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
                        <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
                            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
                            <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
                                <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.book.h1}</h1>
                                <h2 className="text-[#000]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.book.desc}</h2>
                            </div>
                            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
                                <Call bounce={false} />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
                            <Image width={1000} height={1000} className="lg:h-[600px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <BookLayout />
            </div>
            <div className="lg:px-[10%] px-3 flex flex-col lg:flex-row gap-3">
                {
                    pageData?.book?.cards?.map((card: Home_section1, idx: number) => <div key={idx} className="flex-1 h-auto border-[1px] border-[#000]/[25%] rounded-[16px] p-4 flex flex-col gap-3">
                        <p className="font-semibold">{card?.title}</p>
                        <span className="text-sm text-[#000]/[50%] italic">{card?.description}</span>
                    </div>)
                }
            </div>
            <div className="lg:px-[10%] px-3 text-center flex flex-col gap-3">
                <p className="font-semibold text-[20px]">{pageData?.book?.question}</p>
                <span className="text-sm text-[#000]/[50%] italic">{pageData?.book?.answer}</span>
                <ul className="grid text-left text-sm lg:grid-cols-2 w-fit mx-auto">
                    {
                        pageData?.book?.options?.map((option: string, idx: number) => <li className="list-disc" key={idx}>{option}</li>)
                    }
                </ul>
            </div>
            <div className="mx-auto">
                <Book bounce={false} btn={pageData.footer.btn2} primary={true} />
            </div>
            <p className="text-center">{pageData?.book?.footer}</p>
        </section>
    )
}

export default BookPageLayout