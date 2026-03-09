import Link from "next/link"

const PHONE_NUMBER_DISPLAY = "+33 6 47 60 01 71"
const PHONE_NUMBER_TEL = "+33647600171"
const WHATSAPP_NUMBER = "33647600171"

export default function FloatingContactButtons() {
    return (
        <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3">
            {/* WhatsApp */}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Discuter sur WhatsApp (${PHONE_NUMBER_DISPLAY})`}
                className="group"
            >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center border border-white/70 transition-transform duration-200 group-hover:scale-105">
                    <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="M16 3C9.373 3 4 8.373 4 15c0 2.182.593 4.214 1.627 5.973L4 29l8.254-1.584A11.88 11.88 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.86 9.86 0 0 1-3.53-.646l-.364-.138-4.9.94.938-4.777-.188-.39A9.83 9.83 0 0 1 6 15c0-5.514 4.486-10 10-10Zm-3.023 5a1.1 1.1 0 0 0-.838.41c-.217.26-.71.694-.71 1.69 0 .996.726 1.957.828 2.09.102.133 1.43 2.278 3.52 3.233 2.09.955 2.09.637 2.466.605.376-.032 1.21-.493 1.381-.969.171-.476.171-.885.12-.97-.051-.085-.188-.136-.393-.238-.205-.102-1.21-.597-1.397-.665-.187-.068-.323-.102-.458.102-.136.205-.526.665-.645.8-.119.136-.239.153-.444.051-.205-.102-.865-.32-1.647-1.018-.609-.542-1.021-1.21-1.14-1.414-.119-.204-.013-.314.09-.416.092-.092.205-.239.307-.358.102-.119.136-.204.205-.341.068-.137.034-.256-.017-.358-.051-.102-.446-1.07-.636-1.464-.166-.346-.338-.362-.458-.37Z"
                        />
                    </svg>
                </div>
            </a>

            {/* Phone call */}
            <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                aria-label={`Appeler ${PHONE_NUMBER_DISPLAY}`}
                className="group"
            >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center border border-white/70 transition-transform duration-200 group-hover:scale-105">
                    <svg
                        className="w-6 h-6 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                </div>
            </a>

            {/* Reservation / Pricing */}
            <Link
                href="/book"
                aria-label="Voir les tarifs et faire une réservation"
                className="group"
            >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-400 shadow-lg flex items-center justify-center border border-white/70 transition-transform duration-200 group-hover:scale-105">
                    <span className="text-2xl font-bold text-black">€</span>
                </div>
            </Link>
        </div>
    )
}

