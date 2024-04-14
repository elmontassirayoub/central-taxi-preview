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
        <div className="w-full py-4 px-2">
            <Link prefetch={false} className={`uppercase italic py-1 w-full text-sm underline ${page === item.url ? "bg-primary-100 text-white" : "text-secondary-100"}`} href={item?.url} >
                {item?.name}
            </Link>
            {
                item?.items && (
                    !expand ? <ExpandMoreIcon onClick={() => setExpand(prev => !prev)} className="cursor-pointer ml-4" /> : <ExpandLessIcon onClick={() => setExpand(prev => !prev)} className="cursor-pointer ml-4" />
                )
            }
            {
                expand && (
                    <ul className="p-2 mt-2 left-0 bg-secondary-100 text-white rounded-[8px]">
                        {
                            item?.items?.map((item, idx) => <li key={idx} className="py-2">
                                <Link prefetch={false} className={`uppercase italic py-1 w-full text-sm underline ${page === item.url ? "text-white" : "text-black"}`} href={item?.url} >
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

export default NavBarMobileItem