import { Boxsx } from '.'; 
import { useLocation } from "react-router-dom";

export default function Chapitres(state){
  const location = useLocation();
  console.log("from chapitres",location.state)
    return(
      <div className=' text-center text-fourth home--background h-full flex flex-row justify-center  overflow-auto pb-20'>
          <Boxsx data={location.state}/>
      </div>
)
}