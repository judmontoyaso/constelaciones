"use client";
export default function Titulo({ titulo }) {
  return (
    <div className="w-full flex text-left mb-5 border border-transparent border-b-2 border-b-[#FBBF24] pb-2">
      <h1>{titulo}</h1>
    </div>
  );
}
