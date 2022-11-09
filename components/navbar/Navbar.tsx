import { Navbar } from "@nextui-org/react";
import {FC } from "react"

export const NavbarTest:FC = () =>{
    return(
        <Navbar>
             <Navbar.Content hideIn="xs">
                <Navbar.Link href="#">Test</Navbar.Link>
             </Navbar.Content>
             <Navbar.Content>
                <Navbar.Link isActive href="#">Favoritos</Navbar.Link>
             </Navbar.Content>
        </Navbar>
    )
}