"use client";
import { useState } from "react";

import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});

// type Status = {
//   type: "sucess" | "error" | "";
//   message: string;
// };

export default function OptPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubscription = async (action: "opt-in" | "opt-out") => {
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, action }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unknown error");
      }

      setStatus({ type: "success", message: data.message });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus({ type: "error", message: error.message });
      } else {
        setStatus({ type: "error", message: "An unknown error occured." });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1
        className={`text-3xl font-bold text-center text-white mb-8 basis-1/2 ${fauna.className}`}
      >
        Manage Your Subscription
      </h1>
      <div className="bg-white shadow-md p-6 rounded-md w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="my-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-black text-white w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md"
            onClick={() => handleSubscription("opt-in")}
          >
            Opt-In
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md"
            onClick={() => handleSubscription("opt-out")}
          >
            Opt-Out
          </button>
        </div>
        {status.message && (
          <p
            className={`mt-4 text-center ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}
