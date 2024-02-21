import Footer from "../users/elements/Footer";
import Navbar from "../users/elements/Navbar";

export default function PageLayout({ lang, changeLanguage, admin, page, children }: { lang: string, changeLanguage: Function, admin: boolean, page: string, children: any }) {
    return <main className="overflow-x-hidden flex flex-col min-h-screen relative">
        <Navbar lang={lang} changeLanguage={changeLanguage} page={page} admin={admin} />
        {
            children
        }
        <Footer lang={lang} changeLanguage={changeLanguage} />
    </main>
}