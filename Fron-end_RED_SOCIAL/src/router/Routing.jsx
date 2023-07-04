import React from "react"
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { PublicLayout } from "../components/layout/public/PublicLayout";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";
import { Login } from "../components/user/Login.JSX";
import { Register } from "../components/user/Register";
import { Feed } from "../components/publication/Feed";


export const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<PublicLayout/>}> 
                <Route index element={<Login/>}/>
                <Route path="login" element={<Login/>}></Route>
                <Route path="register" element={<Register/>}></Route>
            </Route>

            <Route path="/social"  element={<PrivateLayout/>}>
            <Route index element={<Feed/>}/>
            <Route path="feed" element={<Feed/>}/>
            </Route>



            <Route path="*"  element={
            <>
                     <p>
                        <h1>Error 404</h1>
                        <Link to="/">Volver al inicio</Link>
                   
                    </p>
                </>
            }/>

        </Routes>
        </BrowserRouter>
    )
} 