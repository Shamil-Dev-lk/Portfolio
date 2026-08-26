import { Briefcase, Users, Star, Smile } from "lucide-react";

export default function Stats() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-30 -mt-8 sm:-mt-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="text-brand-primary">
            <Briefcase className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Projects Completed</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-brand-primary">
            <Users className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">20+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Happy Clients</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-brand-primary">
            <Star className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">3+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years Experience</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-brand-primary">
            <Smile className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">98%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}
