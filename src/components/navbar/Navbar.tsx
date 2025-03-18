'use client'

import React, { useEffect, useState } from "react"
import Image from "next/image";
import GenerateQrButton from "./GenerateQRButton";

    const Navbar: React.FC = () => {
        const [isScrolling, setIsScrolling] = useState(false);  
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
    
    return(
        
        <div id="navbar-container" className={`z-10 overflow-hidden transition hidden text-xl md:flex w-full h-19 content-center items-center justify-between sticky top-0 ${isScrolling ? "bg-black text-white border-white" : "bg-transparent border-zinc-800"}`}>
            <div className="h-[55px] justify-start items-center gap-[37px] inline-flex">
                
                <a href="/">
                    <div className="self-stretch justify-start items-center gap-2 flex ml-4 transition-all duration-100 hover:scale-106">
                        <img className="w-10 h-[36.67px]" src="/homeIcon.png" />
                        <div className="font-normal font-['Cera Pro'] leading-normal">INICIO</div>
                    </div>
                </a>
            
                <a href="/record">
                    <div className="self-stretch justify-start items-center gap-2 flex transition-all duration-100 hover:scale-106">
                        <img className="w-10 h-[27.06px]" src="/AsistenciaIcon.png"/>
                        <div className="font-normal font-['Cera Pro'] leading-normal">ASISTENCIAS</div>
                    </div>
                </a>

            </div>
            <div className="w-fit h-fit self-center items-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-100 hover:scale-106">
                <Image src={"/SACIcon.png"} alt="Picture of SAC" width={100} height={100} unoptimized={true}/>
            </div>

            <a href="/generateqr">
                <div className="pl-10 transition-all duration-100 hover:scale-106">
                    <GenerateQrButton/>
                </div>
            </a>

        </div>
    );
}

export default Navbar;