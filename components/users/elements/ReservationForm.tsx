import { LangType } from "@/assets/data"
import { ReservationData } from "@/pages/book"
import { useEffect, useState } from "react"

export default function ReservationForm({ setShowReservationForm, reservationData, setReservationData, compData, loading, setLoading }: { setShowReservationForm: Function, reservationData: ReservationData, setReservationData: Function, compData: LangType, loading: {show: boolean, message: string}, setLoading: Function }) {


    const getData = async () => {
        setLoading({show: true, message: "Loading Data"})
        try {
            const response = await fetch("/api/users?reservation=true")
            const results = await response.json()
            if(response.status === 200) setReservationData(results)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading({show: false, message: ""})
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return <>
        <div className="w-full flex justify-between font-bold">
            <button onClick={() => setShowReservationForm(false)} className="underline">{compData.book.bookingForm.back}</button>
            <h1 className="">Reservation</h1>
        </div>
        <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-1 w-full">
                <label className="font-bold">{compData.signup.label1}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={reservationData?.firstname} placeholder={compData.login.placeholder1} onChange={(e) => setReservationData({ ...reservationData, firstname: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="font-bold text-[14px]">{compData.signup.label2}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={reservationData?.lastname} placeholder={compData.signup.placeholder2} onChange={(e) => setReservationData({ ...reservationData, lastname: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="font-bold text-[14px]">{compData.signup.label3}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={reservationData?.phonenumber} placeholder={compData.signup.placeholder3} onChange={(e) => setReservationData({ ...reservationData, phonenumber: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="font-bold text-[14px]">{compData.signup.label4}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="text" value={reservationData?.address} placeholder={compData.signup.placeholder4} onChange={(e) => setReservationData({ ...reservationData, address: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="font-bold text-[14px]">{compData.signup.label5}</label>
                <input className="border-[1px] focus:border-[#33475A] outline-0 w-full h-[40px] px-2 rounded-[3px]" type="email" value={reservationData?.email} placeholder={compData.signup.placeholder5} onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="font-bold text-[14px]">Message</label>
                <textarea className="border-[1px] focus:border-[#33475A] outline-0 w-full px-2 rounded-[3px]" value={reservationData?.message} placeholder="Un message pour nous" onChange={(e) => setReservationData({ ...reservationData, message: e.target.value })} rows={6} />
            </div>
        </div>
        <input type="submit" value={compData.book.bookingForm.btn} className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[18px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </>
}