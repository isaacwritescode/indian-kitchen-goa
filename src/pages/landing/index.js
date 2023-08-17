import HeroSection from "./hero-section";
import Offerings from "./offerings";
import StatBlock from "./stat-block";
import Testimonials from "./testimonials";

export default function Landing() {
  return <>
    <HeroSection />
    <StatBlock />
    <Offerings />
    <Testimonials />
  </>
}