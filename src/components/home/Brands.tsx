import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "Figma", icon: "F" },
    { name: "Notion", icon: "N" },
    { name: "Slack", icon: "#" },
    { name: "GitHub", icon: "G" },
    { name: "Google", icon: "G" },
    { name: "Upwork", icon: "U" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 mb-8">
          Trusted by amazing brands & startups
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-2 text-xl font-bold text-gray-800 cursor-default hover:text-brand-primary transition-colors">
               <div className="w-6 h-6 bg-gray-800 text-white rounded-md flex items-center justify-center text-xs">{brand.icon}</div>
               {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
