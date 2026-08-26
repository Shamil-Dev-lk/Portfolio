import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  }
];

export default function LatestArticles() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">Latest Articles</h2>
          <p className="text-lg text-gray-600">
            Insights, tips and resources
          </p>
        </div>
        <Link href="/blog" className="text-brand-primary font-semibold hover:text-brand-dark flex items-center gap-1">
          View All Articles <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 gap-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
