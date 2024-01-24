import { ReactElement } from "react";
import Sidebar from "./elements/Sidebar";

export default function AdminPageLayout({page, children}: {page: string, children: ReactElement}) {
    return <main className="flex w-screen lg:h-screen lg:flex-row flex-col overflow-hidden">
    <Sidebar page={page} />
    <section className="lg:p-[60px] p-[30px] flex-1 max-w-full overflow-y-scroll overflow-x-hidden">
        {children}
    </section>
  </main>   
}