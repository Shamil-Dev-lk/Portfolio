import Link from "next/link";
import { Rocket, ArrowRight, Code, Layout, Settings, ShoppingCart } from "lucide-react";
import fs from "fs";
import path from "path";

export default function Hero() {
  // Read CMS data
  const filePath = path.join(process.cwd(), "src/data/siteContent.json");
  let content = { heroTitle: "Building Digital Experiences That Make an Impact.", heroSubtitle: "I'm a Web Developer and Designer specializing in modern websites, web applications, eCommerce solutions, and creative digital experiences." };
  
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    // Strip BOM if present
    content = JSON.parse(fileContent.replace(/^\uFEFF/, ''));
  } catch (e) {
    console.error("Failed to parse site content:", e);
  }

  // We want to highlight the last word in green like "Impact."
  const titleWords = content.heroTitle.split(" ");
  const lastWord = titleWords.pop();
  const restOfTitle = titleWords.join(" ");

  return (
    <div className="relative isolate bg-white overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 sm:pb-16 sm:pt-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        {/* Left Content */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto lg:w-1/2 mb-10 lg:mb-0">
          <h3 className="text-brand-primary font-bold tracking-wider text-sm mb-4 uppercase">
            Hello, I&#39;m Shamil
          </h3>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]">
            {restOfTitle} <span className="text-brand-primary">{lastWord}</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-lg mb-8">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/booking"
              className="flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-dark transition-all"
            >
              Start a Project <Rocket className="h-4 w-4" />
            </Link>
            <Link 
              href="/dashboard" 
              className="flex items-center gap-2 rounded-md bg-white border-2 border-gray-200 px-6 py-3 text-sm font-bold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              Client Portal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="lg:flex-shrink-0 lg:flex-grow relative lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl transform hover:scale-105 transition-transform duration-700 ease-out">
             <img 
               src="/shamildev-crm/hero-graphic.jpg" 
               alt="Shamil Hero Graphic" 
               className="w-full h-auto object-contain" 
             />
          </div>
        </div>
      </div>
    </div>
  );
}
