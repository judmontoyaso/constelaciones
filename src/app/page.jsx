import Image from "next/image";
import Layout from "./Layout";
import Titulo from "./Components/Titulo";

export default function Home() {
  const tittle = "Proyecto"; // Get the title from the h1 tag
  return (
    <main className="flex  flex-col items-center justify-center p-24">
      <Titulo titulo={"Proyecto"}></Titulo>
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
        Enfocado en maximizar la experiencia del cliente y la facilidad de uso a
        través de la implementación de tecnologías líderes en la industria que
        nos permiten crear y mantener aplicaciones personalizadas.
      </div>
    </main>
  );
}
