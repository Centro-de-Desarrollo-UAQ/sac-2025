'use client'

//Yay did it on my own :,)

import React, { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import NavbarButton from "./NavbarButton";

const MiniNavbar: React.FC = () => {
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
        <div id="navbar-container" className={`z-900 flex h-[8vh] transition text-xl w-full content-center items-center justify-between sticky top-0 ${isScrolling ? "bg-black text-white border-white" : "bg-transparent"}`}>
                
                <div className="hidden md:flex md:flex-row px-4 gap-4 md:w-fit md:h-fit">
                <NavbarButton text={"Inicio"} styling={""} imageUrl={"/homeIcon.png"} linkUrl={"/"} tStyling={""} width={45} height={90}/>
                <NavbarButton text={"Asistencia"} styling={""} imageUrl={"/AsistenciaIcon.png"} linkUrl={""} tStyling={""} width={45} height={90}/>
                </div>

                <div className="md:hidden">
                    x
                </div>

                <div className="px-2">
                    <Image className="transition-all duration-100 hover:scale-106" src={"/SACIcon.png"} alt={"Sac Icon"} width={100} height={100}/>
                </div>

                <div className="px-4">
                <NavbarButton text={"Generar qr"} styling={` md:border-2 md:border-black md:rounded-full md:px-8 md:py-1 $${isScrolling ? "bg-black text-white md:border-white" : ""}`} imageUrl={"/QRLegoHead.svg"} linkUrl={"/generateqr"} tStyling={"hidden md:block text-2xl font-medium font-['Cera_Pro'] leading-normal"} width={37} height={85}/>
                </div>
        </div>
                    
    );
}

export default MiniNavbar;