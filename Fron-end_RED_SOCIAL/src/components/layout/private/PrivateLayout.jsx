import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { SideBar } from "./SideBar"


export const PrivateLayout = () => {
    return (
        <>
            {/* LAYOUT */}


            {/* CABECERA DE NAVEGACION */}
            <Header />

        
            {/* CONTENIDO PRINCIPAL */}
             <section className="layout__content">
                <Outlet></Outlet>
             </section>

            {/* barra lateral */}
            <SideBar/>

        </>

        

        
    )
}