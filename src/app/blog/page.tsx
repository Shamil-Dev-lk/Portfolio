import Link from "next/link";
import { Search } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "10 Tips to Improve Website Performance",
    category: "Development",
    date: "Apr 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Best UI/UX Design Trends for 2025",
    category: "Design",
    date: "Apr 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "How to Choose the Right Tech Stack",
    category: "Development",
    date: "Apr 2, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "SEO Best Practices for 2025",
    category: "Marketing",
    date: "Mar 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "How to Start Freelancing Successfully",
    category: "Business",
    date: "Mar 25, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "The Future of Web Development",
    category: "Development",
    date: "Mar 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800",
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Blog</h1>
            <p className="text-lg text-gray-600">Insights, tips and resources</p>
          </div>
          
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
             <input 
               type="text" 
               placeholder="Search articles..." 
               className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full md:w-[300px] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none"
             />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          <button className="px-4 py-2 rounded-full bg-brand-primary text-white text-sm font-medium">All</button>
          <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Development</button>
          <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Design</button>
          <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Business</button>
          <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Freelancing</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group cursor-pointer">
              <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md flex flex-col h-full">
                <div className="h-[200px] relative overflow-hidden bg-gray-100">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-gray-900">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="mt-auto flex items-center text-sm text-gray-500 gap-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
