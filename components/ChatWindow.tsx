"use client";

import { useState } from "react";

export default function ChatWindow(){

  const [message,setMessage] = useState("");
  const [reply,setReply] = useState("");
  const [loading,setLoading] = useState(false);

  async function sendMessage(){

    if(!message) return;

    setLoading(true);

    const response = await fetch("/api/chat",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message
      })
    });

    const data = await response.json();

    setReply(data.reply);

    setLoading(false);

  }

  return (

    <section className="px-6 py-20">

      <div className="
      max-w-3xl
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
          🤖 TeX AI Teacher
        </h2>

        <textarea

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          placeholder="Ask your English question..."

          className="
          w-full
          h-32
          rounded-xl
          bg-black/40
          p-4
          mb-4
          "

        />

        <button

          onClick={sendMessage}

          className="
          bg-cyan-400
          text-black
          px-8
          py-3
          rounded-xl
          font-bold
          "

        >

          {loading ? "Thinking..." : "Ask TeX 🚀"}

        </button>

        <div className="
        mt-6
        text-gray-200
        whitespace-pre-wrap
        ">

          {reply}

        </div>

      </div>

    </section>

  );

}
