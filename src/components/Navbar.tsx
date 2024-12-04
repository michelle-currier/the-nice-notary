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
        <TransitionLink href="/">
          <div className={`text-xl ${fauna.className}`}>The Nice Notary</div>
        </TransitionLink>
      </div>
      <nav className="flex justify-end">
        <ul className="flex space-x-4 m-6">
          <li>
            <TransitionLink href="/services">Services</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/about">About</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/contact">Contact</TransitionLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
