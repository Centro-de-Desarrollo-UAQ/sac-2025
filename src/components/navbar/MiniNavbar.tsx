'use client'

//i feel dirty doing this with AI :(

import React, { useEffect, useState } from "react"
import Image from "next/image";
import MiniGenerateQrButton from "./MiniGenerateQrButton";

const MiniNavbar: React.FC = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }
        window.addEventListener("scroll", handleScroll);    
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return(
        <>
            <div id="navbar-container" className={`z-20 transition md:hidden text-xl flex w-full h-19 content-center items-center justify-between sticky top-0 ${isScrolling ? "bg-black text-white border-white" : "bg-transparent border-zinc-800"}`}>
                <div className="h-[55px] justify-start items-center gap-[15px] inline-flex">
                    <button onClick={toggleMenu} className="ml-2 flex flex-col justify-center items-center w-10 h-10 z-30">
                        <span className={`block w-6 h-0.5 mb-1.5 transition-all ${isScrolling || isMenuOpen ? "bg-white" : "bg-zinc-800"}`}></span>
                        <span className={`block w-6 h-0.5 mb-1.5 transition-all ${isScrolling || isMenuOpen ? "bg-white" : "bg-zinc-800"}`}></span>
                        <span className={`block w-6 h-0.5 transition-all ${isScrolling || isMenuOpen ? "bg-white" : "bg-zinc-800"}`}></span>
                    </button>
                </div>
                
                <div className="w-fit h-fit self-center items-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-100 hover:scale-106">
                    <Image src={"/SACIcon.png"} alt="Picture of SAC" width={100} height={100} unoptimized={true}/>
                </div>

                <a href="/generateqr">
                    <div className="transition-all duration-100 hover:scale-106">
                        <MiniGenerateQrButton/>
                    </div>
                </a>
            </div>

            <div 
                className={`fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 z-10 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
            ></div>

            <div className={`fixed top-0 left-0 w-64 h-full  bg-[#42cdff] z-20 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="pt-24 px-4 flex flex-col gap-4">
                    <a href="/" className="flex items-center gap-3 py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                        <img className="w-10 h-[40px]" src="/homeIcon.png" alt="Home" />
                        <span className="text-lg font-['Cera Pro']">Home</span>
                    </a>
                    <a href="/record" className="flex items-center gap-3 py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                        <img className="w-12 h-[35px]" src="/AsistenciaIcon.png" alt="Asistencia" />
                        <span className="text-lg font-['Cera Pro']">Asistencia</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default MiniNavbar;