"use client";

// import { faBars, faClose, faL } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import { Router, useRouter } from "next/router";
import { useState } from "react";
import ActiveRoute from "./ActiveRoute";
// import { useEnglish } from "./English";

export default function Titulo({ titulo }) {
  return (
    <div className="w-full flex text-left mb-5 border border-transparent border-b-2 border-b-[#FBBF24] pb-2">
      <h1>{titulo}</h1>
    </div>
  );
}
