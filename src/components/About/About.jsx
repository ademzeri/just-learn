import Logo from '../../assets/logo/logo.png'
import { Grid } from '@mui/material';
import {motion} from 'framer-motion'

function About() {
    return (
      
      /* <div className="flex flex-col items-center h-screen p-6 justify-start overflow-hidden">
        <div className="max-w-2xl mx-auto flex flex-col">
          <img
            className="rounded-full w-60 h-60 mx-auto mt-10"
            src={Logo}
            alt="Company logo"
          />
          <p className="mt-4 md:text-lg text-gray-600 leading-relaxed">
          Just Simple est un site web créé par des étudiants passionnés de mathématiques et de physique pour aider les élèves du collège à mieux comprendre ces matières. Leur mission est de fournir des résumés clairs et concis des concepts clés pour aider les étudiants à réussir leurs examens et leurs études. L'équipe travaille dur pour offrir des résumés de qualité, accessibles et utiles. Just Simple est fier d'aider des milliers d'étudiants à réussir dans leurs études de mathématiques et de physique, et est facilement contactable via leur formulaire de contact en ligne ou leurs pages de réseaux sociaux.
          </p>
        </div>
      </div>
      */
      <motion.div class="h-screen hey home--background overflow-hidden"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
     
      >
      <div className="mx-auto bg-red-500 w-2/4 flex flex-col">
        <img className="h-40" src={Logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor vitae corporis aliquid expedita magni beatae porro perspiciatis explicabo in, eligendi asperiores commodi et temporibus. In error ad facere atque! Incidunt consequuntur eaque natus ullam eum sed nemo alias, ad quidem tenetur nobis recusandae corrupti cupiditate, provident exercitationem sapiente. Doloribus nesciunt maxime accusamus quisquam officia, ipsum repudiandae assumenda architecto distinctio. Asperiores!</p>
        <div>
        <Grid container spacing={8}>
          <Item>Hey</Item>
          <Item>Hey</Item>
        </Grid>

        </div>
      </div>

  </motion.div>
    );
  }
  
  export default About;