import {Chapitres} from '../Cours'
import { Home } from '../Home'
import {Cours} from "../Cours"
import Contact from '../Contact/Contact'
import {Subjects} from '../Cours'
import About from '../About/About'
import {Route,Routes,useLocation } from 'react-router-dom'
import { motion,AnimatePresence } from "framer-motion"



export default function AnimatedRoutes(){
    const location = useLocation()
    return(

        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route exact path='/just-learn' element={<Home/>} />
                <Route exact path="/just-learn/Cours" element={<Cours/>} />
                <Route exact path="/just-learn/Cours/subjects" element={<Subjects />} />
                <Route exact path="/just-learn/Cours/subjects/chapitres" element={<Chapitres/>} />
                <Route exact path="/just-learn/propos" element={<About/>} />
                <Route exact path="/just-learn/contact" element={<Contact/>} />
            </Routes>
        </AnimatePresence>
    )
}