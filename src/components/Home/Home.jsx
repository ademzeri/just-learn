import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import "../../App.css"
import {motion} from 'framer-motion'
export default function Home(){
    return(
        
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="text-center text-fourth  home--background h-full flex flex-col justify-center overflow-hidden hey">
            <div className='flex items-center flex-col md:justify-around gap-[3vh] md:mb-0 mb-20'>
                <h1 style={{textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)'}} className=' md:text-[65px] md:mx-40 text-[10vw]  font-bold flex-wrap mb-10 '>your guide to simple <span className='text-third'>Math</span>  & <span className='text-third'>Physique</span></h1>
                <Button htmlTo="" variant="contained" className=' hey shadow-3xl bg-fourth py-5 md:py-5 rounded-3xl font-semibold text-base text-primary  hover:text-second tracking-wider' ><Link to='/just-learn/Cours'>Decouvrir Nos Cours</Link></Button>
            </div>
        </motion.div>
    )
}

