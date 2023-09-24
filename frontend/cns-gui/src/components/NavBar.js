import 'boxicons'
import { FaKey } from 'react-icons/fa';


export default function NavBar() {
  return (
    // <div classNameName="bg-blue-600 text-center px-3 py-2 font-sans font-medium text-white">
    //     Cryptographic algorithm's gui
    // </div>

    <nav className="bg-blue-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
      <FaKey className='text-white'></FaKey>
          <span className="self-center font-semibold whitespace-nowrap dark:text-white text-center px-3 py-2 font-sans font-medium text-white uppercase"> 
            Cryptographic algorithm's gui
          </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto bg-blue-600"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded  md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500 bg-blue-600"
                aria-current="page"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
