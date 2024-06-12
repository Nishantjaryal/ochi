import { motion } from "framer-motion";
import Message from "./message";

const marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="bg-[#004d43] w-full pt-20 rounded-t-[24px] ">
      <div className="text-[25vw] leading-none font-bold tracking-[-0.1em] is-inview uppercase font-['Founder Grotesk'] border-y-[1px] border-zinc-300 text-zinc-300 flex items-center justify-center overflow-hidden whitespace-nowrap pb-7 pt-5 sm:text-[15vw] sm:pt-1">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:3}} className="pr-7">we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:3}} className="pr-7">we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:3}} className="pr-7">we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:3}} className="pr-7">we are ochi</motion.h1>
      </div>


        <div className="mt-10">
                 <Message/>
 
        </div>

    </div>
  )
}

export default marquee
