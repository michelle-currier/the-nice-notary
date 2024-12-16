import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TransitionButton } from "@/components/utils/TransitionButton";
import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="bg-[url('./../../public/images/pink_shotgun.webp')] bg-cover w-full">
      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col">
        <h1 className={`text-5xl font-bold drop-shadow-sm ${fauna.className}`}>
          Now open in New Orleans!
        </h1>
        <h2
          className={`text-3xl font-bold my-10 drop-shadow-sm text-teal-200 ${fauna.className}`}
        >
          MOBILE Notary for the greater New Orleans area. Notarize signatures
          and so much more!
        </h2>
        <div className="bg-purple-200 lg:bg-transparent rounded-md px-1 lg:px-0">
          <p className="text-lg mb-4 text-slate-700 ">
            Available nights and weekends too! I can print your document and
            come to you!{" "}
          </p>
          <p className="text-lg mb-4 text-slate-700">
            Email me below to schedule an appointment. <br /> Call or text at{" "}
            <a href="tel:504-500-3464">504-500-3464</a>
          </p>
        </div>
        <div className="flex flex-row mt-8 gap-4">
          <TransitionButton href="/contact">
            <button className="border hover:border-pink-400 bg-white text-teal-600 shadow-sm hover:bg-pink-100  font-semibold py-2 px-4 rounded-full inline-flex items-center hover:transition-all">
              Get in Touch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
          <TransitionButton href="/about">
            <button className="border hover:border-pink-400 bg-white text-teal-600 hover:bg-pink-100 font-semibold py-2 px-4 rounded-full inline-flex items-center">
              About
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
        </div>
      </div>
    </section>
  );
}
