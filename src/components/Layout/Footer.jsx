import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../App.css"

export default function Footer(){
  return (
    <footer className="bg-fourth fixed w-full bottom-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 py-3 text-primary">
          <a href="https://www.facebook.com/100091621249868" className=" hover:text-primary">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.twitter.com/justsimple" className=" hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/just.simple.789" className=" hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
