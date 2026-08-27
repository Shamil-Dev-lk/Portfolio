"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ArrowRight } from "lucide-react";

export default function Skills() {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .eq('is_active', true)
        .order('level', { ascending: false });
      
      if (data) setSkills(data);
    }
    fetchSkills();
  }, []);

  const processSteps = [
    { num: "01", title: "Discover", desc: "I understand your goals, requirements and project needs." },
    { num: "02", title: "Design", desc: "I create the design and user experience that fits your brand." },
    { num: "03", title: "Develop", desc: "I build a fast, secure and scalable solution." },
    { num: "04", title: "Launch", desc: "I test, optimize and deliver the final product." },
  ];

  const techLogos = [
    { name: "HTML5", slug: "html5" },
    { name: "CSS3", slug: "css3" },
    { name: "JavaScript", slug: "javascript" },
    { name: "WordPress", slug: "wordpress" },
    { name: "Elementor", slug: "elementor" },
    { name: "WooCommerce", slug: "woocommerce" },
    { name: "Figma", slug: "figma" },
    { name: "Photoshop", slug: "photoshop" },
    { name: "Illustrator", slug: "illustrator" }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Skills Bars (25%) */}
          <div className="lg:col-span-1">
            <h3 className="text-brand-primary font-bold tracking-wider text-xs mb-2 uppercase">My Skills</h3>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-8">Skills & Expertise</h2>
            
            <div className="space-y-5">
              {skills.length === 0 ? (
                 <p className="text-sm text-gray-500 italic">No skills added yet.</p>
              ) : (
                skills.map(skill => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-bold text-gray-900 text-xs">{skill.name}</span>
                      <span className="text-gray-500 font-medium text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-brand-primary h-1.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Logos Grid (25%) */}
          <div className="lg:col-span-1 flex flex-col pt-14 lg:pt-16">
            <div className="grid grid-cols-3 gap-4 w-full">
              {techLogos.map((tech) => (
                <div key={tech.name} className="aspect-square bg-white border border-gray-100 rounded-xl flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow group flex-col gap-1">
                   <img 
                     src={`/portfolio/icons/${tech.slug}.svg`} 
                     alt={tech.name} 
                     className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300"
                   />
                </div>
              ))}
            </div>
          </div>

          {/* How I Work (50%) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-brand-primary font-bold tracking-wider text-xs mb-2 uppercase">Process</h3>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-12">How I Work</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-primary bg-white flex items-center justify-center text-brand-primary font-bold text-lg relative z-10 shadow-sm">
                      {step.num}
                    </div>
                    {/* Arrow connecting to next step (hidden on last item) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-8 w-16 text-gray-300 transform -translate-y-1/2 z-0">
                         <ArrowRight className="w-6 h-6 mx-auto text-brand-primary/40" />
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[140px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
