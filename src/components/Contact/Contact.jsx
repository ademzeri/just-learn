import "../../App.css"
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uc87749', 'template_av2d4ie', e.target, '0OHmaV3pJEeSguCdl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
    <motion.div class="min-h-screen bg-white flex flex-col items-center justify-center home--background  overflow-y-scroll"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
   
    > 
      <section class=" bg-[#373535e5] mx-10 md:w-2/4 w-3/4 backdrop-blur-sm text-black">
        <div class=" px-4 mx-auto w-screen-md">
            <h2 class="my-4 md:text-4xl text-3xl tracking-tight font-extrabold text-center text-[#FDF6E7]">Contactez Nous</h2>
            <form action="#" class="md:space-y-8 space-y-4 pb-8" onSubmit={sendEmail}>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-[#FDF6E7]">Votre email</label>
                    <input type="email" id="email" class="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#FDF6E7] border-gray-600 placeholder-gray-40 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@justsimple.com" name="email" required></input>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-[#FDF6E7]">Objet</label>
                    <input type="text" id="subject" class="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#FDF6E7] border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Dites-nous comment nous pouvons vous aider" name="objet" required ></input>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-[#FDF6E7]">Votre message</label>
                    <textarea id="message" rows="4" class="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#FDF6E7] border-gray-600 placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="laissez un commentaire..." name="message"></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-[#373434] rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#FDF6E7] hover:bg-primary-700 focus:ring-primary-800">Envoyer</button>
            </form>
        </div>
</section> 
</motion.div>
    )
  }