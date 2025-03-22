"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarButton from "./NavbarButton";

const Navbar: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div id="navbar-container" className={`flex h-[8vh] transition text-xl w-full content-center items-center justify-between ${isScrolling ? "bg-black text-white border-white" : "bg-transparent"}`}>
          <div className="hidden md:flex md:flex-row px-4 gap-4 md:w-fit md:h-fit">
            <NavbarButton text={"Inicio"} styling={""} imageUrl={"/homeIcon.png"} linkUrl={"/"} tStyling={""} width={45} height={90}/>
            <NavbarButton text={"Asistencia"} styling={""} imageUrl={"/AsistenciaIcon.png"} linkUrl={"/record"} tStyling={""} width={45} height={90}/>
          </div>

          <div className="md:hidden px-4">
            <button onClick={toggleMenu} className="flex flex-col justify-center items-center w-10 h-10 z-30">
              <span className={`block w-6 h-0.5 mb-1.5 transition-all ${isScrolling || isMenuOpen ? "bg-white" : "bg-black"}`}></span>
              <span className={`block w-6 h-0.5 mb-1.5 transition-all ${isScrolling || isMenuOpen ? "bg-white" : "bg-black"}`}></span>
              <span className={`block w-6 h-0.5 transition-all ${isScrolling || isMenuOpen ? "bg-white" : "bg-black"}`}></span>
            </button>
          </div>

          <div className="px-2">
            <Image className="transition-all duration-100 hover:scale-106" src={"/SACIcon.png"} alt={"Sac Icon"} width={100} height={100}/>
          </div>

          <div className="px-4">
            <NavbarButton 
              text={"Generar qr"} 
              styling={`md:border-2 md:border-black md:rounded-full md:px-8 md:py-1 ${isScrolling ? "bg-black text-white md:border-white" : ""}`} 
              imageUrl={"/QRLegoHead.svg"} 
              linkUrl={"/generateqr"} 
              tStyling={"hidden md:block text-2xl font-medium font-['Cera_Pro'] leading-normal"} 
              width={37} 
              height={85}
            />
          </div>
        </div>
      </header>

      <div className="h-[8vh]"></div>

      <div 
        className={`fixed inset-0 bg-transparent backdrop-blur-xs z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      ></div>

      <div className={`fixed top-0 left-0 w-64 h-full bg-bluesac text-black z-50 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="pt-24 px-4 flex flex-col gap-10">
          <div className="w-fit">        
            <NavbarButton text={"Inicio"} styling={""} imageUrl={"/homeIcon.png"} linkUrl={"/"} tStyling={""} width={45} height={90}/>
          </div>
          <div className="w-fit">        
            <NavbarButton text={"Asistencia"} styling={""} imageUrl={"/AsistenciaIcon.png"} linkUrl={"/record"} tStyling={""} width={45} height={90}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;