import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/Howitworks";
import CTA from "./components/Cta";
import Footer from "./components/Footer";
import Solutions from "./components/Solutions";
import Mockup from "./components/Mockup";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <HowItWorks />
      <Mockup />
      <CTA />
      <Footer />
    </main>
  );
}
