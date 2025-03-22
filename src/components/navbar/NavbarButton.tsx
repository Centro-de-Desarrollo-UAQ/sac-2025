import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarButtonprops{
    text ?: string,
    styling : string,
    imageUrl : string,
    linkUrl : string,
    tStyling : string,
    width: number,
    height : number
}

const NavbarButton = ({text, styling, imageUrl, linkUrl, width, height, tStyling}: NavbarButtonprops)=>{

    return(
        <Link href={linkUrl}>
            <div className={`w-fit uppercase h-fit self-stretch justify-start ${styling} items-center gap-2 flex transition-all duration-100 hover:scale-106`}>
                <Image src={imageUrl} alt="Picture of SAC" width={width} height={height} unoptimized={true}/>
                <div className={`${tStyling} font-normal font-['Cera Pro'] leading-normal`}>{text}</div>
            </div>
        </Link>
        )
}

export default NavbarButton;