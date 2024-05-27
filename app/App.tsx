"use client";

import { motion, Variants } from "framer-motion";

interface Props {
  text: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 500
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ text, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="overflow-hidden flex items-center justify-center relative pt-10 mb-[-50px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        className="absolute"
        style={{
          background,
          clipPath:
            "path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')"
        }}
      />
      <motion.div
        className="mt-28 text-[48px] w-[800px] h-[600px] flex bg-blue-300 rounded-[20px] shadow-[0_0_1px_hsl(0,0%,0%,0.075),0_0_2px_hsl(0,0%,0%,0.075),0_0_4px_hsl(0,0%,0%,0.075),0_0_8px_hsl(0,0%,0%,0.075),0_0_16px_hsl(0,0%,0%,0.075)] origin-[10%_60%] justify-center items-center"
        variants={cardVariants}
      >
        <div className="text-center mb-4">
          <h2 className="bold mb-4 font-semibold">{text}</h2>
          <ul className="text-xl mb-4 list-disc list-inside">
            <li>Ikke la barn være alene foran pc'n når du har spillsider åpne.</li>
            <li>Vær bevisst hvordan du snakker med barn om pengespill.</li>
            <li>Ikke tillat barn under 18 år å delta i noen former for pengespill. Dette gjelder også skrapelodd som Flax.</li>
            <li>Beskytt spillsider eller spillprogram med passord</li>
            <li>Oppbevar ditt brukernavn og passord utenfor barns rekkevidde.</li>
            <li>Du kan ta i bruk filter som blokkerer spillsider på internett. Gamban er et slikt filter.</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="mx-auto max-w-[900px] pb-[300px]">
      <Card text="Generelle tips" hueA={200} hueB={250} />
    </div>
  );
}
