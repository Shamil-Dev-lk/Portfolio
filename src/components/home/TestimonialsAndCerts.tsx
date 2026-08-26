"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function TestimonialsAndCerts() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: tData } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'PUBLISHED')
        .order('created_at', { ascending: false });
      
      if (tData) setTestimonials(tData);

      const { data: cData } = await supabase
        .from('certifications')
        .select('*')
        .eq('is_active', true)
        .order('date', { ascending: false });
        
      if (cData) setCertifications(cData);
    }
    fetchData();
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Testimonials (5 columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-brand-primary font-bold tracking-wider text-xs mb-2 uppercase">Testimonials</h3>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-8">What Clients Say</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm relative flex flex-col">
                  <Quote className="absolute top-4 right-4 text-gray-100 w-8 h-8 rotate-180" />
                  <p className="text-gray-600 text-[11px] leading-relaxed mb-4 relative z-10 flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < testimonial.rating ? 'fill-[#FACC15] text-[#FACC15]' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.clientName)}&background=random`} alt={testimonial.clientName} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{testimonial.clientName}</h4>
                      <p className="text-[10px] text-gray-500">{testimonial.role || testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {testimonials.length === 0 && (
                <p className="text-sm text-gray-500 italic col-span-2">No testimonials published yet.</p>
              )}
            </div>
          </div>

          {/* Certifications (7 columns) */}
          <div className="lg:col-span-7 flex flex-col lg:pl-4">
            <h3 className="text-brand-primary font-bold tracking-wider text-xs mb-2 uppercase">Certifications</h3>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-8">Certifications & Achievements</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col group">
                  <div className="bg-gray-50 p-4 border-b border-gray-100 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                     {/* Decorative certificate placeholder */}
                     <div className="w-[80%] h-[70%] bg-white border border-gray-200 shadow-sm rounded flex flex-col p-2 relative">
                        <div className="w-full border-b border-gray-200 pb-1 mb-1 flex justify-center"><div className="w-1/2 h-1 bg-gray-200 rounded-full"></div></div>
                        <div className="w-3/4 h-1 bg-gray-100 rounded-full mb-1"></div>
                        <div className="w-1/2 h-1 bg-gray-100 rounded-full mb-2"></div>
                        <div className="w-4 h-4 rounded-full bg-brand-primary/20 self-center mt-auto flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-brand-primary/50"></div>
                        </div>
                     </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="text-xs font-bold text-gray-900 mb-1 leading-tight flex-1">{cert.title}</h4>
                    <p className="text-[10px] text-gray-500 mb-4">{cert.issuer} &bull; {cert.date}</p>
                    {cert.link && (
                      <a href={cert.link} target="_blank" className="inline-flex items-center text-[11px] font-bold text-brand-primary hover:text-brand-dark transition-colors mt-auto">
                        View Certificate <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
              
              {certifications.length === 0 && (
                <p className="text-sm text-gray-500 italic col-span-4">No certifications added yet.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

