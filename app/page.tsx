import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChatWindow from "../components/ChatWindow";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import ProfileSetup from "../components/ProfileSetup";
export default function Home() {

  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      overflow-hidden
    ">

      <Navbar />

      <Hero />

      <ChatWindow />

      <Dashboard />

      <Login />

      <ProfileSetup />

    </main>

  );

}
