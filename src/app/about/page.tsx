"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
// import Cards from "@/components/Cards";
import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});
export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col">
      <div className="justify-start items-center p-6">
        <h2 className={`text-4xl font-bold ${fauna.className}`}>About</h2>
      </div>
      <div className="justify-start items-center p-6">
        <p>Add the certs and other credientials here!</p>
        <p>something goes up in here</p>
        <p>
          <a
            href="/"
            className="mt-8 bg-white text-teal-600 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          >
            Back to home
            <ArrowLeftIcon className="w-5 h-5 ml-2" />
          </a>
        </p>
      </div>
    </div>
  );
}
