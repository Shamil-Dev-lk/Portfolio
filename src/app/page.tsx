import Hero from "@/components/home/Hero";
import AboutMe from "@/components/home/AboutMe";
import ServiceCards from "@/components/home/ServiceCards";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";
import TestimonialsAndCerts from "@/components/home/TestimonialsAndCerts";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ServiceCards />
      <FeaturedProjects />
      <Skills />
      <TestimonialsAndCerts />
      <CTA />
      <Contact />
    </>
  );
}
