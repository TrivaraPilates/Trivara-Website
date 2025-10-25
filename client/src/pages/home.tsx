import Navigation from "../components/navigation";
import Hero from "../components/hero";
import About from "../components/about";
import Philosophy from "../components/philosophy";
import Classes from "../components/classes";
import Pricing from "../components/pricing";
import Events from "../components/events";
import Instructors from "../components/instructors";
import InstagramGrid from "../components/instagram-grid";
import Wellness from "../components/wellness";
import Reviews from "../components/reviews";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-warm-beige">
      <Navigation />
      <Hero />
      {/* <About /> */}
      {/* <Philosophy /> */}
      {/* <Classes /> */}
      <Pricing />
      {/* <Events /> */}
      <Instructors />
      <InstagramGrid />
      <Reviews />
      <Wellness />
      <Contact />
      <Footer />
    </div>
  );
}
