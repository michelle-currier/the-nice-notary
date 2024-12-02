import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Services() {
  return (
    <div className="section p-6">
      <h1 className={`text-4xl my-8 ${fauna.className}`}>Notary Fees</h1>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="basis-1/3 rounded-md border border-slate-600 p-6">
          <ul className="leading-7">
            <li>
              <b className="text-xl text-teal-200">Signature Fees:</b>
            </li>
            <li>$20 for my signature/seal on a single document</li>
            <li>
              $10 for each additional document with the same signer per visit
            </li>
            <li>
              Mobile charges in New Orleans metro area: $0 to $20 depending on
              day/time/ location
            </li>
          </ul>
        </div>
        <div className="basis-1/3 rounded-md border border-slate-600 p-6">
          <ul className="leading-7">
            <li>
              <b className="text-xl text-purple-300">Printing/Scanning Fees:</b>
            </li>
            <li>$5 up to 20 pages</li>
            <li>Over 20 additional $0.20 per page</li>
            <li>Providing scanned copy of signed document, 1 page free</li>
            <li>Additional scanned pages, $0.50 per page</li>
          </ul>
        </div>
        <div className="basis-1/3 rounded-md border border-slate-600 p-6">
          <ul className="leading-7">
            <li>
              <b className="text-xl text-pink-300">
                Preparation of legal documents:
              </b>
            </li>
            <li>Power of attorney, $40</li>
            <li>Act of Sale (car), $20</li>
            <li>Contract, $60</li>
            <li>Will, $100</li>
            <li>Hourly rate, $50 per hour</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
