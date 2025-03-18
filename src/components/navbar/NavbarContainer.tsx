'use client'

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MiniNavbar from "./MiniNavbar";

export default function NavbarContainer(){

    return(
        <>
            <Navbar/>
            <MiniNavbar/>
        </>
    )
}