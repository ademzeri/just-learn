import mathLogo from "../../assets/logo/math-logo.png"
import phyLogo from "../../assets/logo/physics-logo.png"
import {Link} from 'react-router-dom'
import "../../App.css"
import {motion} from 'framer-motion'
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Subjects(){
    const location = useLocation();
    console.log('from subject ',location.state)
    const mathData = location.state[0]
    const phyData = location.state[1]

    return(  
        <motion.div className="h-screen font-serif home--background overflow-hidden"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}       
        >
            <div className="flex flex-col hey items-center justify-evenly h-2/4 md:gap-[10vh] mt-36">
            <h1 className="md:text-5xl text-4xl font-bold text-primary mx-6">Choisir Votre Matiere</h1>
            <div className=" flex flex-row md:justify-center md:gap-[15vw] justify-between  items-center w-full text-center md:text-2xl text-[6vw] font-bold text-third ">
                <div className="flex items-center flex-col mx-4">
                    <Link id="math" to="/Cours/subjects/chapitres" state={mathData}><img className="md:h-[25vh] h-[30vw]" src={mathLogo} alt="aaa"  /></Link>
                    <label className="mt-2 text-[5.4vw] md:text-2xl" htmlFor="math">Mathematique</label>
                </div>
                <div  className="flex items-center flex-col mx-4">
                     <Link to="/Cours/subjects/chapitres" state={phyData}><img className="md:h-[25vh] h-[30vw]" src={phyLogo} alt="aaa"  /></Link>
                     <h2 className="mt-2">Physique</h2>
                 </div>

             </div>
             </div>
        </motion.div>
    )
}