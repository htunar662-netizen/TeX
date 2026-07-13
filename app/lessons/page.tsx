export default function LessonsPage() {
  const levels = [
    {
      title: "Beginner A1",
      icon: "🌱",
      text: "Learn basic words, simple sentences and everyday English."
    },
    {
      title: "Intermediate B1",
      icon: "🚀",
      text: "Improve grammar, vocabulary and real-life conversations."
    },
    {
      title: "Advanced C1",
      icon: "🏆",
      text: "Master advanced English, speaking skills and fluency."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white px-6 py-20">

      <section className="max-w-6xl mx-auto">

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-black">
            Learn English With 
            <span className="text-cyan-400"> TeX AI</span> 📚
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Personalized English lessons powered by artificial intelligence.
            Improve grammar, vocabulary, speaking and writing skills.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {levels.map((level) => (
            <div
              key={level.title}
              className="
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-8
              hover:scale-105
              transition
              duration-300
              "
            >

              <div className="text-5xl mb-5">
                {level.icon}
              </div>

              <h2 className="text-2xl font-black text-cyan-400">
                {level.title}
              </h2>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {level.text}
              </p>


              <button
                className="
                mt-6
                w-full
                rounded-xl
                bg-cyan-400
                py-3
                text-black
                font-bold
                hover:bg-cyan-300
                transition
                "
              >
                Start Lesson
              </button>

            </div>
          ))}

        </div>


        <div className="
          mt-14
          rounded-3xl
          bg-white/10
          border border-white/20
          backdrop-blur-xl
          p-8
          text-center
        ">

          <h2 className="text-3xl font-black">
            🤖 AI Personal Teacher
          </h2>

          <p className="mt-4 text-gray-300">
            TeX analyzes your mistakes, explains grammar and helps you speak English naturally.
          </p>

        </div>


      </section>

    </main>
  );
}
