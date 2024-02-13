import CardModal from "@/components/common/CardModal";
import { RideType } from "@/pages/admin/[[...id]]";
import moment from "moment";
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
            location.reload()
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

    return <CardModal modalState={modalState} modalClose={modalClose} name={type === "confirm" ? "Confirmer cette reservation" : type === "cancel" ? "Annuler cette reservation" : "Details de reservation"} width="lg:w-[50%]">
        <div className="text-[18px]">
            <p><span className="font-medium">De: </span>{ride.from}</p>
            <p><span className="font-medium">À: </span>{ride.to}</p>
            <p><span className="font-medium">Le: </span>{ride.date.split('T')[0]} {ride.time}</p>
            <p><span className="font-medium">Créé il y a: </span>{moment(ride.createdAt).fromNow()}</p>
            <p className="mt-2 font-semibold text-2xl underline">Sur l&apos;utilisateur</p>
            <p><span className="font-medium">Nom: </span>{ride.firstname} {ride.lastname}</p>
            <p><span className="font-medium">Phonenumber: </span>{ride.phonenumber}</p>
            <p><span className="font-medium">Email: </span>{ride.email}</p>
            <p><span className="font-medium">Addresse: </span>{ride.address}</p>
            <p><span className="font-medium">Message: </span>{ride.message}</p>
            {
                (type === "details" && ride.status !== "pending") && <p><strong>Status: </strong>{ride.status === "confirmed" ? "Confirmé" : "Annulé"}</p>
            }
            <p className="text-center font-bold text-3xl">€{ride.price}</p>
            <div className="flex w-full justify-center">
                {(type === "confirm" || (type === "details" && ride.status === "pending")) && <button className="px-7 py-2 mx-auto bg-[#FFDC00] text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" onClick={(e) => confirmHandler(e, true)}>Confirmer</button>}
                {(type === "cancel" || (type === "details" && ride.status === "pending")) && <button className="px-7 py-2 mx-auto bg-[#FFDC00] text-[24px] font-bold rounded-[5px] mt-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" onClick={(e) => confirmHandler(e, false)}>Cancel</button>}
            </div>
        </div>
    </CardModal>
}