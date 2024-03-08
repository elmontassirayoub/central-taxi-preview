import { useInView } from "react-intersection-observer"
import StarRating from "./StarRating"

interface ReviewCardProps {
    idx: number
    review: string
    name: string
    date: string
    rating: number
}

const ReviewCard: React.FC<ReviewCardProps> = ({ idx, review, name, date, rating }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
      });

    return (
        <div ref={ref} className={`bg-[#33475A] p-5 rounded-[5px] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-1 h-auto flex flex-col justify-between gap-10 hover:md:-translate-y-3 md:ease-in-out transition ${inView ? idx % 2 === 0 ? 'slide_in_left' : "slide_in_right" : ''}`}>
            <p className="lg:text-base text-sm text-white/[85%] flex-1">&quot;{review}&quot;</p>
            <div className="flex justify-between">
                <div>
                    <p className="lg:text-base text-sm italic">{name}</p>
                    <small className="text-xs text-white/[50%]">{date}</small>
                </div>
                <StarRating rating={rating} />
            </div>
        </div>
    )
}

export default ReviewCard