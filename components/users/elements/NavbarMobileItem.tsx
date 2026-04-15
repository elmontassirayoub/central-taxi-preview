import { TabListType, TabNavItem } from "@/assets/data"
import Link from "next/link"
import { useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi"
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import { useAppContext } from "@/context/appContext"

const iconClass = "!text-[#FFDC00]"
const iconSize = { fontSize: 24 }

function MobileTopIcon({ url }: { url: string }) {
    switch (url) {
        case "/":
            return <HomeOutlinedIcon sx={iconSize} className={iconClass} />
        case "/services/plan":
            return <MapOutlinedIcon sx={iconSize} className={iconClass} />
        case "/taxi/taxi-strasbourg":
            return <LocalTaxiIcon sx={iconSize} className={iconClass} />
        case "/services":
            return <BusinessCenterOutlinedIcon sx={iconSize} className={iconClass} />
        case "/book":
            return <CalendarMonthOutlinedIcon sx={iconSize} className={iconClass} />
        case "/contact":
            return <PhoneOutlinedIcon sx={iconSize} className={iconClass} />
        default:
            return <LocalTaxiIcon sx={iconSize} className={iconClass} />
    }
}

function DiamondBullet() {
    return (
        <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-[9px] leading-none text-[#FFDC00]">
            ◆
        </span>
    )
}

const frServiceLabels: Record<string, string> = {
    "/services/particuliers": "Particulier",
    "/services/entreprise": "Entreprise",
    "/services/conventionne": "Conventionné",
    "/services/tourisme": "Tourisme",
    "/services/avis": "Avis",
}

const enServiceLabels: Record<string, string> = {
    "/services/particuliers": "Individuals",
    "/services/entreprise": "Business",
    "/services/conventionne": "Approved taxi (CPAM)",
    "/services/tourisme": "Tourism",
    "/services/avis": "Reviews",
}

function subItemLabel(child: TabNavItem, lang: string): string {
    if (child.url === "/services/forfait") {
        return lang === "fr" ? "Forfaits taxi Strasbourg" : "Strasbourg taxi packages"
    }
    if (child.url === "/taxi/taxi-medical-strasbourg" && lang === "fr") {
        return "Taxi conventionné Strasbourg (VSL)"
    }
    if (child.url === "/services/supplementaire") {
        return lang === "fr" ? "Services supplémentaires" : "Additional services"
    }
    if (lang === "fr" && frServiceLabels[child.url]) return frServiceLabels[child.url]
    if (lang === "en" && enServiceLabels[child.url]) return enServiceLabels[child.url]
    return child.name
}

function MobileNavChild({
    child,
    page,
    idx,
    subExpand,
    setSubExpand,
    lang,
}: {
    child: TabNavItem
    page: string
    idx: number
    subExpand: number | null
    setSubExpand: (n: number | null) => void
    lang: string
}) {
    const nested = child.items && child.items.length > 0
    if (!nested) {
        const isActive = page === child.url
        const label = subItemLabel(child, lang)
        const forfaitHighlight = child.url === "/services/forfait"
        return (
            <li className="flex items-start gap-2.5">
                <DiamondBullet />
                <Link
                    prefetch={false}
                    href={child.url}
                    className={`flex-1 pb-1 text-[13px] leading-snug transition-colors ${
                        forfaitHighlight
                            ? "font-semibold text-[#FFDC00]"
                            : isActive
                              ? "text-white"
                              : "text-gray-200 hover:text-white"
                    }`}
                >
                    {label}
                </Link>
            </li>
        )
    }
    const open = subExpand === idx
    return (
        <li className="space-y-2">
            <div className="flex items-start gap-2.5">
                <DiamondBullet />
                <div className="min-w-0 flex-1">
                    <Link
                        prefetch={false}
                        href={child.url}
                        className={`text-[13px] font-medium leading-snug text-gray-100 hover:text-white ${
                            page === child.url ? "text-white" : ""
                        }`}
                    >
                        {child.name}
                    </Link>
                    <button
                        type="button"
                        onClick={() => setSubExpand(open ? null : idx)}
                        className="mt-1 flex w-full items-center justify-between rounded-md bg-[#1a2330]/80 px-2 py-1 text-left text-[11px] text-gray-300"
                        aria-expanded={open}
                    >
                        <span className="sr-only">Sous-menu</span>
                        {open ? (
                            <ExpandLessIcon className="!h-4 !w-4 text-[#FFDC00]" />
                        ) : (
                            <ExpandMoreIcon className="!h-4 !w-4 text-[#FFDC00]" />
                        )}
                    </button>
                </div>
            </div>
            {open && (
                <ul className="ml-6 space-y-2 border-l border-[#FFDC00]/25 pl-3">
                    {child.items!.map((sub, j) => (
                        <li key={j} className="flex items-start gap-2">
                            <span className="text-[8px] text-[#FFDC00]/80">▸</span>
                            <Link
                                prefetch={false}
                                href={sub.url}
                                className={`text-[12px] leading-snug ${
                                    page === sub.url ? "text-white" : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {subItemLabel(sub, lang)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

type NavBarMobileItemType = {
    page: string
    item: TabListType
    admin: boolean
}

/** Aplatit Entreprise + Forfait pour coller à la maquette (liste avec Forfaits en jaune). */
function flattenServiceItems(items: TabNavItem[]): TabNavItem[] {
    const out: TabNavItem[] = []
    for (const c of items) {
        if (c.url === "/services/entreprise" && c.items?.length) {
            out.push({ name: c.name, url: c.url })
            for (const sub of c.items) out.push(sub)
        } else {
            out.push(c)
        }
    }
    return out
}

const NavBarMobileItem: React.FC<NavBarMobileItemType> = ({ page, item, admin }) => {
    const { lang } = useAppContext()
    const [expand, setExpand] = useState(false)
    const [subExpand, setSubExpand] = useState<number | null>(null)

    if (item?.url === "/book" && admin) return null

    const displayItems =
        item.url === "/services" && item.items ? flattenServiceItems(item.items) : item.items

    const hasChildren = Boolean(displayItems?.length)
    const parentActive =
        page === item.url ||
        (hasChildren &&
            displayItems?.some((c) => page === c.url || c.items?.some((s) => page === s.url)))

    if (!hasChildren) {
        return (
            <div className="border-b border-white/[0.07]">
                <Link
                    prefetch={false}
                    href={item.url}
                    className={`flex items-center gap-3.5 py-3.5 pl-1 pr-2 transition-colors ${
                        page === item.url ? "bg-[#FFDC00]/10" : "active:bg-white/5"
                    }`}
                >
                    <MobileTopIcon url={item.url} />
                    <span className="flex-1 text-left text-[15px] font-medium lowercase tracking-wide text-white">
                        {item.name}
                    </span>
                </Link>
            </div>
        )
    }

    return (
        <div className="border-b border-white/[0.07]">
            <div
                className={`flex items-center gap-2 py-1 pl-1 pr-0 ${
                    expand || parentActive ? "bg-[#FFDC00]/5" : ""
                }`}
            >
                <Link
                    prefetch={false}
                    href={item.url}
                    className="flex min-w-0 flex-1 items-center gap-3.5 py-3 pr-1"
                >
                    <MobileTopIcon url={item.url} />
                    <span
                        className={`truncate text-left text-[15px] font-medium lowercase tracking-wide ${
                            expand ? "text-[#FFDC00]" : "text-white"
                        }`}
                    >
                        {item.name}
                    </span>
                </Link>
                <button
                    type="button"
                    onClick={() => setExpand((e) => !e)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center text-white/90"
                    aria-label={expand ? "Replier" : "Déplier"}
                >
                    {expand ? (
                        <ExpandLessIcon className="!h-6 !w-6 text-[#FFDC00]" />
                    ) : (
                        <ExpandMoreIcon className="!h-6 !w-6 text-[#FFDC00]" />
                    )}
                </button>
            </div>

            {expand && displayItems && (
                <div className="mx-1 mb-3 mt-1 rounded-xl bg-[#243240] px-3 py-3 shadow-inner">
                    <ul className="space-y-3">
                        {displayItems.map((child, idx) => (
                            <MobileNavChild
                                key={`${child.url}-${idx}`}
                                child={child}
                                page={page}
                                idx={idx}
                                subExpand={subExpand}
                                setSubExpand={setSubExpand}
                                lang={lang}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavBarMobileItem
