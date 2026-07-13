export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-cyan-950 text-white px-6 py-20">

      <section className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center">

          <div className="
          inline-block
          rounded-full
          border
          border-cyan-400/40
          bg-cyan-400/10
          px-6
          py-2
          text-cyan-300
          ">
            🤖 TeX AI Premium
          </div>


          <h1 className="
          mt-8
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          ">

            Learn English
            <br />

            <span className="text-cyan-400">
              Like Never Before
            </span>

          </h1>


          <p className="
          mt-8
          text-xl
          text-gray-300
          max-w-3xl
          mx-auto
          ">

            Unlock your personal AI English teacher.
            Practice speaking, grammar and vocabulary with a
            smart learning system designed for students worldwide.

          </p>

        </div>



        {/* Plans */}

        <div className="
        grid
        md:grid-cols-3
        gap-8
        mt-20
        ">



          {/* Free */}

          <div className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          hover:scale-105
          transition
          ">


            <h2 className="text-3xl font-bold">
              Free
            </h2>


            <p className="mt-4 text-gray-400">
              Start your English journey.
            </p>


            <div className="
            mt-8
            text-5xl
            font-black
            ">
              $0
            </div>


            <ul className="
            mt-8
            space-y-4
            text-gray-300
            ">

              <li>✅ AI English Chat</li>
              <li>✅ Basic Grammar Help</li>
              <li>✅ Vocabulary Practice</li>
              <li>✅ Beginner Lessons</li>

            </ul>


            <button className="
            mt-10
            w-full
            rounded-xl
            border
            border-white/20
            py-4
            font-bold
            hover:bg-white/10
            transition
            ">
              Start Learning
            </button>


          </div>




          {/* Premium */}

          <div className="
          relative
          rounded-3xl
          border
          border-cyan-400
          bg-gradient-to-b
          from-cyan-400/20
          to-white/5
          backdrop-blur-xl
          p-8
          scale-105
          shadow-2xl
          ">


            <div className="
            absolute
            -top-5
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-cyan-400
            text-black
            px-6
            py-2
            font-bold
            ">
              MOST POPULAR
            </div>



            <h2 className="
            text-4xl
            font-black
            text-cyan-300
            ">
              Premium
            </h2>


            <p className="mt-4 text-gray-200">
              Become fluent faster with AI.
            </p>



            <div className="
            mt-8
            text-5xl
            font-black
            ">
              $9.99
              <span className="text-lg text-gray-300">
                /month
              </span>
            </div>



            <ul className="
            mt-8
            space-y-4
            ">

              <li>🚀 Unlimited AI Teacher</li>
              <li>🎙️ Speaking Practice</li>
              <li>🧠 Personal AI Learning Plan</li>
              <li>📚 Advanced Courses</li>
              <li>🏆 XP & Progress System</li>
              <li>🌍 Multi-language Support</li>

            </ul>


            <button className="
            mt-10
            w-full
            rounded-xl
            bg-cyan-400
            text-black
            py-4
            font-black
            text-lg
            hover:scale-105
            transition
            ">
              Unlock Premium 🚀
            </button>


          </div>




          {/* Enterprise */}

          <div className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          hover:scale-105
          transition
          ">


            <h2 className="
            text-3xl
            font-bold
            ">
              Enterprise
            </h2>


            <p className="
            mt-4
            text-gray-400
            ">
              For schools and organizations.
            </p>



            <ul className="
            mt-8
            space-y-4
            text-gray-300
            ">

              <li>🏫 School Accounts</li>
              <li>👥 Thousands of Students</li>
              <li>📊 Learning Analytics</li>
              <li>👨‍🏫 Teacher Dashboard</li>
              <li>🌎 Global Management</li>

            </ul>


            <button className="
            mt-10
            w-full
            rounded-xl
            border
            border-cyan-400
            py-4
            font-bold
            hover:bg-cyan-400
            hover:text-black
            transition
            ">
              Contact TeX
            </button>


          </div>


        </div>


      </section>


    </main>
  );
}
