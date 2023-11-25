import React from "react";
import Navbar from "../Components/NavBar";
import Titulo from "../Components/Titulo";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center p-24">
      <Titulo titulo={"Fundación"}></Titulo>
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
        Enfocado en maximizar la experiencia del cliente y la facilidad de uso a
        través de la implementación de tecnologías líderes en la industria que
        nos permiten crear y mantener aplicaciones personalizadas.
      </div>
    </main>
  );
}
