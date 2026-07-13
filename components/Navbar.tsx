"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">

      <div
        className="
        max-w-7xl mx-auto
        flex items-center justify-between
        rounded-2xl
        px-6 md:px-8
        py-4
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-xl
        "
      >

        {/* Logo */}

        <Link href="/">
          <h1
            className="
            text-3xl
            font-black
            text-cyan-400
            hover:scale-110
            transition
            "
          >
            TeX
          </h1>
        </Link>



        {/* Menu */}

        <nav
          className="
          hidden md:flex
          items-center
          gap-8
          text-gray-200
          font-medium
          "
        >

          <Link
            href="/"
            className="
            hover:text-cyan-400
            transition
            "
          >
            Home
          </Link>


          <Link
            href="/dashboard"
            className="
            hover:text-cyan-400
            transition
            "
          >
            AI Tutor
          </Link>


          <Link
            href="/features"
            className="
            hover:text-cyan-400
            transition
            "
          >
            Features
          </Link>


          <Link
            href="/premium"
            className="
            hover:text-cyan-400
            transition
            "
          >
            Pricing
          </Link>


        </nav>



        {/* Button */}

        <Link href="/login">

          <button
            className="
            rounded-xl
            bg-cyan-400
            px-6
            py-3
            font-black
            text-black
            hover:scale-105
            hover:shadow-lg
            transition
            "
          >
            Start Free 🚀
          </button>

        </Link>


      </div>

    </header>
  );
}
