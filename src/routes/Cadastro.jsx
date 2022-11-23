import React from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-cyan-300">
            <div className="w-96 h-auto bg-white rounded-lg px-3 py-10 shadow-xl flex flex-col justify-center gap-10">
                <div className="flex justify-around items-center">
                    <h2 className=" font-semibold text-center text-3xl">Cadastro</h2>
                    <Link className="border-2 font-medium p-1 px-2 rounded-md transition-all border-cyan-500 hover:border-cyan-600" to={"/"}>Início</Link>
                </div>
                <form className="flex flex-col gap-5" action="">
                    <input type="text" placeholder="Nome" className="border-2 px-2 py-1 w-full rounded-md"/>
                    <input type="text" placeholder="Matrícula" className="border-2 px-2 py-1 w-full rounded-md"/>
                    <input type="text" placeholder="Nota 1" className="border-2 px-2 py-1 w-full rounded-md"/>
                    <input type="text" placeholder="Nota 2" className="border-2 px-2 py-1 w-full rounded-md"/>
                    <input type="submit" value="Registrar" className=" bg-orange-500 hover:bg-orange-600 hover:cursor-pointer transition-all text-white font-medium p-1 rounded-lg mt-2" />
                </form>
            </div>
        </div>
    )
}