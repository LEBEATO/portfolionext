"use client";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({children,className="",delay=0,direction="up"}:{children:React.ReactNode;className?:string;delay?:number;direction?:"up"|"left"|"right"}){
  const reduceMotion=useReducedMotion();
  const offset=direction==="left"?{x:-36}:direction==="right"?{x:36}:{y:28};
  return <motion.div className={className} initial={reduceMotion?false:{opacity:0,...offset}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
