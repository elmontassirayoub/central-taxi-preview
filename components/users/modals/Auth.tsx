import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import Login from "../elements/Login";
import Signup from "../elements/SignUp";

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

export default function Auth({ modalState, modalClose, option, lang, handleLogIn, handleSignUp, loading }: { modalState: boolean, modalClose: Function, option: { text: string, functionlity: string }, lang: string, handleLogIn: Function, handleSignUp: Function, loading: boolean }) {
    return <div className={`w-full h-full bg-[#00000066] left-0 top-0 block z-30 fixed flex items-center justify-center overflow-auto  ${modalState ? "flex" : "hidden"}`}>
        <motion.div className={`relative w-[90%] lg:w-[75%] px-[20px] pb-[20px] bg-white rounded-[5px] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5)] `} initial="hidden" animate={modalState ? "visible" : "hidden"} variants={animationVariants}>
            <div className="flex justify-between py-2">
                <span className={`text-2xl md:text-[28px] select-none font-bold !text-[#1C3454]`}>{option.text}</span>
                <a onClick={() => { modalClose(false) }} className="rounded-[50%] bg-[#fff] hover:bg-gray flex justify-center items-center">
                    <CloseIcon sx={{ fontSize: 40 }} className={`text-[#000] cursor-pointer`} />
                </a>
            </div>
            <div className="mt-[20px]">
                {
                    option.functionlity === "login" ? <Login lang={lang} handleLogIn={handleLogIn} /> : <Signup lang={lang} handleSignUp={handleSignUp} />
                }
            </div>
            {
                loading && <div className="absolute top-0 left-0 bg-[#00000066] w-full h-full flex justify-center items-center">
                    <div className="text-white font-bold text-[30px]">Sauvegardement Des Données---</div>
                </div>
            }
        </motion.div>
    </div>
}
