import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import { CoordinationType } from "@/pages/book";
import dynamic from 'next/dynamic'
import { BookDetails } from "@/assets/data";

const DirectionMap = dynamic(() => import("@/components/users/elements/DirectionMap"), {
    ssr: false
})

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
export default function BookingDetails({ modalState, modalClose, data, details }: { modalState: boolean, modalClose: Function, data: { departAddress: string, arriveAddress: string, day: string, time: string, editingData: boolean, duration: string, distance: number, departcoordinates: CoordinationType, arrivecoordinates: CoordinationType, price: number }, details: BookDetails }) {
    return <div className={`w-full h-full bg-[#00000066] left-0 top-0 block z-30 fixed flex items-center justify-center overflow-auto  ${modalState ? "flex" : "hidden"}`}>
        <motion.div className={`relative w-[90%] lg:w-[75%] px-[20px] pb-[20px] bg-white rounded-[5px] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5)] z-[99]`} initial="hidden" animate={modalState ? "visible" : "hidden"} variants={animationVariants}>
            <div className="flex justify-between py-2">
                <span className={`text-2xl md:text-[28px] select-none font-bold !text-[#1C3454]`}>Reservation Details</span>
                <a onClick={() => { modalClose(false) }} className="rounded-[50%] bg-[#fff] hover:bg-gray flex justify-center items-center">
                    <CloseIcon sx={{ fontSize: 40 }} className={`text-[#000] cursor-pointer`} />
                </a>
            </div>
            <div className="mt-[20px] flex flex-col justify-center items-center gap-2">
                {
                    <DirectionMap depart={data?.departcoordinates} arrive={data?.arrivecoordinates} />
                }
                <div className="w-full">
                    <p><strong>{details?.start}: </strong>{data?.departAddress}</p>
                    <p><strong>{details?.finish}: </strong>{data?.arriveAddress}</p>
                    <p><strong>{details?.dateAndTime}: </strong>{data?.day} {data?.time}</p>
                    <p><strong>{details?.duration}: </strong>{data?.editingData ? "A calculer" : data?.duration}</p>
                    <p><strong>{details?.distance}: </strong>{data?.editingData ? "A calculer" : `${(data?.distance / 1000).toFixed(2)} km`}</p>
                </div>
                {
                    !data?.editingData && <p className="text-center">€{data?.price?.toFixed(2)}</p>
                }
            </div>
        </motion.div>
    </div>
}