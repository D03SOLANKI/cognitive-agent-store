
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Agent } from '@/types/agent';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if user is logged in
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in or create an account to add items to your cart",
        variant: "destructive"
      });
      navigate('/signin');
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${agent.name} has been added to your cart`,
    });
  };

  const formatPrice = (pricing: Agent['pricing']) => {
    if (pricing.model === 'Free') return 'Free';
    if (pricing.model === 'Freemium') return 'Freemium';
    
    return `${pricing.currency === 'USD' ? '$' : pricing.currency}${pricing.amount}${
      pricing.period ? `/${pricing.period}` : ''
    }`;
  };

  return (
    <motion.div 
      className="agent-card h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/agent/${agent.id}`} className="flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-slate-100">
          <div 
            className={`absolute inset-0 bg-slate-200 animate-pulse ${
              isImageLoaded ? 'hidden' : 'block'
            }`}
          />
          <img
            src={agent.imageUrl}
            alt={agent.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
          
          {(agent.featured || agent.popular || agent.new) && (
            <div className="absolute top-3 left-3 flex gap-2">
              {agent.featured && (
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
              {agent.popular && (
                <span className="px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                  Popular
                </span>
              )}
              {agent.new && (
                <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full">
                  New
                </span>
              )}
            </div>
          )}
          
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm border border-slate-200 transition-all duration-200 hover:scale-110"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4 text-blue-600" />
          </button>
        </div>
        
        <div className="flex flex-col flex-grow p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-lg line-clamp-1">{agent.name}</h3>
            <div className="flex items-center ml-2 bg-blue-50 px-2 py-0.5 rounded">
              <Star className="h-3 w-3 text-yellow-500 mr-1 flex-shrink-0" />
              <span className="text-sm font-medium">{agent.rating}</span>
            </div>
          </div>
          
          <p className="text-slate-600 text-sm mb-3 line-clamp-2 flex-grow">
            {agent.shortDescription}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
            <span className="text-sm text-slate-600">
              {agent.category}
            </span>
            <span className="font-medium text-blue-600">
              {formatPrice(agent.pricing)}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AgentCard;
