
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SearchBar from '../ui/SearchBar';

const heroImages = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16 hero-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/90"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <motion.div 
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Discover Powerful{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              AI Agents
            </span>{' '}
            for Every Need
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-700 mb-8 max-w-3xl"
            variants={itemVariants}
          >
            The ultimate marketplace for AI-driven solutions. From virtual assistants to advanced analytics tools, find the perfect AI agent to transform your work and life.
          </motion.p>
          
          <motion.div 
            className="w-full max-w-2xl mb-12"
            variants={itemVariants}
          >
            <SearchBar expanded={true} className="mx-auto" />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-full max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {['230+ AI Agents', '50+ Categories', '100K+ Users', '24/7 Support'].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-blue-600">{item.split(' ')[0]}</p>
                <p className="text-sm text-slate-600">{item.split(' ').slice(1).join(' ')}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <ChevronDown className="h-10 w-10 text-blue-600" />
      </motion.div>
    </div>
  );
};

export default Hero;
