"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import App from "./pullDiv";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-100 flex min-h-screen flex-col p-24">
      <div className="flex flex-row items-center ">
        <div className="w-1/2">
          <h1 className="font-bold text-4xl mb-10 ml-10">Pengespillvett</h1>
          <p className="ml-10">
            Pengespill er til glede for de fleste, men for noen er konsekvensene av pengespill negative. Vi ønsker at du er bevisst spillevanene dine, viser spillevett og tar forhåndsregler for å beholde god kontroll på spillingen din.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image alt="image" src="/slagord.png" draggable='false' width={400} height={400} className="mr-20 mt-20" />
        </div>
      </div>

      <App />

      <div className="bg-blue-300 w-full h-auto rounded-lg">
        <h1 className="mt-16 font-bold ml-4 text-2xl mb-6">Spilleproblemer i Norge</h1>
        <ul className="mb-8 ml-4">
          <li className="mb-4 text-gray-800">Noen personer kan oppleve problemer med pengespill. Dette kan gå utover økonomi, familie og jobb.</li>
          <li className="mb-4 text-gray-800">I Norge er det om lag 23 000 nordmenn som har problemer med pengespill, og rundt 93 000 har risiko for å få problemer med pengespill, viser en undersøkelse fra SPILLFORSK ved Universitetet i Bergen.</li>
          <li className="mb-4 font-semibold">Dette er problemspillerne</li>
          <li className="mb-4 text-gray-800">Menn med lav sosioøkonomisk status er ekstra utsatt for å få spilleproblemer viser undersøkelsen. Pengespillproblemer er hyppigst hos de med lav inntekt, lav utdannelse, de som står utenfor arbeidslivet eller har fødested utenfor Norge og særlig fra andre kontinent enn Europa. Undersøkelsen viser også at den største andelen av de som har pengespillproblemer er under 40 år.</li>
          <li className="mb-4 font-semibold">Spill med forhøyet risiko</li>
          <li className="mb-4 text-gray-800">Noen spill har egenskaper som gir en høyere risiko for at spillere kan utvikle problemer. Det gjelder i første rekke spill der du kan spille mange ganger på kort tid, for eksempel kasinospill.</li>
        </ul>
      </div>

    <div className="flex flex-col items-center">
      <div className="justify-center items-center flex flex-col bg-blue-300 w-1/2 h-80 rounded-b-lg">
        <h1 className="font-bold ml-4 text-4xl mb-2">Selvtest</h1>
        <p className="mt-4 font-semibold text-lg">Ta en selvtest for å finne ut om du er pengespillavhengig</p>

      <a href="/quiz">
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Test Deg Selv
        </motion.button>
        </a>
      </div>
    </div>
  </main>
  );
}
