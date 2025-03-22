
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  ShoppingCart, 
  Download, 
  Share2, 
  MessageSquare, 
  Tag, 
  AlertCircle, 
  FileText, 
  Bookmark,
  Check 
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Agent } from '@/types/agent';
import { getAgentById } from '@/data/agents';
import { useToast } from "@/hooks/use-toast";

const AgentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAgent = async () => {
      setIsLoading(true);
      if (id) {
        const agentData = getAgentById(id);
        if (agentData) {
          setAgent(agentData);
        }
      }
      setIsLoading(false);
    };

    fetchAgent();
  }, [id]);

  const handleAddToCart = () => {
    if (agent) {
      toast({
        title: "Added to cart",
        description: `${agent.name} has been added to your cart`,
      });
    }
  };

  const formatPrice = (pricing?: Agent['pricing']) => {
    if (!pricing) return '';
    if (pricing.model === 'Free') return 'Free';
    if (pricing.model === 'Freemium') return 'Freemium';
    
    return `${pricing.currency === 'USD' ? '$' : pricing.currency}${pricing.amount}${
      pricing.period ? `/${pricing.period}` : ''
    }`;
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 w-40 bg-slate-200 rounded mb-4"></div>
            <div className="h-4 w-60 bg-slate-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Agent Not Found</h2>
            <p className="text-slate-600 mb-6">The agent you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/" 
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Agents
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="aspect-video relative bg-slate-100">
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
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-1" />
                          <span className="font-medium">{agent.rating}</span>
                          <span className="text-slate-500 ml-1">({agent.reviewCount} reviews)</span>
                        </div>
                        <div className="text-slate-500">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            {agent.category}
                          </span>
                        </div>
                        <div className="text-slate-500 text-sm">
                          By <a href="#" className="text-blue-600 hover:underline">{agent.developer}</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline"
                        size="icon"
                        aria-label="Share"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline"
                        size="icon"
                        aria-label="Save"
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-b border-slate-200 mb-6">
                    <div className="flex overflow-x-auto hide-scrollbar">
                      {['overview', 'features', 'reviews', 'support'].map((tab) => (
                        <button
                          key={tab}
                          className={`px-5 py-3 text-sm font-medium capitalize whitespace-nowrap ${
                            activeTab === tab 
                              ? 'text-blue-600 border-b-2 border-blue-600' 
                              : 'text-slate-600 hover:text-blue-600'
                          }`}
                          onClick={() => setActiveTab(tab)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    {activeTab === 'overview' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-3">Description</h3>
                          <p className="text-slate-600 whitespace-pre-line">{agent.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-3">Tags</h3>
                          <div className="flex flex-wrap gap-2">
                            {agent.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'features' && (
                      <div className="space-y-6">
                        <p className="text-slate-600">
                          This tab would contain detailed features of the AI agent.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            'Advanced Natural Language Processing',
                            'Contextual Understanding',
                            'Multi-platform Integration',
                            'Customizable Responses',
                            'Real-time Learning',
                            'Secure Data Handling'
                          ].map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1">
                                <Check className="h-3 w-3 text-blue-600" />
                              </div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'reviews' && (
                      <div className="space-y-6">
                        <p className="text-slate-600">
                          This tab would contain user reviews of the AI agent.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-center text-slate-500">No reviews loaded in this demo</p>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'support' && (
                      <div className="space-y-6">
                        <p className="text-slate-600">
                          This tab would contain support information and documentation.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-center text-slate-500">Support information would be displayed here</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Pricing</span>
                    <span className="text-2xl font-bold text-blue-600">{formatPrice(agent.pricing)}</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-4">
                    {agent.pricing.model === 'Subscription' && 'Billed monthly. Cancel anytime.'}
                    {agent.pricing.model === 'Pay-per-use' && 'Pay only for what you use.'}
                    {agent.pricing.model === 'Freemium' && 'Free tier with premium features.'}
                    {agent.pricing.model === 'One-time' && 'One-time purchase, lifetime access.'}
                    {agent.pricing.model === 'Free' && 'No payment required.'}
                  </div>
                  <Button 
                    className="w-full h-12 text-base mb-3"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 text-base"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Try Demo
                  </Button>
                </div>
                
                <div className="border-t border-slate-200 pt-6 mb-6">
                  <h3 className="font-medium mb-4">Agent Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Version</span>
                      <span>3.5.2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Last Updated</span>
                      <span>June 10, 2023</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Category</span>
                      <span>{agent.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Compatibility</span>
                      <span>Web, Mobile, API</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Languages</span>
                      <span>English, Spanish</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="font-medium mb-4">Support Options</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact Developer
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Report an Issue
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Documentation
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <Tag className="h-4 w-4 mr-2" />
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgentDetails;
