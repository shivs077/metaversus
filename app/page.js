import { Navbar } from "@/components";
import { About, Explore, Hero } from "@/sections";
export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
    </div>
  );
}
