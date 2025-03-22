
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI Agents in Business Automation",
      excerpt: "How AI agents are transforming business processes and creating new efficiencies across industries.",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      authorRole: "AI Research Lead",
      category: "Business",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Building More Human-Like Conversational AI",
      excerpt: "The latest advancements in natural language processing and how they're making AI conversations more natural.",
      date: "May 28, 2023",
      author: "Michael Chen",
      authorRole: "Lead Engineer",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
    },
    {
      id: 3,
      title: "Ethical Considerations in AI Development",
      excerpt: "Exploring the ethical challenges of AI and how developers can create responsible AI systems.",
      date: "May 12, 2023",
      author: "Elena Rodriguez",
      authorRole: "Ethics Director",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "How Healthcare Organizations Are Leveraging AI Agents",
      excerpt: "Case studies of healthcare providers using AI to improve patient care and operational efficiency.",
      date: "April 30, 2023",
      author: "Dr. James Wilson",
      category: "Healthcare"
    },
    {
      id: 5,
      title: "The Rise of Trading Bots: AI in Investment Markets",
      excerpt: "An overview of how AI is changing trading strategies and democratizing investment opportunities.",
      date: "April 22, 2023",
      author: "Amanda Patel",
      category: "Finance"
    },
    {
      id: 6,
      title: "Content Creation Revolution: AI Tools for Creators",
      excerpt: "How content creators are using AI to enhance their workflow and creative output.",
      date: "April 15, 2023",
      author: "Daniel Lee",
      category: "Content"
    },
    {
      id: 7,
      title: "The Technical Architecture Behind Modern AI Agents",
      excerpt: "A deep dive into the technical components that power today's most sophisticated AI systems.",
      date: "April 8, 2023",
      author: "Olivia Wright",
      category: "Technology"
    },
    {
      id: 8,
      title: "Privacy Considerations When Implementing AI",
      excerpt: "Best practices for maintaining user privacy while leveraging the power of artificial intelligence.",
      date: "April 1, 2023",
      author: "Thomas Garcia",
      category: "Privacy"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-3">Blog</h1>
            <p className="text-slate-600 max-w-2xl">
              Insights, news, and perspectives on AI agents and the future of artificial intelligence.
            </p>
          </div>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-xs text-slate-500">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">Read Article</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {recentPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  className="flex flex-col md:flex-row gap-4 md:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full mr-2">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 hover:text-blue-600 transition-colors">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="text-slate-600 text-sm mb-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-slate-500">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </section>
          
          <section className="bg-blue-50 p-8 rounded-xl">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-slate-600 mb-6">
                Get the latest articles, news, and insights on AI agents delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
