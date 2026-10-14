import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Arsenal } from "@/components/sections/Arsenal";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { profileData } from "@/data/profile";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.identity.name,
    jobTitle: profileData.identity.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: profileData.location.city,
      addressCountry: profileData.location.country,
    },
    url: "https://abushahed.dev",
    sameAs: profileData.socials.map((s) => s.url),
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Distributed Systems",
      "LLM Agents",
      "Vector Databases",
    ],
  };

  return (
    <>
      {/* Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Arsenal />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
