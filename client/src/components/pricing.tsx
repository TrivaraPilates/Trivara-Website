import { useFadeIn } from "../hooks/use-fade-in";
import Offerings from "./Offerings";

export default function Pricing() {
  const titleRef = useFadeIn();

  return (
    <section id="pricing" className="py-32 relative overflow-hidden" style={{
      backgroundImage: `url('/images/architectural-background.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="relative z-10">

        {/* Interactive Offerings Section */}
        <Offerings />
      </div>
    </section>
  );
}
