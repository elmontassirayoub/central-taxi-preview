import AppContextProvider from "@/context/appContext";
import Footer from "../users/elements/Footer";
import Navbar from "../users/elements/Navbar";
import FloatingContactButtons from "../users/elements/FloatingContactButtons";

export default function PageLayout({ admin, page, children }: { admin: boolean, page: string, children: any }) {
    return (
        <AppContextProvider>
            <main className="overflow-x-hidden flex flex-col min-h-screen relative w-full pb-14 sm:pb-0">
                <Navbar page={page} admin={admin} />
                {children}
                <Footer />
                <FloatingContactButtons />
            </main>
        </AppContextProvider>
    )
}