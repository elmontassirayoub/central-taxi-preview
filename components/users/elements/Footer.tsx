import Image from "next/image";
import Logo from '@/assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import Data from '@/assets/data'

export default function Footer({ lang, changeLanguage }: { lang: string, changeLanguage: Function }) {

    const compData = Data[lang]

    return <footer className="p-10 flex justify-evenly text-white items-center lg:flex-row flex-col lg:gap-0 gap-10">
        <section className="flex flex-col justify-center items-center gap-5">
            <select value={lang} onChange={e => changeLanguage(e.target.value)} className="bg-transparent outline-none w-fit uppercase text-white text-[18px] font-semibold">
                <option value="fr" className="uppercase bg-[#000]">fr</option>
                <option value="en" className="uppercase bg-[#000]">en</option>
            </select>
            <Image src={Logo} alt="logo" draggable={false} width={250} />
            <div className="flex gap-4">
                <FacebookIcon className="" />
                <InstagramIcon className="" />
                <TwitterIcon className="" />
            </div>
        </section>
        <section className="flex items-center justify-center flex-col gap-3">
            <p className="uppercase text-[20px] lg:text-[30px] font-bold text-center">taxi strasbourg services</p>
            <p className="lg:text-[18px] lg:font-semibold text-center">{compData.footer.sec1.p1}</p>
            <p className="lg:text-[18px] lg:font-semibold text-center">{compData.footer.sec1.p2}</p>
            <p className="lg:text-[18px] lg:font-semibold text-center">{compData.footer.sec1.p3}</p>
        </section>
        <section className="text-[#000]">
            <button className="flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <p>{compData.footer.btn1}</p>
                <RateReviewIcon sx={{ fontSize: 30, fontWeight: 700 }} className="" />
            </button>
            <button className="flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <p>{compData.footer.btn2}</p>
                <BookOnlineIcon sx={{ fontSize: 30, fontWeight: 700 }} className="" />
            </button>
        </section>
    </footer>
}