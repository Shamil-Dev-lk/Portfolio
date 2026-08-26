"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  const [dbProjects, setDbProjects] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('status', 'PUBLISHED')
        .order('created_at', { ascending: true });
      
      if (data) setDbProjects(data);
    }
    fetchProjects();
  }, []);

  // Duplicate projects to create a seamless infinite scrolling loop
  const loopProjects = [...dbProjects, ...dbProjects];

  return (
    <section id="projects" className="py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 text-center flex flex-col items-center">
        <h3 className="text-brand-primary font-bold tracking-wider text-sm mb-2 uppercase">Projects</h3>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl">Featured Projects</h2>
        <p className="mt-4 text-lg text-[#626762] max-w-2xl mx-auto">
          A selection of projects I&#39;ve designed and developed.
        </p>
      </div>

      <div className="relative w-full max-w-[100vw]">
        <div className="flex w-fit animate-infinite-scroll hover:[animation-play-state:paused]">
          {loopProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              className="w-[90vw] sm:w-[50vw] lg:w-[33.333vw] max-w-[500px] flex-shrink-0 px-4"
            >
              <div className="rounded-2xl border border-[#E3E6E3] bg-[#FFFFFF] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-primary/50 group flex flex-col h-full hover:-translate-y-1">
                
                <a 
                  href={project.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden bg-gray-100 aspect-video border-b border-[#E3E6E3] flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300">
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                  </div>
                  <img 
                    src={project.image || (project.link ? `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url` : '')}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                  />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-300 z-20"></div>
                </a>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-extrabold text-brand-primary uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  
                  <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="block group/link">
                    <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover/link:text-brand-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </a>
                  
                  {project.date && (
                    <p className="text-sm font-medium text-[#626762] mb-6 line-clamp-2 leading-relaxed flex-1">
                      {project.date}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-4 border-t border-[#E3E6E3]">
                    <a 
                      href={project.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-[#111111] group-hover:text-brand-primary transition-colors"
                    >
                      View Website <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {dbProjects.length === 0 && (
             <div className="w-full text-center py-12 text-gray-500">No featured projects yet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
