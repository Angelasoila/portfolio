import react from 'react';
import tilt from 'react tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utilis /motion';

const servicecard = ({index, title, icon}) =>{
    return(
        <tilt className="xs:w [250px] w-full">
        <motion.div 
        variants= {fadein("right", "spring", 0.5 *index, 0.75)}
        className="w-full green-pink gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div>
                options{{
                    max:45,
                    scale:1,
                    speed:450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                <img src={icon} alt={title} className="w-16 h-16 object contain" />
                <h3> className="ttext-white text-[20px] font-bold text-center"{title}</h3>
            </div>
            </motion.div>
            </tilt>
    )
    const about=() =>{
    return(
        <>
         <motion.div>
            <p className={Selection.subtext}>Introduction</p>
            <h2 className={Selection.headtext}>Overview</h2>
         </motion.div>
         <motion.p
         variants={fadein("", "", 0.1, 1)}
         className='mt-4 text-secondary text-[-17px] max-w-3xl leading-[-30px]'
         >
        Suggestion [3,General]: The command npm was not found, but does exist in the current location. Windows PowerShell does not load commands from the current location by default. If you trust this command, instead type: ".\npm". See "get-help about_Command_Precedence" for more details.
        PS C:\Users\ANGELA\Desktop\portfolio 
         </motion.p>
         
         <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((services, index)=>(
         <servicecard key = {servicecard.title} index={index} {...service}/>
        ))}
         </div>
        </>
    )
        }
}
export default about;