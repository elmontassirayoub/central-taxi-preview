import Data from '@/assets/data'
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Signup({ lang }: { lang: string }) {

    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", phonenumber: "", address: "" })

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // need to check if the data needed is here
        if(formData.firstname === "" || formData.lastname === "" || formData.email === "" || formData.password === "" || formData.phonenumber === "" || formData.address === "") {
            toast.error("Please Fill all necessary fields", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                toast.success("Data saved successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
                setFormData({firstname: "", lastname: "", email: "", password: "", phonenumber: "", address: ""})
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
        }

    }

    const compData = Data[lang]

    return <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
            <div className="flex flex-col gap-2 w-full">
                <label className="text-[20px] font-semibold">{compData.signup.label1}</label>
                <input className="border-[1px] border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.firstname} placeholder={compData.login.placeholder1} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label className="text-[20px] font-semibold">{compData.signup.label2}</label>
                <input className="border-[1px] border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.lastname} placeholder={compData.signup.placeholder2} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
            <div className="flex flex-col gap-2 w-full">
                <label className="text-[20px] font-semibold">{compData.signup.label3}</label>
                <input className="border-[1px] border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.phonenumber} placeholder={compData.signup.placeholder3} onChange={(e) => setFormData({ ...formData, phonenumber: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label className="text-[20px] font-semibold">{compData.signup.label4}</label>
                <input className="border-[1px] border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={formData?.address} placeholder={compData.signup.placeholder4} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-3 w-[90%]">
            <div className="flex flex-col gap-2 w-full">
                <label className="text-[20px] font-semibold">{compData.signup.label5}</label>
                <input className="border-[1px] border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="email" value={formData?.email} placeholder={compData.signup.placeholder5} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label className="text-[20px] font-semibold">{compData.signup.label6}</label>
                <input className="border-[1px] border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="password" value={formData?.password} placeholder={compData.signup.placeholder6} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>
        </div>

        <input type="submit" value={compData.signup.btn} className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[20px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </form>
}