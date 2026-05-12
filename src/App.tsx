import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { About } from "./components/About";
import { Mission } from "./components/Mission";
import { Tutorials } from "./components/Tutorials";
import { Team } from "./components/Team";
import { Competition } from "./components/Competition";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="noise relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Mission />
        <Tutorials />
        <Team />
        <Competition />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
