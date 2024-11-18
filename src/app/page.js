import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import Team from "@/components/layout/Team";

export default function Home() {
  return (
    <>
    <Header color="bg-transparent" />
    <Hero />
    <About />
    <Team />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}
