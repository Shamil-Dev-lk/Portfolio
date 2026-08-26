import Link from "next/link";
import { Code2, Layout, ShoppingCart, Settings, Wrench, Laptop } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "Custom websites, web apps and modern web solutions.",
      icon: <Code2 className="w-8 h-8 text-brand-primary" />,
    },
    {
      id: 2,
      name: "UI/UX Design",
      description: "User-centered designs that drive engagement.",
      icon: <Layout className="w-8 h-8 text-brand-primary" />,
    },
    {
      id: 3,
      name: "E-commerce",
      description: "Build online stores that sell and scale.",
      icon: <ShoppingCart className="w-8 h-8 text-brand-primary" />,
    },
    {
      id: 4,
      name: "Website Maintenance",
      description: "Keep your site secure, fast and up to date.",
      icon: <Wrench className="w-8 h-8 text-brand-primary" />,
    },
    {
      id: 5,
      name: "WordPress Development",
      description: "Custom WordPress themes and plugins.",
      icon: <Settings className="w-8 h-8 text-brand-primary" />,
    },
    {
      id: 6,
      name: "Landing Page Design",
      description: "High-converting landing pages for your business.",
      icon: <Laptop className="w-8 h-8 text-brand-primary" />,
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Services</h1>
          <p className="text-xl text-gray-600">Professional solutions for your business</p>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            I offer a range of services to help you build, grow and maintain your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link href={`/booking?service=${service.id}`} className="text-sm font-semibold text-brand-primary hover:text-brand-dark flex items-center gap-1">
                Learn More <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
