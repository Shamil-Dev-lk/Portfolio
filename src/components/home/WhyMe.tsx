import { Layout, MonitorSmartphone, Users, Headphones } from "lucide-react";

export default function WhyMe() {
  return (
    <section className="py-20 bg-[#07120B] border-y border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start lg:items-center">
          
          <div className="lg:w-1/4">
            <h3 className="text-brand-primary font-bold tracking-wider text-sm mb-2 uppercase">Why Me</h3>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Why Work With Me?</h2>
          </div>

          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-l border-gray-800 pl-8">
            <div>
              <Layout className="w-8 h-8 text-brand-primary mb-4" />
              <h4 className="text-white font-bold mb-2">Modern Design</h4>
              <p className="text-gray-400 text-sm">Clean, professional and user-friendly designs.</p>
            </div>
            <div>
              <MonitorSmartphone className="w-8 h-8 text-brand-primary mb-4" />
              <h4 className="text-white font-bold mb-2">Responsive</h4>
              <p className="text-gray-400 text-sm">Works perfectly on all devices and screen sizes.</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-brand-primary mb-4" />
              <h4 className="text-white font-bold mb-2">User Focused</h4>
              <p className="text-gray-400 text-sm">Solutions designed around real user needs.</p>
            </div>
            <div>
              <Headphones className="w-8 h-8 text-brand-primary mb-4" />
              <h4 className="text-white font-bold mb-2">Reliable Support</h4>
              <p className="text-gray-400 text-sm">I provide ongoing support even after delivery.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
