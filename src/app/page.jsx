import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center p-24">
      <div className="w-full flex text-left mb-5 border border-transparent border-b-2 border-b-[#FBBF24] pb-2">
        <h1>Proyecto</h1>
      </div>
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
        Enfocado en maximizar la experiencia del cliente y la facilidad de uso a
        través de la implementación de tecnologías líderes en la industria que
        nos permiten crear y mantener aplicaciones personalizadas.
      </div>
    </main>
  );
}
