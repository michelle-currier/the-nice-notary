import { TransitionLink } from "@/components/utils/TransitionLink";
import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="flex mx-auto justify-between max-w-7xl w-full">
      <div className="p-6">
        <TransitionLink href="/" aria-label="Home">
          <div className={`text-xl ${fauna.className}`}>The Nice Notary</div>
        </TransitionLink>
      </div>
      <nav className="flex justify-end">
        <ul className="flex space-x-4 m-6 font-semibold">
          <li className="border-transparent border hover:border hover:border-b-pink-400">
            <TransitionLink href="/services" aria-label="Services">
              Services
            </TransitionLink>
          </li>
          <li className="border-transparent border hover:border hover:border-b-pink-400">
            <TransitionLink href="/about" aria-label="About">
              About
            </TransitionLink>
          </li>
          <li className="border-transparent border hover:border hover:border-b-pink-400">
            <TransitionLink href="/contact" aria-label="Contact">
              Contact
            </TransitionLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
