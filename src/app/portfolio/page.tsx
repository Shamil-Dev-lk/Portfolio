import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "TechFlow",
    category: "SaaS Platform",
    description: "A modern SaaS platform designed to help teams manage projects, track progress, and collaborate.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "ShopNest",
    category: "E-commerce Website",
    description: "A fully functional e-commerce store with product filtering, cart management, and secure checkout.",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "EduPlus",
    category: "Learning Platform",
    description: "An online learning management system for students and instructors with video course capabilities.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "HealthCare Pro",
    category: "Web Application",
    description: "A patient management system for clinics to schedule appointments and manage records.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "TravelMate",
    category: "Travel Booking",
    description: "A comprehensive travel booking engine with integrated maps and secure payment gateways.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "FoodHub",
    category: "Food Delivery App",
    description: "A modern food delivery platform connecting local restaurants with customers.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
  }
];

export default function PortfolioPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">My Portfolio</h1>
            <p className="text-lg text-gray-600">A collection of my best work across different industries.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-brand-primary text-white text-sm font-medium">All</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Web Development</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">UI/UX Design</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">E-commerce</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">WordPress</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg group cursor-pointer"
            >
              <div className="h-[240px] relative overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <p className="text-sm font-medium text-brand-primary mt-1">{project.category}</p>
                  </div>
                </div>
                <Link href={`/portfolio/${project.id}`} className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-brand-primary transition-colors">
                  View Project <span aria-hidden="true" className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
