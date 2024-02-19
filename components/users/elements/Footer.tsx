import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Data from '@/assets/data'
import Review from "@/components/common/Buttons/Review";
import Book from "@/components/common/Buttons/Book";
import PageJaune from "@/assets/pagejaunes.png"
import Link from "next/link";

export default function Footer({ lang, changeLanguage }: { lang: string, changeLanguage: Function }) {

    const compData = Data[lang]

    return <footer className="border-t-[1px] border-secondary-100 mx-10 py-10 flex justify-evenly text-white items-center lg:flex-row flex-col lg:gap-0 gap-10">
        <section className="flex-1 flex flex-col justify-center items-center gap-5">
            <select value={lang} onChange={e => changeLanguage(e.target.value)} className="bg-transparent outline-none w-fit uppercase text-white text-[18px]">
                <option value="fr" className="uppercase bg-[#000]">fr</option>
                <option value="en" className="uppercase bg-[#000]">en</option>
            </select>
            <Image width={1000} height={1000} src="/logo.png" alt="logo" draggable={false} className="h-[300px] object-cover" />
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
            <div className="flex flex-col gap-4">
                <p className="text-center text-white/[75%]"><strong className="text-white">Fixe:</strong> <a href="tel:0388835633">038883563</a></p>
                <p className="text-center text-white/[75%]"><strong className="text-white">Portable:</strong> <a href="tel:0647600171">0647600171</a></p>
                <p className="text-center text-white/[75%]"><strong className="text-white">Email:</strong> <a href="mailto:contact@strasbourgtaxi.fr">contact@strasbourgtaxi.fr</a></p>
            </div>
        </section>
        <section className="flex-1 flex items-center justify-center flex-col gap-3 italic">
            <p className="uppercase text-[20px] lg:text-[36px] whitespace-nowrap not-italic font-medium text-center">taxi strasbourg services</p>
            <p className="text-[#fff]/[70%] text-center">{compData.footer.sec1.p1}</p>
            <p className="text-[#fff]/[70%] text-center">{compData.footer.sec1.p2}</p>
            <p className="text-[#fff]/[70%] text-center">{compData.footer.sec1.p3}</p>
            <p className="text-[#fff]/[70%] text-center text-sm">Licence artisanale taxi rattaché à la Communauté Urbaine de Strasbourg</p>
            <p className="text-[#fff]/[70%] text-center text-sm">Sous le numéro de siret numéro - 83825994300010 et TVA  FR36838259943</p>
            <p className="text-[#fff]/[70%] text-center text-sm">©Taxi Strasbourg Service. Tous droit réservés.</p>
            <p className="text-[#fff]/[70%] text-center text-sm">Site hébergé par Namecheap</p>
        </section>
        <section className="w-full flex-1 text-[#000] flex flex-col items-center gap-5 border-t-[0.5px] border-secondary-100 pt-5 lg:pt-0 lg:border-[0px]">
            <Link href="/terms-of-use" className="text-white underline lg:text-[20px] font-medium">Conditions général de vente.</Link>
            <Review btn={compData.footer.btn1} />
            <Book btn={compData.footer.btn2} primary={false} />
            <p className="text-[#fff]/[70%] text-center text-xs">La Grille tarifaire préfecture.</p>
            <p className="text-[#fff]/[70%] text-center text-xs">Nous sommes équipés de TPE pour le paiement par Carte bancaire.</p>
            <p className="text-[#fff]/[70%] text-center text-xs">Forfait pour aéroport de Francfort 280C 350D, basel Mulhouse 235D 180C.Aéroport Strasbourg35c45D. </p>
            <p className="text-[#fff]/[70%] text-center text-xs">Gare Strasbourg - Strasbourg. 14c16D.</p>
        </section>
    </footer>
}