"use client"


import Link from "next/link";
import { useState } from "react";

export default function Home() {
  
  const [nome, alteraNome] = useState("");

  function enviaFormulario(e){
    e.preventDefault();

    if(nome == "Vinicius"){
      alert("Parabéns, você digitou o nome mais lindo ")
    }else{
      alert("Você digitou algo errado,tente de novo...")
    }
   
  
  }

  return (
    <div>
      <h1> Aula de Publicação</h1>
      <p>Publicar um site na Versel usando NextJS e no Github Pages com arquivos estáticos </p>

      <Link href="teste"> Ir para a página de testes</Link>
  
    <form onSubmit={(e)=> enviaFormulario(e)}>

      <label>
        Digite seu nome
        <input onChange={ (e)=> alteraNome(e.target)}/>
        </label>

        <button> Enviar </button>
        
    </form>

    </div>
  );
}
