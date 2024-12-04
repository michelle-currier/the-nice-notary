import { Fauna_One } from "@next/font/google";
import Link from "next/link";
const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <div className="section p-6">
      <h1 className={`text-4xl my-8 font-center ${fauna.className}`}>404</h1>
      <h2 className={`text-3xl my-8 font-center ${fauna.className}`}>
        Page Not Found
      </h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Start here</Link>
    </div>
  );
}
