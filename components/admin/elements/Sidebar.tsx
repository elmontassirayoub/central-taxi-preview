import Link from "next/link"
import Logo from '@/assets/logo.png'
import Image from "next/image"
import { signOut } from "next-auth/react";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const options = [
    {
        item: "dashboard",
        url: "/admin"
    },
    {
        item: "utilisateurs",
        url: "/admin/users"
    },
    {
        item: "Avis",
        url: "/admin/reviews"
    },
    {
        item: "Siteweb",
        url: "/"
    }
]

export default function Sidebar({ page }: { page: string }) {

    const selectedOption = options.find(option => option.url === page)
    const [toggleMenu, setToggleMenu] = useState(false)

    return <section className="h-full bg-[#33475A] text-white lg:pt-5 lg:pb-1 flex flex-col relative">
        <Link className="lg:block hidden" href="/" >
            <Image src={Logo} alt="logo" draggable={false} className="w-[125px] lg:w-[200px] lg:px-5" />
        </Link>
        <div className="hidden lg:flex flex-col my-10 flex-1">
            {
                options?.map((option: { item: string, url: string }, idx) => <Link href={option?.url} className={`capitalize font-semibold lg:text-[20px] px-7 py-4 ${page === option.url ? "bg-[#FFDC00]" : "hover:text-[#FFDC00]"}`}>
                    {option?.item}
                </Link>)
            }
        </div>
        <p className="hidden lg:block hover:underline cursor-pointer lg:text-[20px] px-7 py-4 font-semibold" onClick={() => signOut()}>Se déconnecter</p>
        <div className="lg:hidden flex justify-between p-2 bg-[#33475A] z-[8] h-[60px] items-center w-full">
            <p className="font-semibold capitalize text-[18px]">{selectedOption?.item}</p>
            <MenuIcon onClick={() => setToggleMenu(!toggleMenu)} sx={{ fontSize: 35 }} className={`${toggleMenu ? "hidden" : "block"} rounded-[50%] bg-[#fff] text-[#000] p-2 my-2 cursor-pointer`} />
            <CloseIcon onClick={() => setToggleMenu(!toggleMenu)} sx={{ fontSize: 35 }} className={`${!toggleMenu ? "hidden" : "block"} rounded-[50%] bg-[#fff] text-[#000] p-2 my-2 cursor-pointer`} />
        </div>
        <div className={`${!toggleMenu ? "hidden" : "flex"} absolute left-0 font-semibold mobile-navtab top-[100%] z-[5] bg-[#33475A] w-full py-4 flex-col`}>
            <div className="h-full flex flex-col justify-center items-center gap-5 w-full border-b-[1px] pb-4 border-[#000]">
                {
                    options?.filter(option => option?.url !== page)?.map((option: {url: string, item: string}, key: number) => {
                    return <Link className={`capitalize py-1 w-full text-center`} href={option?.url} key={key}>{option?.item}</Link>})
                }
            </div>
            <p className="underline text-center lg:text-[20px] px-7 py-4 font-semibold" onClick={() => signOut()}>Se déconnecter</p>
        </div>
    </section>
}