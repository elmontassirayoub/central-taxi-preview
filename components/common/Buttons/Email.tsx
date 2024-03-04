import EmailIcon from '@mui/icons-material/Email';

export default function Email({primary}: {primary: boolean}) {
    return <a href="mailto:contact@strasbourgtaxi.fr" className={`flex items-center justify-start gap-2 px-7 py-2 text-[18px] rounded-[5px] h-12 italic !w-fit font-medium text-white !whitespace-nowrap text-sm lg:text-base mb-10 lg:mb-0 ${primary ? "!bg-[#33475A] animate-bounce hover:pause" : "hover:bg-secondary-100 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] !whitespace-nowrap bg-secondary-100"}`}>
    <p className="!whitespace-nowrap">contact@strasbourgtaxi.fr</p>
    <EmailIcon sx={{ fontSize: 30 }} className="" />
  </a>
}