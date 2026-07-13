export default function Dashboard() {
  return (
    <section className="px-6 py-20">

      <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-3
        gap-6
      ">


        {/* Level Card */}

        <div className="
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          p-8
        ">

          <h3 className="text-gray-300">
            English Level
          </h3>

          <p className="
            text-5xl
            font-black
            text-cyan-400
            mt-4
          ">
            B1
          </p>

          <p className="mt-3 text-gray-400">
            Intermediate
          </p>

        </div>



        {/* XP Card */}

        <div className="
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          p-8
        ">

          <h3 className="text-gray-300">
            Experience
          </h3>

          <p className="
            text-5xl
            font-black
            text-purple-400
            mt-4
          ">
            2450 XP
          </p>

          <p className="mt-3 text-gray-400">
            🔥 12 day streak
          </p>

        </div>



        {/* Words Card */}

        <div className="
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          p-8
        ">

          <h3 className="text-gray-300">
            Vocabulary
          </h3>

          <p className="
            text-5xl
            font-black
            text-green-400
            mt-4
          ">
            850
          </p>

          <p className="mt-3 text-gray-400">
            Words learned
          </p>

        </div>


      </div>



      {/* Daily Mission */}

      <div className="
        max-w-6xl
        mx-auto
        mt-8
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        p-8
      ">


        <h2 className="
          text-3xl
          font-black
          text-cyan-400
        ">
          🎯 Daily Mission
        </h2>


        <div className="mt-6 space-y-4">


          <div className="
            bg-black/30
            rounded-xl
            p-4
          ">
            ✅ Learn 10 new words
          </div>


          <div className="
            bg-black/30
            rounded-xl
            p-4
          ">
            ✅ Practice speaking 5 minutes
          </div>


          <div className="
            bg-black/30
            rounded-xl
            p-4
          ">
            ⏳ Complete one grammar lesson
          </div>


        </div>


      </div>


    </section>
  );
}
