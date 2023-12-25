import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
