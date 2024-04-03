import AppContextProvider from "@/context/appContext";
import Footer from "../users/elements/Footer";
import Navbar from "../users/elements/Navbar";

export default function PageLayout({ admin, page, children }: { admin: boolean, page: string, children: any }) {
    return (
        <AppContextProvider>
            <main className="overflow-x-hidden flex flex-col min-h-screen relative">
                <Navbar page={page} admin={admin} />
                {
                    children
                }
                <Footer />
            </main>
        </AppContextProvider>
    )
}