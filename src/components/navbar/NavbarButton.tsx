import Image from "next/image";
import React from "react";

export default function NavbarButton(props){

    return(
        <div className="self-stretch justify-start items-center gap-2 flex ml-4 transition-all duration-100 hover:scale-106">
        <Image className="w-10 h-[36.67px]" src="/homeIcon.png" alt={""} />
        <div className="font-normal font-['Cera Pro'] leading-normal">INICIO</div>
    </div>
    )
}