import seven from "../../assets/anne/seven.png"
import eight from "../../assets/anne/eight.png"
import nine from "../../assets/anne/nine.png"
import {Routes,Route,Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import "../../App.css"
import courseven from "../../data/cours7.js"
import courseight from "../../data/cours8.js"
import coursnine from "../../data/cours9.js"




export default function Cours() {
  const data_7 = courseven()
  const data_8 = courseight()
  const data_9 = coursnine()


    return (
      <motion.div className=" h-screen hey home--background overflow-hidden"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <div className="flex flex-col items-center justify-evenly h-2/4 gap-[6vw] mt-28">
        <h1 className="md:text-5xl text-4xl font-bold text-primary mx-6">Choisir votre niveau</h1>
        <div className=" flex flex-row md:justify-center md:gap-[15vw] justify-around  items-center w-full text-center md:text-2xl text-[6vw] font-bold">
          <Link to="/Cours/subjects" className="flex flex-col justify-center items-center" state={data_7}>
            <img className="w-[60%] h-auto md:w-[8vw] md:h-auto mx-4" src={seven} alt="Level Seven" />
          </Link>
          <Link to="/Cours/subjects" className="flex flex-col justify-center items-center " state={data_8}>
            <img className="w-[60%] h-auto md:w-[8vw] md:h-auto  mx-4" src={eight} alt="Level Eight" />
          </Link>
          <Link to="/Cours/subjects" className="flex flex-col justify-center items-center" state={data_9}>
            <img className="w-[60%] h-auto md:w-[8vw] md:h-auto  mx-4" src={nine} alt="Level Nine" />
          </Link>
        </div>
        </div>
      </motion.div>
    );
  }