
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AgentCard from '../agents/AgentCard';
import { Agent } from '@/types/agent';
import { getFeaturedAgents, getPopularAgents } from '@/data/agents';

interface FeaturedAgentsProps {
  title?: string;
  subtitle?: string;
  type?: 'featured' | 'popular';
}

const FeaturedAgents = ({ 
  title = "Featured AI Agents", 
  subtitle = "Discover our top-rated AI agents",
  type = 'featured'
}: FeaturedAgentsProps) => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchAgents = () => {
      if (type === 'featured') {
        setAgents(getFeaturedAgents());
      } else {
        setAgents(getPopularAgents());
      }
    };

    fetchAgents();
  }, [type]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {agents.map(agent => (
            <motion.div key={agent.id} variants={itemVariants}>
              <AgentCard agent={agent} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedAgents;
