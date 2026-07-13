export default function Hero() {
  return (
    <section className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-6
    ">


      <div className="
        absolute
        w-96
        h-96
        bg-cyan-500/20
        blur-3xl
        rounded-full
      " />


      <h2 className="
        relative
        text-6xl
        md:text-8xl
        font-black
        leading-tight
      ">

        Learn English

        <br />

        <span className="
          text-cyan-400
        ">
          Smarter with AI
        </span>

      </h2>



      <p className="
        relative
        mt-8
        max-w-3xl
        text-xl
        text-gray-300
      ">

        TeX is your personal AI English teacher.
        Speak, practice and improve your English anytime.

      </p>



      <div className="
        relative
        mt-10
        flex
        gap-5
      ">


        <button className="
          bg-cyan-400
          text-black
          px-8
          py-4
          rounded-2xl
          font-bold
          text-xl
          hover:scale-105
          transition
        ">
          Start Learning
        </button>


        <button className="
          border
          border-cyan-400
          px-8
          py-4
          rounded-2xl
          font-bold
          text-xl
          hover:bg-cyan-400
          hover:text-black
          transition
        ">
          Watch Demo
        </button>


      </div>


    </section>
  );
}
