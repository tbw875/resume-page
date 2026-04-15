import { Hero } from "@/components/sections/Hero";
import { CoreCompetencies } from "@/components/sections/CoreCompetencies";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreCompetencies />
      <TechnicalSkills />
      <Experience />
      <Contact />
    </>
  );
}
