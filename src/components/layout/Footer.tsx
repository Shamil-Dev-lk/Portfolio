import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", icon: "in", color: "bg-[#0A66C2]" },
    { name: "GitHub", icon: "gh", color: "bg-[#181717]" },
    { name: "Facebook", icon: "fb", color: "bg-[#1877F2]" },
    { name: "Instagram", icon: "ig", color: "bg-[#E4405F]" },
    { name: "Upwork", icon: "up", color: "bg-brand-primary" }
  ];

  return (
    <footer className="bg-[#0B1215] text-white pt-16 pb-8 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Logo & Desc */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-brand-primary font-black text-xl leading-none tracking-tighter">
                &gt;&gt;
              </span>
              <span className="text-white font-bold text-xl tracking-tight">Shamil<span className="text-gray-300">Dev</span></span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Building modern digital experiences through design and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-sm mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-3">
              <Link href="#home" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> Home
              </Link>
              <Link href="#projects" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> Projects
              </Link>
              <Link href="#services" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> Services
              </Link>
              <Link href="#contact" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-sm mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> WordPress Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> eCommerce Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span> Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Me */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-sm mb-6">Follow Me</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a key={link.name} href="#" className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm hover:-translate-y-1 transition-transform ${link.color}`} title={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2026 ShamilDev. All Rights Reserved.
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <a href="#home" className="absolute bottom-8 right-6 lg:right-12 w-10 h-10 bg-brand-dark hover:bg-brand-primary transition-colors flex items-center justify-center rounded-sm">
        <ArrowUp className="w-5 h-5 text-white" />
      </a>
    </footer>
  );
}
