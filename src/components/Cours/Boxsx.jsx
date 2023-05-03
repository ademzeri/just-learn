import {motion} from 'framer-motion'
import "../../App.css"
import Math from "../../data/cours7.js"
import { useLocation } from "react-router-dom";

export default function Boxsx(props){ 
  const location = useLocation();
  const chapters=location.state
  console.log("data : ",chapters.data)
  const rows = () =>{
    return(
      chapters.data.map((chapter) => {
        return(
          
        <tr className='border-b bg-[#FFFAFE] dark:border-gray-700'>
            <td  className=" md:px-6 px-2 py-4 border border-opacity-70 border-fourth">
                  <svg className="mx-auto" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                </td>
                <td className="md:px-6 px-2 py-4 border border-opacity-70 border-fourth">
                  <svg stroke="currentColor" className="mx-auto" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"></path></svg>                
                </td>
                
                <td className="md:px-6 px-2 py-4 border border-opacity-70 border-fourth">
                {chapter['title']}
                </td>
        </tr>)
      }
    )
  )
}
  return (
    <motion.div className="flex items-center flex-row h-fit justify-center mt-32 border md:overflow-x-hidden overflow-x-scroll mx-4">
    <div className='mx-auto  flex flex-row justify-center overflow-x-visible'>
    <table className=" text-lg text-right">
        <thead className="text-xs text-white uppercase bg-fourth ">
            <tr>
                <th scope="col" className="md:px-10  px-2 py-3 border-white">
                    Telecharger
                </th>
                <th scope="col" className="md:px-10  px-2 py-3">
                    Afficher
                </th>
                <th scope="col" className="md:px-10  px-2 py-3">
                    Chapitre
                </th>
            </tr>
        </thead>
        <tbody>
            {rows()}
        </tbody>
    </table>
    </div>
    </motion.div>
  );
}

/* 
      <div classNameName=' mathBg shadow-2xl text-center flex flex-col justify-center text-2xl font-extrabold mx-6 text-second h-80'>ملخص درس الماء في الطبيعة</div>
      <div className=' mathBg shadow-2xl text-center flex flex-col justify-center text-2xl font-extrabold mx-6 text-second h-80'>ملخص درس الغلاف الجوي الأرضي</div>
      <div className=" mathBg shadow-2xl text-center flex flex-col justify-center text-2xl font-extrabold mx-6 text-third h-80">ملخص درس المادة في المحيط</div>
      <div className=' mathBg shadow-2xl text-center flex flex-col justify-center text-2xl font-extrabold mx-6 text-second h-80'>ملخص درس الماء في الطبيعة</div>
      <div className=' mathBg shadow-2xl text-center flex flex-col justify-center text-2xl font-extrabold mx-6 text-second h-80'>ملخص درس الغلاف الجوي الأرضي</div>

*/