import { Inter } from "next/font/google";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import { lorem } from "../utils/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-7xl px-8 md:px-16 m-auto space-y-32 ">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
