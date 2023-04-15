import mathLogo from "../assets/logo/math-logo.png"
import phyLogo from "../assets/logo/physics-logo.png"
import {Link} from 'react-router-dom'
import "../App.css"

import { useState } from "react";

export default function Subjects(props){

    return(
        <div className="flex-col flex h-[70vh] mt-[10vh] items-center justify-center font-serif">
            <h2 className="md:text-5xl text-4xl text-[#111827] font-semibold">Choisir Votre matiere</h2>
            <div className=" flex flex-row justify-center gap-[20vw] items-center w-full text-center text-2xl font-bold mt-20">
                <div className="flex items-center flex-col">
                    <Link id="math" to="/subjects"><img className="md:h-[25vh] h-[30vw]" src={mathLogo} alt="aaa" /></Link>
                    <label className="mt-6" htmlFor="math">Mathematique</label>
                </div>
                <div>
                     <Link to="/subjects"><img className="md:h-[25vh] h-[30vw]" src={phyLogo} alt="aaa" /></Link>
                     <h2 className="mt-6">Physique</h2>
                 </div>

            </div>
        </div>
    )
}