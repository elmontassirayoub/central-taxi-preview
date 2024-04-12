import Data from "@/assets/data"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import Email from "@/components/common/Buttons/Email"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"

const ContactLayout = () => {

  const { lang } = useAppContext()

  const pageData = Data[lang]
  return (
    <section className="flex-1">
      <div className="lg:h-[700px] min-h-[calc(100vh_-_60px)] flex">
        <div className="flex justify-evenly md:px-0 px-5 h-full pt-5 lg:pt-0 items-center lg:items-start">
          <div className="text-center lg:text-left lg:pl-20 pt-[10%] text-[#000] flex-1 flex flex-col gap-12">
            <Image width={1000} height={1000} className="md:hidden block !h-[500px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
            <div className="w-full lg:px-0 px-5 flex flex-col gap-2 lg:gap-1">
              <h1 className="mb-10 lg:mb-0 uppercase text-[24px] lg:text-[40px] lg:[word-spacing:5px] font-meduim">{pageData.contact.header}</h1>
              <h2 className="text-[#000]/[70%] text-[18px] lg:text-[18px] italic lg:w-[75%]">{pageData.contact.h1}</h2>
            </div>
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5">
              <Call bounce={false} />
              <Book btn={pageData.home.hero.btn} primary={true} bounce={false} />
              <Email primary={true} />
            </div>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden">
            <Image width={1000} height={1000} className="lg:h-[600px] object-contain" src="/logo.png" alt="Logo" draggable={false} />
          </div>
        </div>
      </div>
      <div className="lg:px-[15%] px-5 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-center lg:text-[24px] text-[18px] font-medium">{pageData.contact.subHeader}</p>
          <p className="text-center text-[#000]/[80%]">{pageData.contact.h2}</p>
          <ul className="pl-5 lg:pl-0 grid lg:grid-cols-2 text-sm text-[#000]/[90%] py-3">
            {
              pageData.contact.list?.map((item: string, idx: number) => <li className="list-disc" key={idx}>{item}</li>)
            }
          </ul>
          <span className="text-sm text-center">{pageData?.contact?.sectionFooter}</span>
        </div>
        <div className="py-5 flex flex-col gap-3">
          <p className="text-center lg:text-[24px] text-[18px] font-medium">{pageData.contact.h1_2}</p>
          <p className="text-center text-[#000]/[80%]">{pageData.contact.p1}</p>
          <p className="text-center text-sm text-[#000]/[80%]">{pageData.contact.p2}</p>
          <p className="text-center text-sm text-[#000]/[80%]">{pageData.contact.p3}</p>
          <p className="text-center text-sm text-[#000]/[80%]">{pageData.contact.list2Header}</p>
          <ul className="pl-5 lg:pl-0 grid lg:grid-cols-2 text-sm text-[#000]/[90%] py-3">
            {
              pageData.contact.list2?.map((item: string, idx: number) => <li className="list-disc" key={idx}>{item}</li>)
            }
          </ul>
          <span className="text-sm text-center">{pageData?.contact?.sectionFooter}</span>
        </div>
        <div className="flex items-center justify-around mb-5 lg:flex-row flex-col gap-5">
                <Call bounce={false} />
                <Book bounce={false} btn={pageData.footer.btn2} primary={true} />
            </div>
      </div>
    </section>
  )
}

export default ContactLayout