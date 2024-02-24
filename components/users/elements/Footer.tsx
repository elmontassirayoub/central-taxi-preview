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

    return <footer className="bg-black pt-10 text-white flex flex-col gap-20">
        <section className="flex justify-evenly px-10 lg:flex-row flex-col items-center lg:gap-0 gap-10">
            <div className="flex-1 flex flex-col justify-center items-center gap-5 lg:w-fit w-full">
                <div className="hidden lg:flex items-center gap-5">
                    <Image draggable={false} alt="UK" onClick={() => changeLanguage("en")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "en" ? "" : "border-transparent"}`} src={UK} />
                    <Image draggable={false} alt="France" onClick={() => changeLanguage("fr")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "fr" ? "" : "border-transparent"}`} src={France} />
                </div>
                <Image width={1000} height={1000} src="/logo.png" alt="logo" draggable={false} className="h-[300px] object-cover hidden lg:block" />
                <div className="flex flex-col gap-4 items-start lg:w-fit w-full">
                <div className="flex gap-4 items-center">
                    <a href="https://www.facebook.com/profile.php?id=61555122177541" target="_blank">
                        <FacebookIcon className="" />
                    </a>
                    <a href="https://www.instagram.com/contact.central.taxi67/?igsh=a3JhbGRremdvcXhr&utm_source=qr" target="_blank">
                        <InstagramIcon className="" />
                    </a>
                    <a href="https://www.pagesjaunes.fr/pros/58802089" target="_blank">
                        <Image src={PageJaune} alt="" width={20} height={20} className="" />
                    </a>
                </div>
                    <p className="text-center text-white/[75%] flex items-center gap-1"><strong className="text-white text-sm lg:text-base"><Image src={Fix} alt="Fix" className="w-6 h-6 text-white" /></strong> <a href="tel:0388835633">038883563</a></p>
                    <p className="text-center text-white/[75%] flex items-center gap-1"><strong className="text-white text-sm lg:text-base"><PhoneAndroidIcon /></strong> <a href="tel:0647600171">0647600171</a></p>
                    <p className="text-center text-white/[75%]"><strong className="text-white text-sm lg:text-base"><AlternateEmailIcon /></strong> <a href="mailto:contact@strasbourgtaxi.fr">contact@strasbourgtaxi.fr</a></p>
                </div>
            </div>
            <div className="flex-1 flex lg:items-center justify-center flex-col gap-3 italic">
                <p className="uppercase text-base lg:text-[24px] whitespace-nowrap not-italic font-medium text-center">taxi strasbourg service</p>
                <p className="text-[#fff]/[70%] lg:text-center text-xs lg:text-sm">{compData.footer.sec1.p1}</p>
                <p className="text-[#fff]/[70%] lg:text-center text-xs lg:text-sm">{compData.footer.sec1.p2}</p>
                <p className="text-[#fff]/[70%] lg:text-center text-left text-xs lg:text-sm">{compData.footer.sec1.p3}</p>
                <p className="text-[#fff]/[70%] lg:text-center text-xs lg:text-sm">Licence artisanale taxi rattaché à la Communauté Urbaine de Strasbourg</p>
                <p className="text-[#fff]/[70%] lg:text-center text-xs lg:text-sm">Sous le numéro de siret numéro - 83825994300010 et TVA  FR36838259943</p>
            </div>
            <div className="w-full flex-1 text-[#000] flex flex-col lg:items-center gap-5 border-t-[0.5px] border-secondary-100 pt-5 lg:pt-0 lg:border-[0px]">
                <Review btn={compData.footer.btn1} />
                <Book btn={compData.footer.btn2} primary={false} />
                <p className="text-[#fff]/[70%] lg:text-center text-xs">La Grille tarifaire préfecture.</p>
                <p className="text-[#fff]/[70%] lg:text-center text-xs">Nous sommes équipés de TPE pour le paiement par Carte bancaire.</p>
            </div>
        </section>
        <section className="min-h-10 bg-[#000] px-10 py-2 lg:py-0    flex lg:items-center flex-col lg:flex-row gap-2 lg:gap-5">
            <p className="text-[#fff]/[70%] text-sm">©Taxi Strasbourg Service. Tous droit réservés.</p>
            <Link href="/legal/terms-of-use" className="underline lg:text-sm text-xs">Conditions général de vente.</Link>
        </section>
    </footer>
}