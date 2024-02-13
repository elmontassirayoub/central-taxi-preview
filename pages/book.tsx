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
import BookingDetails from "@/components/users/modals/BookingDetails";
import ReservationForm from "@/components/users/elements/ReservationForm";
import { toast } from 'react-toastify';
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import Call from "@/components/common/Buttons/Call";
import Review from "@/components/common/Buttons/Review";

const DirectionMap = dynamic(() => import("@/components/users/elements/DirectionMap"), {
    ssr: false
})

type ReservationDetailsType = {
    price: number,
    distance: { text: string, value: number },
    duration: { text: string, value: number }
}

export type CoordinationType = {
    lat: number,
    lng: number
}

export type ReservationData = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
    email: "",
    message: ""
}

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {

    if (admin) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            admin
        }
    }
})

export default function Book({ admin = false }: { admin: boolean }) {

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
    const [showDetails, setShowDetails] = useState(false)
    const [showReservationForm, setShowReservationForm] = useState(false)
    const [reservationData, setReservationData] = useState<ReservationData>({ firstname: "", lastname: "", phonenumber: "", address: "", email: "", message: "" })

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

        if (!editingData) setEditingData(true)
        setPlaceId(placeID);
        setValue(address)

        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0])
        setCoordination(latLng)

    }

    const pageData = Data[lang]

    const handleEstimation = async () => {
        if (!departPlaceId || !arrivePlaceId || !date || !time) {
            toast.error(pageData.signup.fillAllFields, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }
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

    const handleReservation = async () => {
        if (!reservationData?.firstname || !reservationData?.lastname || !reservationData?.email || !reservationData?.phonenumber || !reservationData?.address) {
            toast.error(pageData.signup.fillAllFields, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
            return
        }
        setLoading({ show: true, message: pageData.book.form.loadingReservation })
        try {
            const response = await fetch("/api/users/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...reservationData, from: departAddress, to: arriveAddress, date, time, price: reservationDetails?.price })
            })
            if (response.status === 201) {
                toast.success(pageData.book.form.success, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    location.reload()
                }, 4000);
                return
            }
            toast.error(pageData.book.form.error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        } catch (e) {
            console.log("Error: ", e)
            toast.error(pageData.book.form.error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        } finally {
            setLoading({ show: false, message: "" })
        }
    }

    const ReservationFormHandler = async () => {
        if (!showReservationForm) await handleEstimation()
        else await handleReservation()
    }



    const { form: { title, fromLabel, fromPlaceholder, toLabel, toPlaceholder, dateLabel, timeLabel, btn }, rightSide } = pageData.book

    return <main className="flex flex-col min-h-screen relative">
        <Navbar admin={admin} lang={lang} changeLanguage={changeLanguage} page="/book" />
        <div className="flex-1 w-full hero-book flex flex-col lg:flex-row lg:p-10 py-10 px-4 gap-10 lg:justify-center items-center mb-20 relative">
            <form onSubmit={(e) => { e.preventDefault(); ReservationFormHandler() }} className="w-full lg:w-fit bg-white rounded-[15px] lg:p-10 py-10 px-4 flex flex-col gap-5 lg:min-w-[500px] lg:min-h-[600px]">

                {
                    !showReservationForm ? <><p className="text-[#33475A] text-center font-medium text-[24px]">{title}</p>
                        <LocationInput label={fromLabel} placeholder={fromPlaceholder} value={departAddress} setValue={setDepartAddress} handleSelect={(a, p) => handleSelect(a, p, { setValue: setDepartAddress, setPlaceId: setDepartPlaceId, setCoordination: setDepartCoordinates })} inputRef={departRef} />
                        <LocationInput label={toLabel} placeholder={toPlaceholder} value={arriveAddress} setValue={setArriveAddress} handleSelect={(a, p) => handleSelect(a, p, { setValue: setArriveAddress, setPlaceId: setArrivePlaceId, setCoordination: setArriveCoordinates })} inputRef={arriveRef} />
                        <div className="reserveform1_date div_container">
                            <p className="font-medium mb-2" onClick={() => inputRefDate.current?.focus()}>{dateLabel}</p>
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
                            <p className="font-medium mb-2" onClick={() => inputRefTime.current?.focus()}>{timeLabel}</p>
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
                            (reservationDetails && !editingData) ? <div>
                                <button className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto border-[1px] border-secondary-1 hover:bg-secondary-1 text-primary-1 lg:text-[18px] font-medium rounded-[5px] mt-5"
                                    onClick={() => setShowReservationForm(true)}
                                >
                                    {pageData?.home?.hero?.btn}: €{reservationDetails?.price.toFixed(2)}
                                </button>
                                <button
                                    onClick={() => setShowDetails(true)}
                                    className="cursor-pointer lg:hidden flex items-center justify-center gap-5 px-7 py-2 mx-auto border-[1px] border-secondary-1 hover:bg-secondary-1 text-primary-1 lg:text-[18px] font-medium rounded-[5px] mt-5"
                                >
                                    {pageData?.book?.form?.showDetails}
                                </button>
                            </div> : <input
                                type="submit"
                                value={btn}
                                className="cursor-pointer flex items-center justify-center gap-5 px-7 py-2 mx-auto border-[1px] border-secondary-1 hover:bg-secondary-1 text-primary-1 lg:text-[18px] font-medium rounded-[5px] mt-5"
                            />
                        }
                    </> : <ReservationForm reservationData={reservationData} setReservationData={setReservationData} setShowReservationForm={setShowReservationForm} compData={pageData} loading={loading} setLoading={setLoading} />
                }
            </form>

            <div className="hidden lg:flex flex-col gap-3">
                {
                    reservationDetails ? <div className="bg-white rounded-[15px] lg:p-10 py-10 px-4 flex flex-col gap-5 max-w-[500px] justify-center items-center">
                        <p className="font-bold">Details</p>
                        {
                            (departcoordinates !== null && arrivecoordinates !== null) && <DirectionMap depart={departcoordinates} arrive={arrivecoordinates} />
                        }
                        <div className="w-full">
                            <p><strong>{pageData?.book?.details?.start}: </strong>{departAddress}</p>
                            <p><strong>{pageData?.book?.details?.finish}: </strong>{arriveAddress}</p>
                            <p><strong>{pageData?.book?.details?.dateAndTime}: </strong>{day} {time}</p>
                            <p><strong>{pageData?.book?.details?.duration}: </strong>{editingData ? "A calculer" : reservationDetails?.duration?.text}</p>
                            <p><strong>{pageData?.book?.details?.distance}: </strong>{editingData ? "A calculer" : `${(reservationDetails?.distance?.value / 1000).toFixed(2)} km`}</p>
                        </div>
                        {
                            !editingData && <p className="text-center">€{reservationDetails?.price.toFixed(2)}</p>
                        }
                    </div> : <div className="text-white flex flex-col gap-[60px]">
                        <p className="uppercase lg:text-[24px] font-medium text-center">taxi strasbourg services</p>
                        <div>
                            <h2 className="lg:text-[30px] font-medium text-center">{rightSide.title}</h2>
                            <ol className="list-decimal lg:text-[18px] font-medium ml-10">
                                {
                                    rightSide.list?.map((item: string) => <li key={item}>{item}</li>)
                                }
                            </ol>
                        </div>
                        <div className="flex justify-center flex-col w-full items-center gap-5">
                            <Call />
                            <Review btn={pageData.home.reviews.btn} />
                        </div>
                    </div>
                }

            </div>
            {
                (showDetails && departcoordinates !== null && arrivecoordinates !== null && reservationDetails) && <BookingDetails modalState={showDetails} modalClose={setShowDetails} data={{ departcoordinates, arrivecoordinates, departAddress, arriveAddress, day, time, editingData, duration: reservationDetails?.duration?.text, distance: reservationDetails?.distance?.value, price: reservationDetails?.price }} details={pageData.book.details} />
            }
        </div>
        <Footer lang={lang} changeLanguage={changeLanguage} />
        {
            loading.show && <Loader message={loading.message} />
        }
    </main >
}