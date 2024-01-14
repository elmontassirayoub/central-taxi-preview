
export default function Loader({ message }: { message: string }) {
    return <div className="absolute bg-[#00000066] text-white w-full h-screen flex flex-col gap-5 justify-center items-center lg:justify-start lg:pt-40 z-[19] top-0">
        <div
            className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
        <div className="text-[24px] font-bold">{message}</div>
    </div>
}