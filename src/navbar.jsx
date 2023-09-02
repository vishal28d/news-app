import React from "react";
import SearchBar from "./searchBar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Route from "./route";


const Nav = () => {
    
    return(
        <>        
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NEWS</span>
        </a>

        {/* <SearchBar /> */}

        <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">   <Link to="/login" >Login</Link> </a>
            <Link to="/login" >Login</Link>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <Link to="/">Home</Link>
            
            <Link to="/">About</Link>
        
            <Link to="/">Contact</Link>
            </ul>
        </div>
    </div>
</nav>

        </>
    )

}

export default Nav ;