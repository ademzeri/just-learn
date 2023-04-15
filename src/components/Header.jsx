import Textlogo from "../assets/textlogo/textlogo.png";
import Cours from "./Cours"
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'

export default function () {

  const[active,setActive] = useState('home')
  const handleClick = (e) => {
    setActive(e.target.name);
    console.log(active)

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
    <nav className=" border-gray-200 bg-gray-900 p-2 box-border fixed top-0 w-full font-serif font-semibold">
      <div className=" max-w-full flex flex-wrap items-center justify-between p-4">
        <div className="flex flex-row justify-between w-full md:w-auto items-center">
        <Link to="#" className="flex items-centerD">
          <Link to='/'><img src={Textlogo} className="h-6 mr-3 text-white" alt="Logo" /></Link>
        </Link>
        <div className="flex md:order-2 ">
          <button
            onClick={navBarSwitch}
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        </div>
        <div className=" navbar--items justify-between  w-full md:flex md:w-auto md:order-1 hidden"
          id="navbar-search"
        >
          <ul className="flex flex-col text-md p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-end">
            <li className="">
              <Link
              onClick={handleClick}
                to="/Cours"
                className={"block py-2 pl-8 pr-8 md:dark:hover:text-blue-500 text-white rounded md:bg-transparent  md:p-0 " + (active =='cours'?'bg-blue-700':'')}
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
                className={"block py-2 pl-8 pr-8 md:dark:hover:text-blue-500 text-white rounded md:bg-transparent  md:p-0 " + (active =='propos'?'bg-blue-700':'')}
                name="propos"
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                to="./Contact"
                className={"block py-2 pl-8 pr-8 md:dark:hover:text-blue-500 text-white rounded md:bg-transparent  md:p-0 " + (active =='contact'?'bg-blue-700':'')}
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
