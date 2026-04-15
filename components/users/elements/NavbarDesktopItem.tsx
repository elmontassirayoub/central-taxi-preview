import Link from "next/link"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import { TabListType, TabNavItem } from "@/assets/data"
import React, { useState } from "react"

type NavBarDesktopItemType = {
    page: string
    item: TabListType
}

function DesktopNavChild({ child, page }: { child: TabNavItem; page: string }) {
    const nested = child.items && child.items.length > 0
    if (!nested) {
        return (
            <li
                className={`hover:underline w-full h-full p-2 whitespace-nowrap ${
                    page === child.url ? "bg-[#000] text-white" : ""
                }`}
            >
                <Link prefetch={false} className="whitespace-nowrap capitalize" href={child.url}>
                    {child.name}
                </Link>
            </li>
        )
    }
    return (
        <li className="group/sub relative">
            <div
                className={`flex items-center gap-1 p-2 whitespace-nowrap hover:bg-black/30 ${
                    page === child.url || child.items!.some((s) => page === s.url) ? "bg-[#000] text-white" : ""
                }`}
            >
                <Link prefetch={false} className="whitespace-nowrap capitalize" href={child.url}>
                    {child.name}
                </Link>
                <span className="text-[10px] opacity-70" aria-hidden>
                    ▸
                </span>
            </div>
            <ul className="absolute left-full top-0 z-[60] hidden min-w-[10rem] flex-col rounded-br-md bg-primary-1 py-1 pl-0 shadow-md group-hover/sub:flex">
                {child.items!.map((sub, j) => (
                    <li
                        key={j}
                        className={`px-3 py-2 hover:underline ${
                            page === sub.url ? "bg-black text-white" : ""
                        }`}
                    >
                        <Link prefetch={false} className="block whitespace-nowrap capitalize" href={sub.url}>
                            {sub.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}

const NavBarDesktopItem: React.FC<NavBarDesktopItemType> = ({ page, item }) => {
    const [expand, setExpand] = useState(false)

    return (
        <div className="flex items-center gap-2 h-full relative">
            <Link
                prefetch={false}
                className={`uppercase hover:underline h-full flex items-center justify-center px-2 whitespace-nowrap ${
                    page === item.url ? "bg-[#000] text-white" : ""
                }`}
                href={item?.url}
            >
                {item?.name}
            </Link>
            {item?.items &&
                (!expand ? (
                    <ExpandMoreIcon onClick={() => setExpand((prev) => !prev)} className="cursor-pointer" />
                ) : (
                    <ExpandLessIcon onClick={() => setExpand((prev) => !prev)} className="cursor-pointer" />
                ))}
            {expand && (
                <ul className="absolute top-[100%] min-w-full w-max py-2 left-0 bg-primary-1 text-white rounded-b-[8px]">
                    {item?.items?.map((child, idx) => (
                        <DesktopNavChild key={idx} child={child} page={page} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBarDesktopItem
