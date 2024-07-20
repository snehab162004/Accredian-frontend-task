import React from "react"; 
import logo from "../assets/logo.png"

export default function Navbar() {
    const bgColor= {
        backgroundColor: "#1A73E826"
    }
    const logoSize = {
        width: "35%",
        height: "30%"
    }
    return (
        <div className="sticky top-0">
        <div style={bgColor}  className=" w-full  h-[28] p-5 text-center font-bold
         shadow-lg shadow-[#1A73E826] font-['Inter'] md:text-lg">
            Navigate your ideal career path with tailored expert advice 
        </div>
            
        <nav className="navbar w-full bg-white-500  h-[30%] p-5 text-center font-bold
                 shadow-lg shadow-[#1A73E826] font-['Inter'] flex justify-between items-center">
                    <div className="h-[30%] w-[30%] md:w-[60%]">
                    <img style={logoSize}  className="pt-3 object-contain md:w-[60%] md:h-auto lg:pl-5 lg:w-[80%] h-[100%]" src={logo} alt="logo" />
                    </div>
                    <a href="#" className="text-left pr-5 pt-3 pointer tracking-widest md:text-lg lg:text-xl lg:pr-40">Refer&Earn</a>
                    
        </nav>
        </div>

        );
} 
