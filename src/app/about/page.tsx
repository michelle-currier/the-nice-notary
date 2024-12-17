"use client";

import Certs from "@/components/Certs";
import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});
export default function About() {
  return (
    <div className="section p-6 max-w-screen-lg">
      <div className="justify-start items-center">
        <h2 className={`text-4xl font-bold ${fauna.className}`}>About</h2>
      </div>
      <div className="justify-start items-center">
        <Certs />
      </div>
    </div>
  );
}
