
import {Link} from 'react-router-dom'
import { useState } from 'react'


import "../../App.css"
export default function () {

  const[active,setActive] = useState('home')
  
  const handleClick = (e) => {
    setActive(e.target.name);
    navBarSwitch();
  }
  function navBarSwitch() {
    var x = document.getElementsByClassName("navbar--items")[0];
    if (x.classList.contains("hidden")) {
      x.classList.remove("hidden");
    } else {
      x.classList.add("hidden");
    }
  }
  return (
    <nav className="z-10 bg-fourth box-border top-0 fixed w-full hey font-semibold overflow-hidden md:text-primary tracking-wider">
      <div className=" max-w-full flex flex-wrap items-center justify-between p-4">
        <div className="flex flex-row justify-between w-full md:w-auto items-center">
        <div className="flex items-center">
          <Link to="/just-learn" className=""><h2 className="text-xl letter  text-primary uppercase">JUSTSIMPLE</h2></Link>
        </div>
        <div className="flex md:order-2 ">
          <button
            onClick={navBarSwitch}
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-700 dark:focus:ring-gray-600 transition-all text-primary"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        </div>
        <div className=" navbar--items justify-between  w-full md:flex md:w-auto md:order-1 hidden "
          id="navbar-search"
        >
          <ul className="flex flex-col gap-2 md:text-[17px] text-lg md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-700 justify-end">
            <li className="">
              <Link
              onClick={handleClick}
                to="/Cours"
                className={"block py-2 pl-8 pr-8  rounded md:bg-transparent bg-primary md:p-0 " + (active =='cours'?'bg-fourth':'')}
                aria-current="page"
                name="cours"
              >
                Cours
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                to="./Propos"
                className={"block py-2 pl-8 pr-8   rounded md:bg-transparent  bg-primary md:p-0 " + (active =='propos'?'bg-fourth':'')}
                name="propos"
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                to="./Contact"
                className={"block py-2 pl-8 pr-8  rounded md:bg-transparent bg-primary md:p-0 " + (active =='contact'?'bg-fourth':'')}
                name="contact"
              >
                contactez nous
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
