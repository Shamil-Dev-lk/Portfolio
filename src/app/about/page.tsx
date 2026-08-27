import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const journey = [
    { year: "2019", description: "Started my journey in web development and design." },
    { year: "2021", description: "Completed 20+ projects and worked with global clients." },
    { year: "2022", description: "Specialized in modern frameworks and UI/UX design." },
    { year: "2025", description: "Continuing to create innovative solutions for businesses." }
  ];

  const reasons = [
    "Clean & modern design",
    "Fast & reliable communication",
    "On-time delivery",
    "100% client satisfaction"
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">About Me</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Passionate Developer & Problem Solver</h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              I'm Shamil, a freelance web developer and UI/UX designer with 5+ years of experience helping businesses build modern, scalable and user-friendly digital products.
            </p>
            
            <div className="flex items-center gap-12 mb-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">5+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">50+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">30+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Happy Clients</span>
              </div>
            </div>

            <Link
              href="/resume.pdf"
              className="inline-block rounded-md bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all"
            >
              Download CV
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-xl border border-gray-100 relative">
              <img 
                src="/portfolio/about-portrait.jpg" 
                alt="Shamil - Web Developer" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-full" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 transform -rotate-6">
              <span className="text-brand-primary font-medium font-serif italic text-lg">Turning Ideas<br/>into Digital<br/>Solutions</span>
            </div>
          </div>
        </div>

        {/* Journey & Why Work With Me Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">My Journey</h3>
            <div className="relative border-l-2 border-brand-primary/20 ml-3 space-y-12">
              {journey.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-brand-primary border-4 border-white shadow-sm" />
                  <div className="font-bold text-gray-900 mb-2">{item.year}</div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Work With Me */}
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Work With Me?</h3>
            <ul className="space-y-6 mb-10">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/booking"
              className="block w-full text-center rounded-md bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all"
            >
              Hire Me
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
