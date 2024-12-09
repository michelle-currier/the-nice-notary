// import React from "react";
// import { Card, CardContent, Typography, Grid } from "@mui/material";

const testimonials = [
  {
    name: "Aimee",
    role: "Client",
    testimonial:
      "Margaret was a delight to work with! She had immediate availability and drove to us on a Saturday to help us complete several docs we needed notarized. It was so very convenient to have her come to us, and she was professional, friendly, & charged a fair price. I will use her again for sure if I need notary services!",
  },
  {
    name: "Caroline",
    role: "Client",
    testimonial:
      "Best and Easiest Notary Experience Ever! Very nice and well prepared; also helped me understand and review my document. Extremely patient, comfortable and flexible!! 5 Stars 🌟🌟🌟🌟🌟!",
  },
  {
    name: "Joann",
    role: "Client",
    testimonial:
      "Extremely painless, easy, and fast experience. Was able to quickly schedule a time that was convenient for me. Also super affordable! 10/10 A+++++ notary!",
  },
];

const Testimonials = () => (
  <div className="mx-auto justify-between max-w-7xl w-full ">
    <hr className="border-teal-700 my-6 mx-auto w-full" />
    <h4 className="text-4xl font-bold text-center mb-8">Testimonials</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-[0px_9px_93px_10px_rgba(255,_52,_255,_0.2)] rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-2 text-teal-800">
            {item.name} - <i>{item.role}</i>
          </h3>
          <p className="text-gray-700">{item.testimonial}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
