import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import Data from "@/assets/data";
import { useEffect, useState } from "react";

const animationVariants = {
    hidden: {
        scale: 0.1,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2,
        },
    },
};

const EditUser = ({ modalState, modalClose, text, lang, updateProfile, loading: savingData }: { modalState: boolean, modalClose: Function, text: string, lang: string, updateProfile: Function, loading: boolean }) => {

    const [userData, setUserData] = useState({ firstname: "", lastname: "", phonenumber: "", address: "" })
    const [loading, setLoading] = useState(true)

    const getUserData = async () => {
        try {
            const response = await fetch('/api/users')
            const result = await response.json()
            setUserData({ ...result })

        } catch (e) {
            console.error("Error: ", e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])


    const compData = Data[lang]

    return <div className={`w-full h-full bg-[#00000066] left-0 top-0 block z-30 fixed flex items-center justify-center overflow-auto  ${modalState ? "flex" : "hidden"}`}>
        <motion.div className={`z-[99] relative w-[90%] lg:w-[75%] px-[20px] pb-[20px] bg-white rounded-[5px] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5)] `} initial="hidden" animate={modalState ? "visible" : "hidden"} variants={animationVariants}>
            <div className="flex justify-between py-2">
                <span className={`text-2xl md:text-[28px] select-none font-bold !text-[#1C3454]`}>{text}</span>
                <a onClick={() => { modalClose(false) }} className="rounded-[50%] bg-[#fff] hover:bg-gray flex justify-center items-center">
                    <CloseIcon sx={{ fontSize: 40 }} className={`text-[#000] cursor-pointer`} />
                </a>
            </div>
            <form onSubmit={e => { e.preventDefault(); updateProfile(userData) }} className="mt-[20px] flex flex-col gap-3 justify-center items-center">
                <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-meduim">{compData.signup.label1}</label>
                        <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={userData?.firstname} placeholder={compData.login.placeholder1} onChange={(e) => setUserData({ ...userData, firstname: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-meduim">{compData.signup.label2}</label>
                        <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={userData?.lastname} placeholder={compData.signup.placeholder2} onChange={(e) => setUserData({ ...userData, lastname: e.target.value })} />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-meduim">{compData.signup.label3}</label>
                        <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={userData?.phonenumber} placeholder={compData.signup.placeholder3} onChange={(e) => setUserData({ ...userData, phonenumber: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-meduim">{compData.signup.label4}</label>
                        <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={userData?.address} placeholder={compData.signup.placeholder4} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
                    </div>
                </div>

                <input type="submit" value={compData.navbar.editBtn} className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[20px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
            </form>
            {
                loading && <div className="absolute top-0 left-0 bg-[#00000066] w-full h-full flex justify-center items-center">
                    <div className="text-white font-bold text-[30px]">CHARGEMENT DES DONNÉES---</div>
                </div>
            }

            {
                savingData && <div className="absolute top-0 left-0 bg-[#00000066] w-full h-full flex justify-center items-center">
                    <div className="text-white font-bold text-[30px]">Sauvegardement Des Données---</div>
                </div>
            }

        </motion.div>
    </div>
}

export default EditUser