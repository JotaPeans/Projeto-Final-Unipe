import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cadastro from "./routes/Cadastro";
import Home from "./routes/Home";
import Listar from "./routes/Listar";
import Buscar from "./routes/Buscar";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact index path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/listar" element={<Listar/>}/>
                <Route path="/buscar" element={<Buscar/>}/>
            </Routes>
        </BrowserRouter>
    )
}