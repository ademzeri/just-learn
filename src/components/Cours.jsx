import seven from "../assets/anne/seven.png"
import eight from "../assets/anne/number-8.png"
import nine from "../assets/anne/number-9.png"
import {Routes,Route,Link} from 'react-router-dom'
import "../App.css"

export default function Cours(){
    return(
        <div className=" flex flex-col h-[70vh] items-center justify-start mt-[20vh] md:gap-[5vw] gap-[10vw] font-serif">
        <h2 className="md:text-5xl text-4xl text-[#111827] font-semibold mx-4">Choisir votre niveau </h2>
        <div className=" flex flex-row justify-around items-center w-full text-center mt-20">
            <Link to="/Cours/subjects"><img className="md:h-[12vw] h-[20vw]" src={seven} alt="" /></Link>
            <Link to="/Cours/subjects"><img className="md:h-[12vw] h-[20vw]" src={eight} alt="" /></Link>
            <Link to="/Cours/subjects"><img className="md:h-[12vw] h-[20vw]" src={nine} alt="" /></Link>
        </div>
        </div>
    )
}