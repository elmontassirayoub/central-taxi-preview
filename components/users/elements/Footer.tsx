import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Data from '@/assets/data'
import Review from "@/components/common/Buttons/Review";
import Book from "@/components/common/Buttons/Book";
import PageJaune from "@/assets/pagejaunes.png"
import Link from "next/link";
import UK from "@/assets/uk.png"
import France from "@/assets/france.png"
import Fix from "@/assets/home-telephone.png"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer({ lang, changeLanguage }: { lang: string, changeLanguage: Function }) {

    const compData = Data[lang]

    return <footer className="bg-black pt-10 text-white flex flex-col gap-10 lg:gap-20">
        <section className="flex justify-evenly px-10 lg:flex-row flex-col items-center lg:gap-0 gap-10">
            <div className="flex-1 flex flex-col justify-center items-center gap-5 lg:w-fit w-full">
                <div className="flex flex-col gap-4 items-start lg:w-fit w-full">
                    <p className="uppercase text-[18px] pb-5 lg:pb-10 lg:text-[28px] whitespace-nowrap not-italic font-medium text-center">taxi strasbourg service</p>
                    <div className="hidden lg:flex items-center gap-5">
                        <Image draggable={false} alt="UK" onClick={() => changeLanguage("en")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "en" ? "" : "border-transparent"}`} src={UK} />
                        <Image draggable={false} alt="France" onClick={() => changeLanguage("fr")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "fr" ? "" : "border-transparent"}`} src={France} />
                    </div>                    <div className="flex gap-4 items-center">
                        <a href="https://www.facebook.com/profile.php?id=61555122177541" target="_blank">
                            <FacebookIcon className="text-[#316FF6]" />
                        </a>
                        <a href="https://www.instagram.com/contact.central.taxi67/?igsh=a3JhbGRremdvcXhr&utm_source=qr" target="_blank">
                            <InstagramIcon className="instagram" />
                        </a>
                        <a href="https://www.pagesjaunes.fr/pros/58802089" target="_blank">
                            <Image src={PageJaune} alt="" width={20} height={20} className="" />
                        </a>
                    </div>
                    {/* <p className="text-center text-white/[75%] flex items-center gap-1"><strong className="text-white text-sm lg:text-base"><Image src={Fix} alt="Fix" className="w-6 h-6 text-white" /></strong> <a href="tel:0388835633">038883563</a></p> */}
                    <p className="text-center text-white/[75%] flex items-center gap-1"><strong className="text-white text-sm lg:text-base"><PhoneAndroidIcon /></strong> <a href="tel:0647600171">0647600171</a></p>
                    <p className="text-center text-white/[75%]"><strong className="text-white text-sm lg:text-base"><AlternateEmailIcon /></strong> <a href="mailto:contact@strasbourgtaxi.fr">contact@strasbourgtaxi.fr</a></p>
                    <a href="https://www.gralon.net/annuaire/commerce-et-societe/industrie/transport.htm" target="_blank">
                        <Image src="https://logo.gralon.net/plogo-gralon-204445.gif" className="border-none" alt="Transport" width={100} height={100} />
                    </a>
                </div>
            </div>
            <div className="flex-1 flex lg:items-center justify-center flex-col gap-3 italic">
                <Image width={1000} height={1000} src="/logo.png" alt="logo" draggable={false} className="lg:h-[600px] h-[500px] object-cover" />
            </div>
            <div className="w-full flex-1 text-[#000] flex flex-col lg:items-center gap-5 border-t-[0.5px] border-secondary-100 pt-5 lg:pt-0 lg:border-[0px]">
                <Review btn={compData.footer.btn1} />
                <Book btn={compData.footer.btn2} primary={false} />
                <p className="text-[#fff]/[70%] lg:text-center text-xs">Nous sommes équipés de TPE pour le paiement par Carte bancaire.</p>
            </div>
        </section>
        <section className="min-h-10 bg-[#000] px-10 py-2 lg:py-0 flex lg:items-center flex-col lg:flex-row gap-2 lg:gap-5 justify-end">
            <p className="text-[#fff]/[70%] text-sm lg:text-right lg:whitespace-normal whitespace-nowrap">©Taxi Strasbourg Service. Tous droit réservés.</p>
            <Link href="/legal/terms-of-use" className="underline lg:text-sm text-xs lg:text-right">Conditions général de vente.</Link>
            <Link href="/legal/mentions" className="underline lg:text-sm text-xs lg:text-right">Mention légales</Link>
        </section>
    </footer>
}