import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const Landing =()=>{
    return(
        <div>
            <BrowserRouter>
            
                <Routes>
                    {/* <Route path="./" element={<Register/>} /> */}
                    <Route path="/" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}