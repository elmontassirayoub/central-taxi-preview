import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';

export default function Book({btn, primary} : {btn: string, primary: boolean}) {
    return <Link href="/book" className={`flex items-start justify-center gap-2 px-7 py-2 bg-transparent text-[18px] rounded-[5px] h-12 italic !w-[250px] font-medium text-white ${primary ? "!bg-[#33475A] animate-bounce hover:pause" : "hover:bg-secondary-100 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] !whitespace-nowrap"}`}>
    <p className="!whitespace-nowrap">{btn}</p>
    <KeyboardArrowRightIcon sx={{ fontSize: 30 }} className="" />
  </Link>
}