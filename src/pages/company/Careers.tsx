
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Code, BookOpen, LineChart, BriefcaseBusiness } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time"
    },
    {
      title: "Product Manager, AI Marketplace",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote (Global)",
      type: "Full-time"
    },
    {
      title: "Developer Relations Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "Machine Learning Researcher",
      department: "Research",
      location: "Boston, MA",
      type: "Full-time"
    },
    {
      title: "Technical Support Engineer",
      department: "Customer Success",
      location: "Remote (US)",
      type: "Full-time"
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
            <h1 className="text-3xl font-bold mb-3">Careers</h1>
            <p className="text-slate-600 max-w-2xl">
              Join our team and help shape the future of AI. We're building the world's leading marketplace for AI agents.
            </p>
          </div>
          
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-4">Why Join Our Team?</h2>
                <p className="text-slate-600 mb-6">
                  We're a passionate team of engineers, designers, and AI enthusiasts working to democratize access to the most cutting-edge AI technology.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-0.5">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Collaborative Culture</h3>
                      <p className="text-slate-600 text-sm">Work alongside talented individuals in a supportive environment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-0.5">
                      <Code className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Cutting-Edge Technology</h3>
                      <p className="text-slate-600 text-sm">Build products using the latest advancements in AI and machine learning.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-0.5">
                      <LineChart className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Growth Opportunities</h3>
                      <p className="text-slate-600 text-sm">Develop your skills and advance your career in a rapidly evolving field.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-0.5">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Continuous Learning</h3>
                      <p className="text-slate-600 text-sm">Access to learning resources, conferences, and professional development.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </section>
          
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{position.title}</h3>
                      <p className="text-slate-600 text-sm">{position.department}</p>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <BriefcaseBusiness className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <MapPin className="h-4 w-4 text-slate-400 mr-2" />
                    <span className="text-sm text-slate-600">{position.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                    <Button variant="outline" size="sm">Apply Now</Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-slate-600 mb-4">Don't see the right position? Send us your resume anyway!</p>
              <Button>
                Submit General Application
              </Button>
            </div>
          </section>
          
          <section className="bg-blue-50 py-16 px-8 rounded-2xl mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Our Benefits</h2>
              <p className="text-slate-600 mb-8">
                We offer a comprehensive benefits package to support our team members' wellbeing.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                {[
                  { name: "Competitive Salary", icon: "💰" },
                  { name: "Remote-First Culture", icon: "🌍" },
                  { name: "Health Insurance", icon: "🏥" },
                  { name: "401(k) Matching", icon: "📈" },
                  { name: "Unlimited PTO", icon: "🏖️" },
                  { name: "Learning Stipend", icon: "📚" },
                  { name: "Home Office Budget", icon: "🏠" },
                  { name: "Mental Health Support", icon: "🧠" },
                  { name: "Team Retreats", icon: "✈️" }
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="text-3xl mb-2">{benefit.icon}</div>
                    <h3 className="font-medium text-sm">{benefit.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
