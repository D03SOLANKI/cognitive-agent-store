
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Define category data with icons and routes
const categories = [
  {
    id: 'assistants',
    name: 'Assistant',
    icon: '🤖',
    description: 'AI assistants for everyday tasks'
  },
  {
    id: 'chatbots',
    name: 'Chatbot', 
    icon: '💬',
    description: 'Interactive conversational agents'
  },
  {
    id: 'trading',
    name: 'Trading',
    icon: '📈',
    description: 'AI-powered trading and investment bots'
  },
  {
    id: 'automation',
    name: 'Automation',
    icon: '⚙️',
    description: 'Automate repetitive tasks and workflows'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'AI for medical and healthcare applications'
  },
  {
    id: 'content',
    name: 'Content',
    icon: '✍️',
    description: 'Content generation and creative AI'
  },
  {
    id: 'security',
    name: 'Security',
    icon: '🔒',
    description: 'Cybersecurity and fraud detection AI'
  },
  {
    id: 'education',
    name: 'Education',
    icon: '🎓',
    description: 'AI tools for learning and education'
  }
];

const Categories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Browse Categories</h2>
          <Link 
            to="/search" 
            className="text-blue-600 flex items-center hover:text-blue-800 font-medium"
          >
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to={`/category/${category.id}`}
                className="block bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md p-5 h-full transition-all"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-slate-600 text-sm">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
