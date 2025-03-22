
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { agentCategories } from '@/data/agents';

const Categories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setMaxScroll(
        scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
      );
    }

    const handleResize = () => {
      if (scrollContainerRef.current) {
        setMaxScroll(
          scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
        );
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newPosition = 
        direction === 'left' 
          ? Math.max(0, scrollPosition - scrollAmount) 
          : Math.min(maxScroll, scrollPosition + scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Browse Categories</h2>
          <Link 
            to="/categories" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All
          </Link>
        </div>
        
        <div className="relative">
          {scrollPosition > 0 && (
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-slate-200 shadow-sm hover:bg-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>
          )}
          
          {scrollPosition < maxScroll && (
            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-slate-200 shadow-sm hover:bg-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          )}
          
          <motion.div 
            className="overflow-x-auto hide-scrollbar pb-4"
            ref={scrollContainerRef}
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex space-x-4 min-w-max">
              {agentCategories.map((category, index) => (
                <motion.div 
                  key={category.id}
                  className="category-item w-[240px] h-[180px] flex flex-col justify-center items-center p-6 text-center"
                  variants={itemVariants}
                >
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-slate-600">{category.count} Agents</p>
                  <Link
                    to={`/category/${category.id.toLowerCase()}`}
                    className="absolute inset-0"
                    aria-label={`Browse ${category.name}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
