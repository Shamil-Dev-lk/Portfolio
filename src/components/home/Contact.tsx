import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { name: "LinkedIn", icon: "in", color: "bg-[#0A66C2]" },
    { name: "GitHub", icon: "gh", color: "bg-[#181717]" },
    { name: "Facebook", icon: "fb", color: "bg-[#1877F2]" },
    { name: "Instagram", icon: "ig", color: "bg-[#E4405F]" },
    { name: "Dribbble", icon: "dr", color: "bg-[#EA4C89]" },
    { name: "Upwork", icon: "up", color: "bg-brand-primary" }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Optional subtle dot pattern background for the contact area */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: "radial-gradient(#14A800 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Contact Info (4 columns) */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-brand-primary font-bold tracking-wider text-xs mb-2 uppercase">Contact</h3>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Let&#39;s Work Together</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:shamildeveloperlk@gmail.com" className="text-sm text-gray-500 hover:text-brand-primary transition-colors">shamildeveloperlk@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+94761234567" className="text-sm text-gray-500 hover:text-brand-primary transition-colors">+94 76 123 4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-sm text-gray-500">Kurunegala, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div>
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                   <div className="bg-brand-primary rounded-sm"></div>
                   <div className="bg-brand-primary rounded-sm"></div>
                   <div className="bg-brand-primary rounded-sm"></div>
                   <div className="bg-brand-primary rounded-sm"></div>
                 </div>
                 <h4 className="text-xs font-bold text-gray-900">Follow Me</h4>
               </div>
               <div className="flex flex-wrap gap-2">
                 {socialLinks.map((link) => (
                   <a key={link.name} href="#" className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm hover:-translate-y-1 transition-transform ${link.color}`} title={link.name}>
                     {link.icon}
                   </a>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Column: Form (8 columns) */}
          <div className="lg:col-span-8 lg:pl-12">
            <form className="bg-white rounded-2xl p-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors" />
                </div>
                <div>
                  <select defaultValue="" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors appearance-none bg-white">
                    <option value="" disabled>Project Type</option>
                    <option value="web">Web Development</option>
                    <option value="wp">WordPress</option>
                    <option value="ui">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <textarea rows={6} placeholder="Your Message" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors resize-none"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-primary hover:bg-brand-dark transition-colors shadow-sm group">
                  Send Message <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
