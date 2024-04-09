import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div class="px-20 py-6 bg-[#545154]">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-center">
                        <div class="flex items-center justify-center text-3xl font-bold text-gray-400">
                            DR. CLEMENCE
                        </div>
                        <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                            <a href="#home" class="flex items-center justify-center mr-10 text-base text-gray-200 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                                Home
                            </a>
                            <a href="#about" class="flex items-center justify-center mr-10 text-base text-gray-200 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                                About Me
                            </a>
                            <a href="#projects" class="flex items-center justify-center mr-10 text-base text-gray-200 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                                Projects
                            </a>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center justify-center">
                        <a href="#" class="mr-5 text-lg font-medium text-gray-300 transition duration-150 ease-in-out">Buy Me a Coffee</a>
                        <button class="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Download CV</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;