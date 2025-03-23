
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AgentCard from '@/components/agents/AgentCard';
import { Agent, AgentCategory } from '@/types/agent';
import { getAllAgents } from '@/data/agents';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchAgents = () => {
      const allAgents = getAllAgents();
      if (category) {
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1) as AgentCategory;
        const filteredAgents = allAgents.filter(agent => agent.category === categoryName);
        setAgents(filteredAgents);
      }
    };

    fetchAgents();
  }, [category]);

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
            <h1 className="text-3xl font-bold mb-3">
              {category && category.charAt(0).toUpperCase() + category.slice(1)} AI Agents
            </h1>
            <p className="text-slate-600">
              Discover the best {category} AI agents for your needs
            </p>
          </div>
          
          {agents.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {agents.map(agent => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </motion.div>
          ) : (
            <div className="bg-slate-50 rounded-xl p-10 text-center mb-12">
              <h3 className="text-xl font-medium mb-3">No agents found</h3>
              <p className="text-slate-600 mb-6">
                We couldn't find any agents in this category.
              </p>
              <Link 
                to="/search" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Browse all agents
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
