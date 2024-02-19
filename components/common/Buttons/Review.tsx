import RateReviewIcon from '@mui/icons-material/RateReview';

export default function Review({btn}: {btn: string}) {
    return <a href="https://www.google.com/search?q=central+taxi+67&oq=centra&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg8MgYIARBFGDkyBggCECMYJzIHCAMQABiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjIxMmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4796c86457fd4375:0xf8283cb01f9de3f0,3,,,," target="_blank" className="h-12 font-medium flex items-center justify-center gap-5 px-7 py-2 bg-secondary-100 text-[18px] text-white rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-fit italic !w-[250px]">
    <p>{btn}</p>
    <RateReviewIcon sx={{ fontSize: 30, fontWeight: 700 }} className="" />
</a>
}