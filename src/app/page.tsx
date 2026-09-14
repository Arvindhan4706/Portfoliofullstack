import { Hero } from "@/components/sections/Hero";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <FeaturedWork />
      <Services />
      <Process />
      <WhyWorkWithMe />
      <About />
      <Contact />
    </>
  );
}
