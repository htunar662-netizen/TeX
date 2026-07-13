"use client";

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import auth from "../lib/auth";
import db from "../lib/database";

export default function ProfileSetup() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [level, setLevel] = useState("A1");
  const [saving, setSaving] = useState(false);

  async function saveProfile() {
    const user = auth.currentUser;
    if (!user) {
      alert("Please sign in to save your profile.");
      return;
    }

    setSaving(true);
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name,
        country,
        level,
      });
      alert("Profile saved 🚀");
    } catch (error) {
      console.error("Failed to save profile:", error);
      alert("Unable to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="px-6 py-20">
      <div className="
        max-w-xl
        mx-auto
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-8
      ">
        <h2 className="
          text-3xl
          font-black
          text-cyan-400
          mb-6
        ">
          Create Your Profile 🌍
        </h2>

        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-black/40"
        />

        <input
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-black/40"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-black/40"
        >
          <option value="A1">A1 Beginner</option>
          <option value="A2">A2 Elementary</option>
          <option value="B1">B1 Intermediate</option>
          <option value="B2">B2 Upper Intermediate</option>
          <option value="C1">C1 Advanced</option>
        </select>

        <button
          type="button"
          onClick={saveProfile}
          disabled={saving}
          className="
            w-full
            bg-cyan-400
            text-black
            rounded-xl
            py-4
            font-bold
            disabled:opacity-50
          "
        >
          {saving ? "Saving..." : "Save Profile 🚀"}
        </button>
      </div>
    </section>
  );
}
