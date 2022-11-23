import React from "react";
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="bg-cyan-300 w-screen h-screen flex justify-center items-center">
            <div className="w-96 h-auto bg-white rounded-lg px-3 py-10 flex flex-col gap-5 shadow-xl">
                <h2 className="font-semibold text-center text-3xl">Ações</h2>
                <Link className="text-center border-2 font-medium p-1 px-2 rounded-md transition-all border-cyan-500 hover:border-cyan-600" to={"/cadastro"}>Cadastrar Aluno</Link>
                <Link className="text-center border-2 font-medium p-1 px-2 rounded-md transition-all border-cyan-500 hover:border-cyan-600" to={"/buscar"}>Buscar Aluno</Link>
                <Link className="text-center border-2 font-medium p-1 px-2 rounded-md transition-all border-cyan-500 hover:border-cyan-600" to={"/listar"}>Listar Alunos</Link>
            </div>
        </div>
    )
}