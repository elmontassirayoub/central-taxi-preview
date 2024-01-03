import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function StarRating({rating}: {rating: number}) {

    const arrLength = Math.floor(rating);
    const reminder = rating - arrLength;

    return <div className='text-[#FFFD54]'>
        <div className='lg:block hidden'>
            {new Array(arrLength).fill(null)?.map((_, idx) => <StarIcon sx={{fontSize: 30}} className='' key={idx} />)}
            {reminder !== 0 && <StarHalfIcon sx={{fontSize: 30}} className='' />}
        </div>
        <div className='lg:hidden block'>
            {new Array(arrLength).fill(null)?.map((_, idx) => <StarIcon sx={{fontSize: 20}} className='' key={idx} />)}
            {reminder !== 0 && <StarHalfIcon sx={{fontSize: 20}} className='' />}
        </div>
    </div>
}