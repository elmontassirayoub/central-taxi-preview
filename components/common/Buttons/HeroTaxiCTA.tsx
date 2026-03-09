import Link from "next/link"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi"
import { useAppContext } from "@/context/appContext"

const TEL_NUMBER = "0647600171"

export default function HeroTaxiCTA() {
    const { lang } = useAppContext()

    const callLabel = lang === "fr" ? "Appeler maintenant" : "Call now"
    const bookLabel = lang === "fr" ? "Réserver en ligne" : "Book online"

    return (
        <div className="flex flex-col items-stretch sm:items-start gap-3 max-w-md">
            {/* Main call button */}
            <a
                href={`tel:${TEL_NUMBER}`}
                aria-label={callLabel}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FACC15] px-6 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base lg:text-lg font-semibold text-[#1F2933] shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-[#EAB308] transition-colors"
            >
                <span className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-full bg-black/10 w-9 h-9">
                        <LocalPhoneIcon className="text-black" fontSize="small" />
                    </span>
                    <span className="uppercase tracking-wide">{callLabel}</span>
                </span>
            </a>

            {/* Book online button */}
            <Link
                href="/book"
                className="inline-flex items-center justify-center self-center rounded-full bg-[#1D3C94] px-6 py-2 text-sm sm:text-base font-semibold text-white shadow-[0_6px_16px_rgba(0,0,0,0.3)] hover:bg-[#132A63] transition-colors"
            >
                <span className="flex items-center gap-2">
                    <LocalTaxiIcon fontSize="small" />
                    <span>{bookLabel}</span>
                </span>
            </Link>
        </div>
    )
}

