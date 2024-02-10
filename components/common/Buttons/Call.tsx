import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Call() {
    return <a href="" className="animate-bounce hover:pause h-12 font-medium flex items-center justify-center gap-5 px-7 py-2 bg-secondary-100 text-[18px] text-white rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-fit italic !w-[250px]">
        <p>06 47 60 01 71</p>
        <LocalPhoneIcon sx={{ fontSize: 24 }} className="" />
    </a>
}