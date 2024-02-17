import Link from "next/link";

export default function GRPD({setShowGrpd}: {setShowGrpd: Function}) {
    return <div className="bg-white px-5 py-10 md:max-w-[400px] mt-[10%] max-w-[90%] flex flex-col gap-5">
        <h5 className="text-[18px] font-medium">Ce site utilise des cookies pour apporter la meileure experience de navigation</h5>
        <Link href={"/"} className="uppercase underline text-[#000]/[50%]">reglages de cookies</Link>
        <div className="flex gap-5">
            <button onClick={() => setShowGrpd(false)} className="uppercase p-2 text-white bg-[#00FF00] border border-transparent rounded-[8px]">accpet</button>
            <button onClick={() => setShowGrpd(false)} className="uppercase p-2 text-white bg-[#808080] border border-transparent rounded-[8px]">refuse</button>
        </div>
    </div>
}