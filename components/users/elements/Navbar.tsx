import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Data, { RightSideTabListType, TabListType } from '@/assets/data'
import Auth from "../modals/Auth";
import { signOut, useSession } from "next-auth/react";
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { userDataType } from "@/pages/api/auth/signup";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useOutsideAlerter } from "@/components/hook";
import EditUser from "../modals/EditUser";
import EditPassword from "../modals/EditPassword";
import Image from "next/image";
import UK from "@/assets/uk.png"
import France from "@/assets/france.png"
import { useAppContext } from "@/context/appContext";
import NavBarDesktopItem from "./NavbarDesktopItem";
import NavBarMobileItem from "./NavbarMobileItem";

type updatePasswordType = {
    oldPassword: string,
    newPassword: string,
    confirmationPassword: string
}

type updateUserData = {
    firstname: string,
    lastname: string,
    phonenumber: string,
    address: string,
}


export default function Navbar({ page, admin }: { page: string, admin: boolean }) {

    const { lang, changeLanguage } = useAppContext()

    const [toggleMenu, setToggleMenu] = useState(false)
    const [modalState, modalClose] = useState(false)
    const [userEditModal, setUserEditModal] = useState(false)
    const [userEditPassword, setUserEditPassword] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [option, setOption] = useState({ text: "", functionlity: "" })
    const [loading, setLoading] = useState(false)

    const compData = Data[lang]
    const ref: any = useRef();

    const handleOutSideClick = () => {
        setDropdown(false)
    }

    useOutsideAlerter(ref, handleOutSideClick)

    const { data: session, status } = useSession()

    const handleLogIn = async (e: any, formData: { email: string, password: string }, setFormData: Function) => {
        e.preventDefault();

        // need to check if the data needed is here
        if (formData.email === "" || formData.password === "") {
            toast.error(compData.signup.fillAllFields, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }

        try {
            setLoading(true)
            const res = await signIn('credentials', { ...formData, redirect: false })
            if (res?.error) {
                toast.error(compData.login.invalidCred, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
                return
            }

            toast.success(compData.login.success, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            location.reload()

        } catch (e) {
            console.log("Something bad has happend", e)
            toast.error("Invalid credentials", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        } finally {
            setLoading(false)
        }
    }

    const handleSignUp = async (e: any, formData: userDataType, setFormData: Function) => {
        e.preventDefault();

        // need to check if the data needed is here
        if (formData.firstname === "" || formData.lastname === "" || formData.email === "" || formData.password === "" || formData.phonenumber === "" || formData.address === "") {
            toast.error(compData.signup.fillAllFields, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }

        try {
            setLoading(true)
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                toast.success(compData.signup.success, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
                setFormData({ firstname: "", lastname: "", email: "", password: "", phonenumber: "", address: "" })
                setTimeout(() => {
                    modalClose(false)
                }, 1000);
            } else {
                const result = await response.json()
                toast.error(result.message || "Something happened", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
            }


        } catch (e: any) {
            console.log("An error has occured while signin up (front end): ", e.message)
            toast.error(e.message || "Something happened", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        } finally {
            setLoading(false)
        }

    }

    const updateProfile = async (userData: updateUserData) => {

        // need to check if the data needed is here
        if (userData.firstname === "" || userData.lastname === "" || userData.phonenumber === "" || userData.address === "") {
            toast.error(compData.signup.fillAllFields, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }
        try {
            setLoading(true)
            const response = await fetch('/api/users/editProfile', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            const result = await response.json()
            if (result.message === "success") {
                toast.success(compData.navbar.successEdit, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    setUserEditModal(false)
                }, 1000);
            } else {
                toast.error(result.message || "Something happened", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
            }
        } catch (e: any) {
            toast.error(e.message || "Something happened", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        } finally {
            setLoading(false)
        }
    }

    const updatePassword = async (passwordData: updatePasswordType) => {
        // need to check if the data needed is here
        if (passwordData.oldPassword === "" || passwordData.newPassword === "" || passwordData.confirmationPassword === "") {
            toast.error(compData.signup.fillAllFields, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }

        // need to check if the passwords inputed match
        if (passwordData.newPassword !== passwordData.confirmationPassword) {
            toast.error(compData.resetPassword.errorMessage, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }

        try {
            setLoading(true)
            const response = await fetch('/api/users/editPassword', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(passwordData)
            })

            const result = await response.json()
            if (result.message === "success") {
                toast.success(compData.resetPassword.success, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    setUserEditPassword(false)
                }, 1000);
            } else {
                toast.error(result.message || "Something happened", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
            }
        } catch (e: any) {
            toast.error(e.message || "Something happened", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        } finally {
            setLoading(false)
        }
    }


    return <nav className="relative lg:h-auto h-15">
        <section className="relative z-[8] flex border-b flex-col h-full justify-between section">
            <section className="hero h-[60px] items-center italic pr-10 pl-20 justify-between lg:flex hidden">
                <div className="h-full flex items-center gap-5">
                    {
                        compData.navbar.tabList?.map((item: TabListType, key: number) => {
                            if (item?.url === "/book" && admin) return
                            return (
                                <NavBarDesktopItem key={key} page={page} item={item} />
                            )
                        })
                    }
                </div>
                <div className="flex items-center gap-5">
                    <Image draggable={false} alt="UK" onClick={() => changeLanguage("en")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "en" ? "" : "border-transparent"}`} src={UK} />
                    <Image draggable={false} alt="France" onClick={() => changeLanguage("fr")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "fr" ? "" : "border-transparent"}`} src={France} />
                </div>
                <div className="flex gap-10">
                    {
                        status === "loading" ? <></> : !session?.user?.email ?
                            compData.navbar.rightSideTabList?.map((item: RightSideTabListType, idx: number) => <p key={idx} className="hover:underline cursor-pointer not-italic whitespace-nowrap" onClick={() => { modalClose(true); setOption(item) }}>{item?.text}</p>)
                            : <div className="relative" ref={ref}>
                                <div className="flex items-center gap-1 justify-center cursor-pointer whitespace-nowrap" onClick={() => { setDropdown(!dropdown) }}>
                                    <p className="" >{session?.user?.email}</p>
                                    <ArrowDropDownIcon className="" />
                                </div>
                                <div className={`absolute ${dropdown ? "flex" : "hidden"} flex-col top-[100%] bg-[#33475A] text-white right-0 w-full text-[14px] p-2 gap-2`}>
                                    {admin ? <Link prefetch={false} href="/admin" className="hover:underline">Dashboard</Link> : <>
                                        <p onClick={() => setUserEditModal(true)} className="hover:underline cursor-pointer" >{compData.navbar.edit}</p>
                                        <p onClick={() => setUserEditPassword(true)} className="hover:underline cursor-pointer" >{compData.navbar.editPassword}</p>
                                    </>}
                                    <p className="hover:underline cursor-pointer" onClick={() => signOut()}>{compData.navbar.logout}</p>
                                </div>
                            </div>
                    }
                </div>
            </section>
            <section className="lg:hidden flex h-15 bg-[#33475A] justify-evenly items-center px-2">
                <p className="text-white uppercase font-medium italic flex-1 text-sm">Taxi Strasbourg</p>
                <div className="flex items-center gap-5 flex-1">
                    <Image draggable={false} alt="UK" onClick={() => changeLanguage("en")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "en" ? "" : "border-transparent"}`} src={UK} />
                    <Image draggable={false} alt="France" onClick={() => changeLanguage("fr")} className={`cursor-pointer border-b-[1px]  pb-1 box-border box-content w-6 h-6 ${lang === "fr" ? "" : "border-transparent"}`} src={France} />
                </div>
                <div className="">
                    {
                        toggleMenu ? <CloseIcon onClick={() => setToggleMenu(!toggleMenu)} sx={{ fontSize: 35 }} className={`rounded-[50%] bg-[#fff] text-[#000] p-2 my-2 cursor-pointer`} /> : <MenuIcon onClick={() => setToggleMenu(!toggleMenu)} sx={{ fontSize: 35 }} className={`rounded-[50%] bg-[#fff] text-[#000] p-2 my-2 cursor-pointer`} />
                    }
                </div>
            </section>
        </section>
        <div className={`${!toggleMenu ? "hidden" : "flex"} absolute left-0 font-semibold mobile-navtab pb-10 top-[100%] z-[5] bg-[#33475A] w-full flex-col`}>
            <div className="h-full flex flex-col justify-center items-center w-full border-b-[1px] pb-4 border-[#000] text-[18px]">
                {
                    compData.navbar.tabList?.map((item: TabListType, key: number) => <NavBarMobileItem key={key} item={item} page={page} admin={admin} />)
                }
            </div>
            <div className="flex flex-col justify-center items-center gap-5 py-4">
                {
                    status === "loading" ? <></> : !session?.user?.email ?
                        compData.navbar.rightSideTabList?.map((item: RightSideTabListType, idx: number) => <p onClick={() => { modalClose(true); setOption(item) }} key={idx} className="border-[1px] border-secondary-100 rounded-xl w-[90%] h-10 flex items-center px-2 justify-center hover:underline cursor-pointer">{item?.text}</p>) : <>
                            <p className="">{session?.user?.email}</p>
                            {
                                admin ? <Link prefetch={false} href="/admin" className="border-[1px] border-secondary-100 rounded-xl w-[90%] h-10 flex items-center justify-center hover:underline cursor-pointer">Dashboard</Link> : <>
                                    <p onClick={() => setUserEditModal(true)} className="border-[1px] border-secondary-100 rounded-xl w-[90%] h-10 flex items-center justify-center hover:underline cursor-pointer underline" >{compData.navbar.edit}</p>
                                    <p onClick={() => setUserEditPassword(true)} className="underline border-[1px] border-secondary-100 rounded-xl w-[90%] h-10 flex items-center justify-center hover:underline cursor-pointer" >{compData.navbar.editPassword}</p>
                                </>
                            }

                            <p className="underline border-[1px] border-secondary-100 rounded-xl w-[90%] h-10 flex items-center justify-center hover:underline cursor-pointer" onClick={() => signOut()}>{compData.navbar.logout}</p>
                        </>
                }
            </div>
        </div>
        {
            modalState && <Auth loading={loading} modalState={modalState} modalClose={modalClose} option={option} lang={lang} handleLogIn={handleLogIn} handleSignUp={handleSignUp} />
        }
        {
            userEditModal && <EditUser loading={loading} modalState={userEditModal} modalClose={setUserEditModal} text={compData.navbar.edit} lang={lang} updateProfile={updateProfile} />
        }
        {
            userEditPassword && <EditPassword loading={loading} modalState={userEditPassword} modalClose={setUserEditPassword} lang={lang} updatePassword={updatePassword} />
        }
    </nav>
}