import React from "react";
import Logo from "../../public/images/logo.png"


export default function NavBar(){
    return (
        <nav>
            <img src={Logo} id="logo"/>
        </nav>
    )
}