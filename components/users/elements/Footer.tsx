import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Data from '@/assets/data'
import Review from "@/components/common/Buttons/Review";
import Book from "@/components/common/Buttons/Book";

export default function Footer({ lang, changeLanguage }: { lang: string, changeLanguage: Function }) {

    const compData = Data[lang]

    return <footer className="border-t-[1px] border-secondary-100 mx-10 py-10 flex justify-evenly text-white items-center lg:flex-row flex-col lg:gap-0 gap-10">
        <section className="flex-1 flex flex-col justify-center items-center gap-5">
            <select value={lang} onChange={e => changeLanguage(e.target.value)} className="bg-transparent outline-none w-fit uppercase text-white text-[18px]">
                <option value="fr" className="uppercase bg-[#000]">fr</option>
                <option value="en" className="uppercase bg-[#000]">en</option>
            </select>
            <Image width={1000} height={1000} src="/logo.png" alt="logo" draggable={false} className="h-[300px] object-cover" />
            <div className="flex gap-4">
                <FacebookIcon className="" />
                <InstagramIcon className="" />
                <TwitterIcon className="" />
            </div>
        </section>
        <section className="flex-1 flex items-center justify-center flex-col gap-3 italic">
            <p className="uppercase text-[20px] lg:text-[36px] whitespace-nowrap not-italic font-medium text-center">taxi strasbourg services</p>
            <p className="text-[#fff]/[70%] text-center">{compData.footer.sec1.p1}</p>
            <p className="text-[#fff]/[70%] text-center">{compData.footer.sec1.p2}</p>
            <p className="text-[#fff]/[70%] text-center">{compData.footer.sec1.p3}</p>
        </section>
        <section className="w-full flex-1 text-[#000] flex flex-col items-center gap-5 border-t-[0.5px] border-secondary-100 pt-5 lg:pt-0 lg:border-[0px]">
            <Review btn={compData.footer.btn1} />
            <Book btn={compData.footer.btn2} primary={false} />
        </section>
    </footer>
}