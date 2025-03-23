
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Developers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCreateDevAccount = () => {
    if (!user) {
      // Redirect to sign up page if not logged in
      navigate('/signup');
      return;
    }
    
    // If already logged in but not as developer, navigate to profile to change settings
    if (profile && profile.user_type !== 'developer') {
      toast({
        title: "Update your account type",
        description: "You need to update your account to developer type in your profile settings.",
      });
      navigate('/profile?tab=settings');
      return;
    }
    
    // If already a developer, navigate to submit agent page
    if (profile && profile.user_type === 'developer') {
      navigate('/developers/submit');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Build & Monetize AI Agents</h1>
              <p className="text-xl text-slate-600">
                Join thousands of developers creating and selling AI agents on the leading AI marketplace
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <div className="flex-1 max-w-md">
                <motion.div 
                  className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
                  <ul className="space-y-4 mb-6">
                    {['Create a developer account', 'Read our documentation', 'Use our SDK & APIs', 'Submit your first agent'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" onClick={handleCreateDevAccount}>
                    {!user 
                      ? "Create Developer Account" 
                      : profile?.user_type === 'developer'
                        ? "Submit AI Agent"
                        : "Upgrade to Developer Account"}
                  </Button>
                </motion.div>
              </div>
              
              <div className="flex-1 max-w-md">
                <motion.div 
                  className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                  <ul className="space-y-4 mb-6">
                    {['70% revenue share', 'Reach millions of users', 'Analytics & insights', 'Developer support'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/developers/docs')}
                  >
                    Read Documentation
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
          
          <section className="bg-blue-50 py-16 px-6 rounded-2xl mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Build',
                    description: 'Create your AI agent using our APIs, SDKs, or integrations.'
                  },
                  {
                    step: '02',
                    title: 'Submit',
                    description: 'Submit your agent for review and approval to our marketplace.'
                  },
                  {
                    step: '03',
                    title: 'Monetize',
                    description: 'Set your pricing model and start earning revenue from users.'
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <div className="flex justify-center mb-4">
                      <span className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our growing community of AI developers and start monetizing your innovations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8"
                onClick={handleCreateDevAccount}
              >
                {!user 
                  ? "Create Developer Account" 
                  : profile?.user_type === 'developer'
                    ? "Submit AI Agent"
                    : "Upgrade to Developer Account"}
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Link to="/">Explore the Marketplace</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Developers;
