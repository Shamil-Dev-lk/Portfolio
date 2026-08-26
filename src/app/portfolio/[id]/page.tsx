import Link from "next/link";
import { CheckCircle2, User, Layout, Clock, Wrench } from "lucide-react";

export default function CaseStudyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Case Study</h1>
          <h2 className="text-xl text-gray-600">TechFlow - SaaS Platform</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="TechFlow Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                TechFlow is a modern SaaS platform designed to help teams manage projects, track progress and collaborate more effectively. The goal was to create a clean, intuitive and scalable platform with a great user experience.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4 mb-12 list-none pl-0">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-gray-700">Modern & clean UI/UX design</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-gray-700">Real-time collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-gray-700">Secure authentication</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-gray-700">Customizable dashboards</span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-gray-100 mb-12 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">+120%</div>
                  <div className="text-sm font-medium text-gray-500 uppercase">User Engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">+85%</div>
                  <div className="text-sm font-medium text-gray-500 uppercase">Task Completion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">+100%</div>
                  <div className="text-sm font-medium text-gray-500 uppercase">Client Satisfaction</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video border border-gray-100 cursor-pointer hover:shadow-md transition-all">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Gallery 1" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video border border-gray-100 cursor-pointer hover:shadow-md transition-all">
                  <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Gallery 2" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video border border-gray-100 cursor-pointer hover:shadow-md transition-all">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Gallery 3" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all">
                  View Live Project &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 sticky top-32">
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Client</h4>
                    <p className="text-gray-600">TechFlow Inc.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Layout className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Category</h4>
                    <p className="text-gray-600">SaaS Platform</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Duration</h4>
                    <p className="text-gray-600">3 Weeks</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Tools</h4>
                    <p className="text-gray-600">Figma, React, Node.js</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
