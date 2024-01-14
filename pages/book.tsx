import Navbar from "@/components/users/elements/Navbar";
import { useEffect, useRef, useState } from "react";
import RateReviewIcon from '@mui/icons-material/RateReview';
import Data from "@/assets/data";
import LocationInput from "@/components/users/elements/LocationInput";
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Footer from "@/components/users/elements/Footer";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { getPrice } from "@/utils/booking";
import Loader from "@/components/common/Loader";
import dynamic from 'next/dynamic'

const DirectionMap = dynamic(() => import("@/components/users/elements/DirectionMap"), {
    ssr: false
})

type ReservationDetailsType = {
    price: number,
    distance: { text: string, value: number },
    duration: { text: string, value: number }
}

type CoordinationType = {
    lat: number,
    lng: number
}

export default function Book({ }) {

    const date = new Date();
    const mm =
        date.getMonth() + 1 >= 10
            ? date.getMonth() + 1
            : '0' + String(date.getMonth() + 1);
    const dd = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
    const yyyy = date.getFullYear();

    const [lang, setLang] = useState("fr")
    const [departAddress, setDepartAddress] = useState("")
    const [arriveAddress, setArriveAddress] = useState("")
    const localTime = date.toLocaleTimeString().split(':')
    const [time, setTime] = useState(localTime.splice(0, 2).join(':'));
    const [day, setDay] = useState(yyyy + '-' + mm + '-' + dd);
    const [departPlaceId, setDepartPlaceId] = useState('');
    const [arrivePlaceId, setArrivePlaceId] = useState('');
    const [departcoordinates, setDepartCoordinates] = useState<CoordinationType | null>(null)
    const [arrivecoordinates, setArriveCoordinates] = useState<CoordinationType | null>(null)
    const [reservationDetails, setReservationDetails] = useState<ReservationDetailsType | null>(null)
    const [loading, setLoading] = useState({ show: false, message: "" })
    const [editingData, setEditingData] = useState(false)

    useEffect(() => {
        const storedLang = localStorage.getItem("lang")
        if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])


    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
    }

    const departRef = useRef<HTMLInputElement | null>(null);
    const arriveRef = useRef<HTMLInputElement | null>(null);
    const inputRefDate = useRef<HTMLInputElement | null>(null);
    const inputRefTime = useRef<HTMLInputElement | null>(null);

    const handleSelect = async (address: string, placeID: string, { setValue, setPlaceId, setCoordination }: { setValue: Function, setPlaceId: Function, setCoordination: Function }) => {

        if(!editingData) setEditingData(true)
        setPlaceId(placeID);
        setValue(address)

        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0])
        setCoordination(latLng)

    }

    const pageData = Data[lang]

    const handleEstimation = async () => {
        setLoading({ show: true, message: pageData.book.form.loadingEstimation })
        try {
            const response = await fetch("/api/users/distance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ depart: departPlaceId, arrive: arrivePlaceId })
            })
            const result = await response.json()
            const price = parseFloat(getPrice(result.distance, day, time)) + 6.5
            setReservationDetails({ price: price, distance: result.distance, duration: result.duration })
        } catch (e) {
            console.log("Error: ", e)
        } finally {
            setLoading({ show: false, message: "" })
            setEditingData(false)
        }
    }



    const { form: { title, fromLabel, fromPlaceholder, toLabel, toPlaceholder, dateLabel, timeLabel, btn }, rightSide } = pageData.book

    return <main className="">
        <Navbar lang={lang} changeLanguage={changeLanguage} page="/book" />
        <div className="w-full hero-book flex flex-col lg:flex-row lg:p-10 py-10 px-4 gap-10 lg:justify-center items-center mb-20 relative">
            <form onSubmit={(e) => { e.preventDefault(); handleEstimation() }} className="w-full lg:w-fit bg-white rounded-[15px] lg:p-10 py-10 px-4 flex flex-col gap-5">
                <h1 className="text-[#33475A] text-center font-bold text-[24px]">{title}</h1>
                <LocationInput label={fromLabel} placeholder={fromPlaceholder} value={departAddress} setValue={setDepartAddress} handleSelect={(a, p) => handleSelect(a, p, { setValue: setDepartAddress, setPlaceId: setDepartPlaceId, setCoordination: setDepartCoordinates })} inputRef={departRef} />
                <LocationInput label={toLabel} placeholder={toPlaceholder} value={arriveAddress} setValue={setArriveAddress} handleSelect={(a, p) => handleSelect(a, p, { setValue: setArriveAddress, setPlaceId: setArrivePlaceId, setCoordination: setArriveCoordinates })} inputRef={arriveRef} />
                <div className="reserveform1_date div_container">
                    <p className="font-bold mb-2" onClick={() => inputRefDate.current?.focus()}>{dateLabel}</p>
                    <div className="flex">
                        <div className="border-[1px] border-r-[0px] h-10 rounded-l-[5px] px-2 flex items-center">
                            <DateRangeIcon onClick={() => inputRefDate.current?.focus()} className="" />
                        </div>
                        <input
                            className="w-full border-[1px] h-10 rounded-[5px] rounded-l-[0px] outline-0 focus:border-[#33475A] px-1"
                            min={date.toISOString().split('T')[0]}
                            type="date"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            ref={inputRefDate}
                        />
                    </div>
                </div>
                <div className="reserveform1_date reserveform1_time div_container">
                    <p className="font-bold mb-2" onClick={() => inputRefTime.current?.focus()}>{timeLabel}</p>
                    <div className="flex">
                        <div className="border-[1px] border-r-[0px] h-10 rounded-l-[5px] px-2 flex items-center">
                            <AccessTimeIcon className="" onClick={() => inputRefTime.current?.focus()} />
                        </div>
                        <input
                            className="w-full border-[1px] h-10 rounded-[5px] rounded-l-[0px] outline-0 focus:border-[#33475A] px-1"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            ref={inputRefTime}
                        />
                    </div>
                </div>
                {
                    (reservationDetails && !editingData) ? <button className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[18px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    >
                        {pageData?.home?.hero?.btn}: €{reservationDetails?.price}
                    </button> : <input
                        type="submit"
                        value={btn}
                        className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[18px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    />
                }

            </form>

            <div className="hidden lg:flex flex-col gap-3">
                {
                    reservationDetails ? <div className="bg-white rounded-[15px] lg:p-10 py-10 px-4 flex flex-col gap-5 max-w-[500px] justify-center items-center">
                        <h1 className="font-bold">Details</h1>
                        {
                            (departcoordinates !== null && arrivecoordinates !== null) && <DirectionMap depart={departcoordinates} arrive={arrivecoordinates} />
                        }
                        <div className="">
                            <p><strong>Starting address: </strong>{departAddress}</p>
                            <p><strong>Arrival address: </strong>{arriveAddress}</p>
                            <p><strong>Date and time: </strong>{day} {time}</p>
                            <p><strong>Travel time: </strong>{editingData ? "A calculer" : reservationDetails?.duration?.text}</p>
                            <p><strong>Distance: </strong>{editingData ? "A calculer" : `${(reservationDetails?.distance?.value / 1000).toFixed(2)} km`}</p>
                        </div>
                        {
                            !editingData && <p className="text-center">€{reservationDetails?.price}</p>
                        }
                    </div> : <>
                        <h1 className="uppercase lg:text-[24px] font-bold text-center">taxi strasbourg services</h1>
                        <h2 className="lg:text-[30px] font-extrabold text-center">{rightSide.title}</h2>
                        <ol className="list-decimal lg:text-[18px] font-semibold ml-10">
                            {
                                rightSide.list?.map((item: string) => <li key={item}>{item}</li>)
                            }
                        </ol>
                        <a href="" className="flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] text-[24px] font-bold rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-fit">06 47 60 01 71</a>
                        <button className="flex items-center justify-center gap-5 px-7 py-2 mx-auto bg-[#FFDC00] lg:text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                            <p>{pageData.home.reviews.btn}</p>
                            <RateReviewIcon sx={{ fontSize: 30, fontWeight: 700 }} className="lg:block hidden" />
                            <RateReviewIcon sx={{ fontSize: 20, fontWeight: 700 }} className="lg:hidden block" />
                        </button>
                    </>
                }

            </div>
            {
                loading.show && <Loader message={loading.message} />
            }
        </div>
        <Footer lang={lang} changeLanguage={changeLanguage} />
    </main >
}