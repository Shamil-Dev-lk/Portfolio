import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-700 ease-out">
            <img src="/shamildev-crm/about-graphic.jpg" alt="About Shamil" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-brand-primary font-bold tracking-wider text-sm mb-2 uppercase">About Me</h3>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
            I&#39;m Shamil, a Developer and Designer
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I help businesses and individuals build modern, responsive and user-friendly websites and applications that deliver real results.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-primary" />
              <span className="font-semibold text-gray-800 text-sm">Web Development</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-primary" />
              <span className="font-semibold text-gray-800 text-sm">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-primary" />
              <span className="font-semibold text-gray-800 text-sm">WordPress Development</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-primary" />
              <span className="font-semibold text-gray-800 text-sm">Web Applications</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-primary" />
              <span className="font-semibold text-gray-800 text-sm">eCommerce Solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-primary" />
              <span className="font-semibold text-gray-800 text-sm">Graphic Design</span>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-dark transition-all"
          >
            More About Me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
