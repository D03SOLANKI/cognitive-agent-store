
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About AI Agents Store</h1>
              <p className="text-xl text-slate-600">
                The ultimate marketplace for discovering and deploying powerful AI solutions
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 rounded-2xl mb-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                <p className="text-lg text-slate-700 mb-8 text-center">
                  We're bridging the gap between AI innovation and real-world application by creating a centralized platform where businesses, developers, and individuals can discover, purchase, and deploy AI-driven solutions tailored to their specific needs.
                </p>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, staggerChildren: 0.2 }}
                >
                  {[
                    {
                      title: "For Businesses",
                      description: "Access powerful AI solutions to automate processes, gain insights, and enhance customer experiences."
                    },
                    {
                      title: "For Developers",
                      description: "A platform to showcase and monetize your AI innovations to a global audience."
                    },
                    {
                      title: "For Individuals",
                      description: "Discover AI tools that can simplify tasks, boost productivity, and enhance creativity."
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto">
                <p className="mb-4">
                  AI Agents Store was founded in 2023 by a team of AI enthusiasts and industry experts who recognized the need for a dedicated marketplace for AI solutions.
                </p>
                <p className="mb-4">
                  We observed that while AI technology was advancing rapidly, there was a significant gap between innovation and accessibility. Powerful AI solutions were being developed, but businesses and individuals often struggled to find, evaluate, and implement these solutions effectively.
                </p>
                <p className="mb-4">
                  Our vision was to create a platform similar to the Google Play Store, but specifically for AI agents - a one-stop marketplace where users could easily discover, try, and deploy AI solutions tailored to their specific needs.
                </p>
                <p className="mb-4">
                  Today, AI Agents Store hosts hundreds of AI solutions across various categories, serving thousands of businesses and individuals worldwide. We're proud to be at the forefront of making AI accessible to everyone.
                </p>
              </div>
            </div>
          </section>
          
          <section className="bg-blue-50 py-16 px-6 rounded-2xl mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {[
                  {
                    title: "Innovation",
                    description: "We're constantly pushing the boundaries of what's possible with AI."
                  },
                  {
                    title: "Accessibility",
                    description: "We believe powerful AI tools should be accessible to everyone."
                  },
                  {
                    title: "Quality",
                    description: "We maintain high standards for all AI agents on our platform."
                  },
                  {
                    title: "Security",
                    description: "We prioritize data privacy and security in everything we do."
                  }
                ].map((value, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              We're a diverse team of AI experts, developers, designers, and business strategists united by our passion for AI innovation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  name: "Sophia Patel",
                  role: "CTO",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                  name: "Marcus Johnson",
                  role: "Head of AI Research",
                  image: "https://randomuser.me/api/portraits/men/22.jpg"
                },
                {
                  name: "Emma Rodriguez",
                  role: "Head of Product",
                  image: "https://randomuser.me/api/portraits/women/29.jpg"
                }
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-slate-600 mb-8">
              Whether you're looking for AI solutions or want to showcase your AI innovations, we'd love to have you join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Link to="/search">Explore AI Agents</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Link to="/developers">For Developers</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
