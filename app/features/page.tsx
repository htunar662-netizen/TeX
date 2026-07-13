export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-cyan-950 text-white px-6 py-20">

      <section className="max-w-6xl mx-auto text-center">

        <h1 className="text-6xl font-black">
          TeX Powerful Features 🚀
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Everything you need to learn English faster with AI.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-16">


          <div className="bg-white/10 border border-white/20 rounded-3xl p-8">
            🤖
            <h2 className="text-2xl font-bold mt-4">
              AI Teacher
            </h2>
            <p className="mt-3 text-gray-300">
              Learn with your personal English AI teacher.
            </p>
          </div>


          <div className="bg-white/10 border border-white/20 rounded-3xl p-8">
            🎙️
            <h2 className="text-2xl font-bold mt-4">
              Speaking Practice
            </h2>
            <p className="mt-3 text-gray-300">
              Improve your pronunciation and conversation.
            </p>
          </div>


          <div className="bg-white/10 border border-white/20 rounded-3xl p-8">
            🌍
            <h2 className="text-2xl font-bold mt-4">
              Global Learning
            </h2>
            <p className="mt-3 text-gray-300">
              Students from every country can learn.
            </p>
          </div>


        </div>

      </section>

    </main>
  );
}
