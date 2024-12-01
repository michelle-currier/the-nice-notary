"use cache";
import Image from "next/image";
import { Fauna_One } from "@next/font/google";
import image1 from "./../../public/images/notaryCert.jpg";

const certsInfo = [
  {
    name: "Notary Certification 2024",
    desc: "Expertly notarizing for all of your needs.",
    image: image1,
  },
];

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Certs() {
  return (
    <>
      <h2 className={`text-2xl my-8 font-bold ${fauna.className}`}>
        Some of the certifications I have are:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certsInfo.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl text-teal-600 font-semibold mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
