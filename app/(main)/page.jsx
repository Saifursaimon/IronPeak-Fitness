import About from "./About";
import CTA from "./CTA";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Programs from "./Programs";
import Whyus from "./Whyus";

export default function Home() {
  return (
    <div>
    <Hero/>
    <About/>
    <Programs/>
    <Whyus/>
    <Pricing/>
    <CTA/>
    </div>
  );
}
