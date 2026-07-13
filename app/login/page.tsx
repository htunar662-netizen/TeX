"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white flex items-center justify-center px-6">

      <div className="
        w-full
        max-w-md
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        p-8
      ">

        <h1 className="text-4xl font-black text-center">
          Welcome to <span className="text-cyan-400">TeX</span> 🚀
        </h1>

        <p className="text-gray-300 text-center mt-4">
          Login and start learning English with AI.
        </p>


        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
          mt-8
          w-full
          rounded-xl
          bg-black/30
          border border-white/20
          px-5
          py-3
          text-white
          outline-none
          "
        />


        <button
          className="
          mt-5
          w-full
          rounded-xl
          bg-cyan-400
          py-3
          font-bold
          text-black
          hover:scale-105
          transition
          "
        >
          Continue
        </button>


      </div>

    </main>
  );
}
