
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedAgents from '@/components/home/FeaturedAgents';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Categories />
          
          <FeaturedAgents 
            title="Featured AI Agents" 
            subtitle="Discover our top-rated AI solutions for your needs"
            type="featured"
          />
          
          <FeaturedAgents 
            title="Popular Right Now" 
            subtitle="See what other users are loving"
            type="popular"
          />
          
          <section className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Experience with AI?
                </h2>
                <p className="text-xl text-slate-700 mb-8">
                  Join thousands of users leveraging AI agents to enhance productivity, automate tasks, and unlock new possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1 transition-all">
                    Browse All Agents
                  </button>
                  <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm">
                    For Developers
                  </button>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
