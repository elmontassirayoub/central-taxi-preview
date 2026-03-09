import Link from "next/link"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { TabListType } from "@/assets/data";
import React, { useState } from "react";

type NavBarDesktopItemType = {
    page: string,
    item: TabListType
}

const NavBarDesktopItem: React.FC<NavBarDesktopItemType> = ({ page, item }) => {

    const [expand, setExpand] = useState(false)

    return (
        <div className="flex items-center gap-2 h-full relative">
            <Link prefetch={false} className={`uppercase hover:underline h-full flex items-center justify-center px-2 whitespace-nowrap ${page === item.url ? "bg-[#000] text-white" : ""}`} href={item?.url}>
                {item?.name}
            </Link>
            {
                item?.items && (
                    !expand ? <ExpandMoreIcon onClick={() => setExpand(prev => !prev)} className="cursor-pointer" /> : <ExpandLessIcon onClick={() => setExpand(prev => !prev)} className="cursor-pointer" />
                )
            }
            {
                expand && (
                    <ul className="absolute top-[100%] min-w-full w-max py-2 left-0 bg-primary-1 text-white rounded-b-[8px]">
                        {
                            item?.items?.map((item, idx) => <li key={idx} className={`hover:underline w-full h-full p-2 whitespace-nowrap ${page === item.url ? "bg-[#000] text-white" : ""}`}>
                                <Link prefetch={false} className="whitespace-nowrap capitalize" href={item?.url}>
                                    {item?.name}
                                </Link>
                            </li>)
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default NavBarDesktopItem