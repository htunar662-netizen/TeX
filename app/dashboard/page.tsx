"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import auth from "@/lib/auth";
import db from "@/lib/database";

export default function DashboardPage() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists()) {
          setUserData(snapshot.data());
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="
    min-h-screen
    bg-gradient-to-br
    from-slate-950
    via-blue-950
    to-black
    text-white
    px-6
    py-12
    ">
      <section className="max-w-6xl mx-auto">
        <div className="
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        p-8
        ">
          <h1 className="text-5xl font-black">
            Welcome
            {
              userData?.email
              ? ` ${userData.email}`
              : ""
            }
            👋
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            Your personal AI English learning dashboard.
          </p>
        </div>

        <div className="
        grid
        md:grid-cols-4
        gap-6
        mt-10
        ">
          <Card
            title="Level"
            value={userData?.level || "A1"}
          />

          <Card
            title="XP"
            value={userData?.xp || 0}
          />

          <Card
            title="Streak"
            value={`🔥 ${userData?.streak || 0}`}
          />

          <Card
            title="Words"
            value={userData?.words || 0}
          />
        </div>

        <div className="
        mt-10
        rounded-3xl
        bg-white/10
        border
        border-white/20
        p-8
        ">
          <h2 className="text-3xl font-bold">
            Today's Learning Plan 📚
          </h2>

          <div className="
          grid
          md:grid-cols-3
          gap-5
          mt-6
          ">
            <div className="rounded-2xl bg-black/30 p-5">
              🧠 Grammar Practice
            </div>

            <div className="rounded-2xl bg-black/30 p-5">
              📖 Vocabulary
            </div>

            <div className="rounded-2xl bg-black/30 p-5">
              🎙️ Speaking
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card(
  {
    title,
    value
  }:
  {
    title:string;
    value:any;
  }
) {
  return (
    <div className="
    rounded-3xl
    bg-white/10
    border
    border-white/20
    p-6
    ">
      <h2 className="text-gray-300">
        {title}
      </h2>

      <p className="
      text-4xl
      font-black
      text-cyan-400
      mt-3
      ">
        {value}
      </p>
    </div>
  );
}
