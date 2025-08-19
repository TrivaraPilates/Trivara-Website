import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Philosophy from "@/components/philosophy";
import Classes from "@/components/classes";
import Events from "@/components/events";
import Community from "@/components/community";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import StickyBookButton from "@/components/sticky-book-button";

export default function Home() {
  return (
    <div className="bg-warm-beige">
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Classes />
      <Events />
      <Community />
      <Contact />
      <Footer />
      <StickyBookButton />
    </div>
  );
}
