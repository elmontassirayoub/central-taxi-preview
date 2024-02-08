import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

const animationVariants = {
    hidden: {
        scale: 0.1,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2,
        },
    },
};

export default function CardModal({modalState, modalClose, children, name, width}) {
    return <div className={`w-full h-full bg-[#00000066] left-0 top-0 block z-30 fixed flex items-center justify-center overflow-auto  ${modalState ? "flex" : "hidden"}`}>
    <motion.div className={`relative w-[90%] ${width ? width : "lg:w-[75%]"} px-[20px] pb-[20px] bg-white rounded-[5px] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5)] z-[99] `} initial="hidden" animate={modalState ? "visible" : "hidden"} variants={animationVariants}>
        <div className="flex justify-between py-2">
            <span className={`text-2xl md:text-[28px] select-none font-bold !text-[#1C3454]`}>{name}</span>
            <a onClick={() => { modalClose({...false}) }} className="rounded-[50%] bg-[#fff] hover:bg-gray flex justify-center items-center">
                <CloseIcon sx={{ fontSize: 40 }} className={`text-[#000] cursor-pointer`} />
            </a>
        </div>
        <div className="mt-[20px]">
            {children}            
        </div>
    </motion.div>
</div>
}