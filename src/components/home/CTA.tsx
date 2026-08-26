import { Send, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-[#F3F9F4] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#E6F3E8]">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-md transform -rotate-12">
              <Send className="w-8 h-8 text-white fill-white" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Have a Project in Mind?</h2>
              <p className="text-gray-600 text-sm">Let&#39;s turn your idea into a modern digital experience.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a href="#contact" className="flex-1 md:flex-none inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-primary hover:bg-brand-dark transition-colors shadow-sm whitespace-nowrap group">
              Start a Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="flex-1 md:flex-none inline-flex justify-center items-center px-6 py-3 border border-gray-200 text-sm font-bold rounded-lg text-gray-900 bg-white hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap group">
              Let&#39;s Talk <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
