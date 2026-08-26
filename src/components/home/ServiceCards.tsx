"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Code2, Layout, ShoppingCart, Settings, AppWindow, Palette, Code, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Web Development": <Code2 className="w-8 h-8 text-brand-primary" />,
  "WordPress Development": <Settings className="w-8 h-8 text-brand-primary" />,
  "Web Applications": <AppWindow className="w-8 h-8 text-brand-primary" />,
  "eCommerce Development": <ShoppingCart className="w-8 h-8 text-brand-primary" />,
  "UI/UX Design": <Layout className="w-8 h-8 text-brand-primary" />,
  "Graphic Design": <Palette className="w-8 h-8 text-brand-primary" />,
};

export default function ServiceCards() {
  const [dbServices, setDbServices] = useState<any[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('status', 'ACTIVE')
        .order('name', { ascending: true });
      
      if (data) setDbServices(data);
    }
    fetchServices();
  }, []);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-brand-primary font-bold tracking-wider text-sm mb-2 uppercase">Services</h3>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">What I Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I create digital solutions that combine clean design, modern technology and great user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {dbServices.map((service) => (
            <div 
              key={service.id}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 text-center group flex flex-col items-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dotted border-brand-primary/40 bg-white group-hover:bg-brand-primary/5 transition-colors">
                {iconMap[service.name] || <Briefcase className="w-8 h-8 text-brand-primary" />}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">{service.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {service.description || "Professional service offered by ShamilDev."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
