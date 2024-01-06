import Data from '@/assets/data'
import { useState } from 'react';

export default function Signup({ lang, handleSignUp }: { lang: string, handleSignUp: Function }) {

    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", phonenumber: "", address: "" })
    const [showPassword, setShowPassword] = useState(false)


    const compData = Data[lang]

    return <form onSubmit={e => handleSignUp(e, formData, setFormData)} className="w-full flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
            <div className="flex flex-col gap-1 w-full">
                <label className="font-meduim">{compData.signup.label1}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.firstname} placeholder={compData.login.placeholder1} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="font-meduim">{compData.signup.label2}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.lastname} placeholder={compData.signup.placeholder2} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
            <div className="flex flex-col gap-1 w-full">
                <label className="font-meduim">{compData.signup.label3}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.phonenumber} placeholder={compData.signup.placeholder3} onChange={(e) => setFormData({ ...formData, phonenumber: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="font-meduim">{compData.signup.label4}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.address} placeholder={compData.signup.placeholder4} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
            <div className="flex flex-col gap-1 w-full">
                <label className="font-meduim">{compData.signup.label5}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="email" value={formData?.email} placeholder={compData.signup.placeholder5} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
            <div className="flex flex-col gap-1 w-full">
                <div className="flex lg:flex-row flex-col w-full justify-between">
                    <label className="font-meduim">{compData.signup.label6}</label>
                    <div className="flex gap-1 items-center">
                        <label className="lg:text-[16px] text-[12px] lg:font-meduim">{compData.signup.label7}</label>
                        <input type="checkbox" checked={showPassword} onChange={e => setShowPassword(!showPassword)} />
                    </div>
                </div>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type={showPassword ? "text" : "password"} value={formData?.password} placeholder={compData.signup.placeholder6} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>
        </div>

        <input type="submit" value={compData.signup.btn} className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[20px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </form>
}