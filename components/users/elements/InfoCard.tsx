import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SellIcon from '@mui/icons-material/Sell';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useInView } from 'react-intersection-observer';

const getIcon = (label: string) => label === "book" ? <BookOnlineIcon className="text-center" sx={{ fontSize: 30 }} /> : label === "price" ? <SellIcon className="text-center" sx={{ fontSize: 30 }} /> : <EventAvailableIcon className="text-center" sx={{ fontSize: 30 }} />

interface InfoCardProps {
    idx: number
    icon: string
    title: string
    text: string
}

const InfoCard: React.FC<InfoCardProps> = ({ idx, icon, title, text }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
      });

    return (
        <div ref={ref} key={idx} className={`lg:w-[400px] w-fit h-auto flex flex-col gap-3 p-5 rounded-[10px] shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] hover:md:-translate-y-3 md:ease-in-out transition ${inView ? idx % 2 === 0 ? 'slide_in_left' : "slide_in_right" : ''}`}>
            <div className="flex items-center justify-center">
                <div className="text-secondary-1 bg-[#000] w-fit p-3 rounded-[50%]">
                    {
                        getIcon(icon)
                    }
                </div>
            </div>
            <p className="lg:text-[18px] italic font-medium text-center">{title}</p>
            <p className="text-[#000]/[90%] text-xs lg:text-sm">{text}</p>
        </div>
    )
}

export default InfoCard