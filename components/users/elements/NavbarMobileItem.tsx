import { TabListType } from "@/assets/data"
import Link from "next/link"
import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type NavBarMobileItemType = {
    page: string,
    item: TabListType,
    admin: boolean
}

const NavBarMobileItem: React.FC<NavBarMobileItemType> = ({ page, item, admin }) => {

    const [expand, setExpand] = useState(false)

    if (item?.url === "/book" && admin) return
    return (
        <div className="w-full">
            <button
                type="button"
                onClick={() => item?.items && setExpand(prev => !prev)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 mb-2 transition-colors ${
                    page === item.url
                        ? "bg-white text-[#33475A] shadow-md"
                        : "bg-[#2b3b4a] text-white hover:bg-[#3d5268]"
                }`}
            >
                <Link
                    prefetch={false}
                    href={item?.url}
                    className="flex-1 text-left text-sm font-semibold tracking-wide"
                >
                    {item?.name}
                </Link>
                {item?.items && (
                    !expand
                        ? <ExpandMoreIcon className="cursor-pointer text-white ml-2" />
                        : <ExpandLessIcon className="cursor-pointer text-white ml-2" />
                )}
            </button>

            {expand && item?.items && (
                <ul className="mb-3 ml-4 space-y-1 rounded-xl bg-[#243240]/90 px-3 py-2">
                    {item.items.map((child, idx) => (
                        <li key={idx}>
                            <Link
                                prefetch={false}
                                href={child.url}
                                className={`block rounded-lg px-2 py-1.5 text-xs font-medium capitalize transition-colors ${
                                    page === child.url
                                        ? "bg-white text-[#33475A]"
                                        : "text-gray-100 hover:bg-white/10"
                                }`}
                            >
                                {child.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBarMobileItem