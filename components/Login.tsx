"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../lib/auth";
import { doc, setDoc } from "firebase/firestore";
import db from "../lib/database";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 async function register(){

  try {

    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );


    await setDoc(
      doc(db, "users", result.user.uid),
      {
        email: email,
        level: "A1",
        xp: 0,
        streak: 0,
        words: 0,
        premium: false,
        createdAt: new Date()
      }
    );


    setMessage("🎉 Account created successfully!");


  } catch(error:any){

    setMessage(error.message);

  }

}

  return (
    <section className="px-6 py-20">
      <div className="
        max-w-xl
        mx-auto
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        p-8
      ">
        <h2 className="
          text-4xl
          font-black
          text-cyan-400
          mb-8
        ">
          🌍 Join TeX
        </h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
          w-full
          mb-4
          rounded-xl
          bg-black/40
          border
          border-white/20
          px-5
          py-3
          "
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
          w-full
          mb-4
          rounded-xl
          bg-black/40
          border
          border-white/20
          px-5
          py-3
          "
        />

        <button
          onClick={register}
          className="
          w-full
          bg-cyan-400
          text-black
          rounded-xl
          py-4
          font-bold
          text-xl
          hover:scale-105
          transition
          "
        >
          Create Account 🚀
        </button>

        <p className="mt-5 text-gray-300">
          {message}
        </p>
      </div>
    </section>
  );
}
