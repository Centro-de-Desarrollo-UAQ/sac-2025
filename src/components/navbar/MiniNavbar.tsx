'use client'

//i feel dirty doing this with AI :(

import React, { useEffect, useState } from "react"
import Image from "next/image";
import MiniGenerateQrButton from "./MiniGenerateQrButton";
import Link from "next/link";

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
            <div id="navbar-container" className={`z-20 transition  text-xl flex w-full h-19 content-center items-center justify-between sticky top-0 ${isScrolling ? "bg-black text-white border-white" : "bg-transparent border-zinc-800"}`}>
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

                <Link href="/generateqr">
                    <div className=" w-fit h-fit transition-all absolute right-2 top-3.5 self-center items-center transform duration-100 hover:scale-106 ">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 0H12V8H36V0Z" fill="#FFDF62"/>
                        <path d="M45 8H3V48H45V8Z" fill="#FFDF62"/>
                        <path d="M10.5 25V16C10.5 15.575 10.644 15.219 10.932 14.932C11.22 14.645 11.576 14.501 12 14.5H21C21.425 14.5 21.7815 14.644 22.0695 14.932C22.3575 15.22 22.501 15.576 22.5 16V25C22.5 25.425 22.356 25.7815 22.068 26.0695C21.78 26.3575 21.424 26.501 21 26.5H12C11.575 26.5 11.219 26.356 10.932 26.068C10.645 25.78 10.501 25.424 10.5 25ZM13.5 23.5H19.5V17.5H13.5V23.5ZM10.5 40V31C10.5 30.575 10.644 30.219 10.932 29.932C11.22 29.645 11.576 29.501 12 29.5H21C21.425 29.5 21.7815 29.644 22.0695 29.932C22.3575 30.22 22.501 30.576 22.5 31V40C22.5 40.425 22.356 40.7815 22.068 41.0695C21.78 41.3575 21.424 41.501 21 41.5H12C11.575 41.5 11.219 41.356 10.932 41.068C10.645 40.78 10.501 40.424 10.5 40ZM13.5 38.5H19.5V32.5H13.5V38.5ZM25.5 25V16C25.5 15.575 25.644 15.219 25.932 14.932C26.22 14.645 26.576 14.501 27 14.5H36C36.425 14.5 36.7815 14.644 37.0695 14.932C37.3575 15.22 37.501 15.576 37.5 16V25C37.5 25.425 37.356 25.7815 37.068 26.0695C36.78 26.3575 36.424 26.501 36 26.5H27C26.575 26.5 26.219 26.356 25.932 26.068C25.645 25.78 25.501 25.424 25.5 25ZM28.5 23.5H34.5V17.5H28.5V23.5ZM34.5 41.5V38.5H37.5V41.5H34.5ZM25.5 32.5V29.5H28.5V32.5H25.5ZM28.5 35.5V32.5H31.5V35.5H28.5ZM25.5 38.5V35.5H28.5V38.5H25.5ZM28.5 41.5V38.5H31.5V41.5H28.5ZM31.5 38.5V35.5H34.5V38.5H31.5ZM31.5 32.5V29.5H34.5V32.5H31.5ZM34.5 35.5V32.5H37.5V35.5H34.5Z" fill="#27272A"/>
                        </svg>                    
                    </div>
                </Link>
            </div>

            <div 
                className={`fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 z-10 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
            ></div>

            <div className={`fixed top-0 left-0 w-64 h-full  bg-bluesac z-20 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="pt-24 px-4 flex flex-col gap-4">
                    <a href="/" className="flex items-center gap-3 py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                        <img className="w-10 h-[40px]" src="/homeIcon.png" alt="Home" />
                        <span className="text-lg font-['Cera Pro']">Home</span>
                    </a>
                    <Link href="/record" className="flex items-center gap-3 py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                        <img className="w-12 h-[35px]" src="/AsistenciaIcon.png" alt="Asistencia" />
                        <span className="text-lg font-['Cera Pro']">Asistencia</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MiniNavbar;