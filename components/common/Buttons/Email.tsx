import EmailIcon from '@mui/icons-material/Email';

export default function Email() {
    return <a href="mailto:contact.central.taxi67@gmail.com" className={`flex items-center justify-start gap-2 px-7 py-2 bg-transparent text-[18px] rounded-[5px] h-12 italic !w-fit font-medium text-white hover:bg-primary-1 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] !whitespace-nowrap text-sm lg:text-base mb-10 lg:mb-0`}>
    <p className="!whitespace-nowrap">contact.central.taxi67@gmail.com</p>
    <EmailIcon sx={{ fontSize: 30 }} className="" />
  </a>
}