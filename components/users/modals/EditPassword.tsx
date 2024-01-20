import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import Data from "@/assets/data";
import { useState } from "react";

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

export default function EditPassword({ modalState, modalClose, lang, updatePassword, loading }: { modalState: boolean, modalClose: Function, lang: string, updatePassword: Function, loading: boolean }) {

    const compData = Data[lang]
    const [passwordData, setPasswordData] = useState({ oldPassword: "", newPassword: "", confirmationPassword: "" })
    const [passwordShow, setPasswordShow] = useState({ old: false, new: false, confirmation: false })


    return <div className={`w-full h-full bg-[#00000066] left-0 top-0 block z-30 fixed flex items-center justify-center overflow-auto  ${modalState ? "flex" : "hidden"}`}>
        <motion.div className={`z-[99] relative w-[90%] lg:w-[50%] px-[20px] pb-[20px] bg-white rounded-[5px] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5)] `} initial="hidden" animate={modalState ? "visible" : "hidden"} variants={animationVariants}>
            <div className="flex justify-between py-2">
                <span className={`text-2xl md:text-[28px] select-none font-bold !text-[#1C3454]`}>{compData.navbar.editPassword}</span>
                <a onClick={() => { modalClose(false) }} className="rounded-[50%] bg-[#fff] hover:bg-gray flex justify-center items-center">
                    <CloseIcon sx={{ fontSize: 40 }} className={`text-[#000] cursor-pointer`} />
                </a>
            </div>
            <form onSubmit={e => { e.preventDefault(); updatePassword(passwordData) }} className="mt-[20px] flex flex-col gap-3 justify-center items-center">
                <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex lg:flex-row flex-col w-full justify-between">
                            <label className="font-meduim">{compData.resetPassword.label1}</label>
                            <div className="flex gap-1 items-center">
                                <label className="lg:text-[16px] text-[12px] lg:font-meduim">{compData.resetPassword.label4}</label>
                                <input type="checkbox" checked={passwordShow.old} onChange={e => setPasswordShow({ ...passwordShow, old: !passwordShow.old })} />
                            </div>
                        </div>
                        <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type={passwordShow.old ? "text" : "password"} value={passwordData.oldPassword} placeholder={compData.resetPassword.placeholder1} onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })} />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex lg:flex-row flex-col w-full justify-between">
                            <label className="font-meduim">{compData.resetPassword.label2}</label>
                            <div className="flex gap-1 items-center">
                                <label className="lg:text-[16px] text-[12px] lg:font-meduim">{compData.resetPassword.label4}</label>
                                <input type="checkbox" checked={passwordShow.new} onChange={e => setPasswordShow({ ...passwordShow, new: !passwordShow.new })} />
                            </div>
                        </div>
                        <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type={passwordShow.new ? "text" : "password"} value={passwordData.newPassword} placeholder={compData.resetPassword.placeholder2} onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex lg:flex-row flex-col w-full justify-between">
                            <label className="font-meduim">{compData.resetPassword.label3}</label>
                            <div className="flex gap-1 items-center">
                                <label className="lg:text-[16px] text-[12px] lg:font-meduim">{compData.resetPassword.label4}</label>
                                <input type="checkbox" checked={passwordShow.confirmation} onChange={e => setPasswordShow({ ...passwordShow, confirmation: !passwordShow.confirmation })} />
                            </div>
                        </div>
                        <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type={passwordShow.confirmation ? "text" : "password"} value={passwordData.confirmationPassword} placeholder={compData.resetPassword.placeholder3} onChange={(e) => setPasswordData({ ...passwordData, confirmationPassword: e.target.value })} />
                    </div>
                </div>
                <input type="submit" value={compData.navbar.editBtn} className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[20px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
            </form>
            {
                loading && <div className="absolute top-0 left-0 bg-[#00000066] w-full h-full flex justify-center items-center">
                    <div className="text-white font-bold text-[30px]">Sauvegardement Des Données---</div>
                </div>
            }
        </motion.div>
    </div>
}