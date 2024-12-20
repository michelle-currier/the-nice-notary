"use cache";
import { useState } from "react";
import Image from "next/image";
import { Fauna_One } from "@next/font/google";
import image1 from "./../../public/images/notaryCert.jpg";
import image2 from "./../../public/images/Commission.jpg";
import image3 from "./../../public/images/certifiedNotary.png";

const certsInfo = [
  {
    name: "Notary Certification 2024",
    desc: "Expertly notarizing for all of your needs.",
    image: image1,
  },
  {
    name: "Commission Certificate",
    desc: "Commission Certificate",
    image: image2,
  },
  {
    name: "National Notary Association",
    desc: "Link to the signing agent information",
    image: image3,
    link: "https://www.signingagent.com/profile/161745133",
    linkText: "Certified Notary Details",
  },
];

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Certs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <h2 className={`text-2xl my-8 font-bold ${fauna.className}`}>
        Some of the certifications I have are:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certsInfo.map((item, index) => (
          <div
            key={index}
            className="bg-white border-teal-600 border shadow-[0px_9px_93px_10px_rgba(52,_255,_236,_0.2)]
            rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover cursor-pointer"
              onClick={() => openModal(item.image.src)} // Pass the image source
            />
            <div className="p-6">
              <h3 className="text-2xl text-teal-600 font-semibold mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
              <a href={item.link} target="_blank" className="text-teal-700">
                {item.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage || ""}
              alt="Selected Certification"
              className="rounded-lg"
              layout="intrinsic"
              width={1200}
              height={800}
              style={{
                maxWidth: "90vw", // Ensures the image does not exceed viewport width
                maxHeight: "90vh", // Ensures the image does not exceed viewport height
              }}
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
