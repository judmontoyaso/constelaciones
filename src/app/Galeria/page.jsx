"use client";
import Titulo from "../Components/Titulo";
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Galeria from "../Components/Galeria";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center p-24 w-full">
      <Titulo titulo={"Galeria"}></Titulo>
      <Galeria></Galeria>
    </main>
  );
}
