import Image from "next/image";
import Logo from '@/assets/logo.svg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Data, { RightSideTabListType, TabListType } from '@/assets/data'

export default function Navbar({lang, changeLanguage} : {lang: string, changeLanguage: Function}) {

    const [toggleMenu, setToggleMenu] = useState(false)

    const compData = Data[lang]



    return <nav className="relative">
        <section className="relative z-[8]">
            <section className="flex bg-white justify-between px-3 lg:px-10 pt-3 lg:pb-0 pb-2 items-center">
                <Image src={Logo} alt="logo" draggable={false} className="w-[125px] lg:w-[250px]" />
                <div className="text-[18px] lg:text-[25px] text-[#33475A] flex justify-between gap-2 lg:gap-10 h-full flex-col lg:flex-row">
                    <a href="" className="flex items-center justify-end gap-1 lg:gap-2 h-full">
                        <p>06 47 60 01 71</p>
                        <LocalPhoneIcon className="text-[#fff] bg-[#33475A] rounded-[50%] p-1" />
                    </a>
                    <a href="" className="flex lg:text-[25px] text-[14px] items-center justify-end gap-1 lg:gap-2 h-full">
                        <p>contact.central.taxi67@gmail.com</p>
                        <EmailIcon className="text-[#fff] bg-[#33475A] rounded-[50%] p-1" />
                    </a>
                </div>
            </section>
            <section className="bg-[#33475A] h-[60px] text-white items-center text-[18px] font-semibold px-10 justify-between lg:flex hidden">
                <div className="h-full flex items-center gap-10">
                    {
                        compData.navbar.tabList?.map((item: TabListType, key: number) => <Link className="uppercase hover:underline" href="" key={key}>{item?.name}</Link>)
                    }
                </div>
                <div className="flex gap-10">
                    {
                        compData.navbar.rightSideTabList?.map((item: RightSideTabListType, idx: number) => <p key={idx} className="hover:underline cursor-pointer">{item?.text}</p>)
                    }
                    <select value={lang} onChange={e => changeLanguage(e.target.value)} className="bg-transparent outline-none uppercase cursor-pointer">
                        <option value="fr" className="uppercase bg-[#33475A]">fr</option>
                        <option value="en" className="uppercase bg-[#33475A]">en</option>
                    </select>
                </div>
            </section>
            <section className="lg:hidden flex h-[40px] bg-[#33475A] justify-center items-center">
                <MenuIcon onClick={() => setToggleMenu(!toggleMenu)} sx={{ fontSize: 35 }} className={`${toggleMenu ? "hidden" : "block"} rounded-[50%] bg-[#fff] text-[#000] p-2 my-2 cursor-pointer`} />
                <CloseIcon onClick={() => setToggleMenu(!toggleMenu)} sx={{ fontSize: 35 }} className={`${!toggleMenu ? "hidden" : "block"} rounded-[50%] bg-[#fff] text-[#000] p-2 my-2 cursor-pointer`} />
            </section>
        </section>
        <div className={`${!toggleMenu ? "hidden" : "flex"} absolute left-0 font-semibold mobile-navtab top-[100%] z-[5] bg-[#fff] w-full py-4 flex-col`}>
            <div className="h-full flex flex-col justify-center items-center gap-5 w-full border-b-[1px] pb-4 border-[#000] text-[18px]">
                {
                    compData.navbar.tabList?.map((item: TabListType, key: number) => <Link className="uppercase" href="" key={key}>{item?.name}</Link>)
                }
            </div>
            <div className="flex flex-col justify-center items-center gap-5 pt-4">
                {
                    compData.navbar.rightSideTabList?.map((item: RightSideTabListType, idx: number) => <p key={idx} className="hover:underline cursor-pointer">{item?.text}</p>)
                }
                <select value={lang} onChange={e => changeLanguage(e.target.value)} className=" outline-none uppercase">
                    <option value="fr" className="uppercase">fr</option>
                    <option value="en" className="uppercase">en</option>
                </select>
            </div>
        </div>
    </nav>
}