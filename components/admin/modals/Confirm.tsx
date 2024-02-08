import CardModal from "@/components/common/CardModal";
import { RideType } from "@/pages/admin";
import { toast } from 'react-toastify';

export default function Confirm({ modalState, modalClose, ride, type }: { modalState: boolean, modalClose: Function, ride: RideType, type: string }) {

    const confirmHandler = async (e: { preventDefault: Function }, conf: boolean) => {
        e.preventDefault()
        toast.info(conf ? "En train de confirmer la reservation" : "En train d'annuler la reservation", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
        });
        try {
            const response = await fetch(`/api/admin/confirm`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ _id: ride._id, confirm: conf })
            })
            const result = await response.json()
            toast.success(result?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        } catch (e: any) {
            toast.error(e?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        }

    }

    return <CardModal modalState={modalState} modalClose={modalClose} name={type === "confirm" ? "Confirmer cette reservation" : type === "cancel" ? "Annuler cette reservation" : "Details de reservation"} width="w-[50%]">
        <div className="text-[18px]">
            <p><strong>De: </strong>{ride.from}</p>
            <p><strong>À: </strong>{ride.to}</p>
            <p><strong>Le: </strong>{ride.date.split('T')[0]} {ride.time}</p>
            <p className="text-center font-bold">€{ride.price}</p>
            <div className="flex w-full justify-center">
                {(type === "confirm" || (type === "details" && ride.status === "pending")) && <button className="px-7 py-2 mx-auto bg-[#FFDC00] text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" onClick={(e) => confirmHandler(e, true)}>Confirmer</button>}
                {(type === "cancel" || (type === "details" && ride.status === "pending")) && <button className="px-7 py-2 mx-auto bg-[#FFDC00] text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" onClick={(e) => confirmHandler(e, false)}>Cancel</button>}
            </div>
        </div>
    </CardModal>
}