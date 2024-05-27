import Image from "next/image";
import Link from "next/link";

import App from "./App";
import motion from "framer-motion";


export default function Home() {
  return (
    <main className="bg-gray-100 flex min-h-screen flex-col p-24">
      <div className="flex flex-row items-center ">
        <div className="w-1/2">
          <h1 className="font-bold text-4xl mb-10 ml-10">Pengespillvett</h1>
          <p className="ml-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quaerat doloribus natus commodi, similique expedita asperiores adipisci possimus eveniet veniam ullam eaque dolorem officiis explicabo. Commodi reiciendis doloremque aperiam necessitatibus!</p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image alt="image" src="/slagord.png" draggable='false' width={400} height={400} className="mr-20 mt-20"></Image>
        </div>
      </div>
      <App></App>
    </main>
  );
}
