import Bg from '../assets/logo/ds-removebg-preview.png'
import {Link} from 'react-router-dom'

export default function Home(){
    return(
        
        <div className=" text-center h-[70vh] items-center flex flex-col   justify-center  mt-[10vh]">
            <div className='flex items-center flex-col h-[55%] gap-[25%] md:justify-arround'>
                <h1 className='font-serif md:text-[5vw] md:mx-20 text-[10vw] text-[#111827] font-bold flex-wrap'>your guide to simple math & physique</h1>
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-3xl text-xl  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-serif px-7 py-4"><Link to="/Cours">Decouvrir nos cours</Link></button>
            </div>
        </div>
    )
}