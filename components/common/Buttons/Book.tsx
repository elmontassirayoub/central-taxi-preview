import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Book({btn} : {btn: string}) {
    return <button className="flex items-start justify-center gap-2 px-7 py-2 bg-transparent text-[18px] rounded-[5px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-secondary-100 h-12 italic !w-[250px] font-medium text-white">
    <p>{btn}</p>
    <KeyboardArrowRightIcon sx={{ fontSize: 30 }} className="" />
  </button>
}