import Data from '@/assets/data'
import { useState } from 'react';

export default function Login({ lang, handleLogIn }: { lang: string, handleLogIn: Function }) {

    const [formData, setFormData] = useState({ email: "", password: "" })


    const compData = Data[lang]

    return <form onSubmit={(e) => handleLogIn(e, formData, setFormData)} className="w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-2 w-full lg:w-[70%]">
            <label className="font-meduim">{compData.login.label1}</label>
            <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.email} placeholder={compData.login.placeholder1} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="flex flex-col gap-2  w-full lg:w-[70%]">
            <label className="font-meduim">{compData.login.label2}</label>
            <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="password" value={formData?.password} placeholder={compData.login.placeholder2} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <input type="submit" value={compData.login.btn} className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[20px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </form>
}