
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your support request has been submitted. We'll respond within 24 hours!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link to="/developers" className="text-blue-600 hover:text-blue-800 flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Developers
            </Link>
            <h1 className="text-3xl font-bold mb-3">Developer Support</h1>
            <p className="text-slate-600">
              We're here to help you build amazing AI agents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Chat</h3>
              <p className="text-slate-600 mb-6">
                Chat with our support team in real-time for quick assistance with your questions.
              </p>
              <Button variant="outline" className="w-full">Start Chat</Button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone Support</h3>
              <p className="text-slate-600 mb-6">
                Speak directly with our developer support specialists for complex issues.
              </p>
              <Button variant="outline" className="w-full">+1 (800) 555-1234</Button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Help Center</h3>
              <p className="text-slate-600 mb-6">
                Browse our comprehensive knowledge base of tutorials and guides.
              </p>
              <Button variant="outline" className="w-full">Visit Help Center</Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Developer Support</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="issueType">Issue Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="api">API Questions</SelectItem>
                      <SelectItem value="sdk">SDK Support</SelectItem>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="billing">Billing Questions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your issue in detail..." rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">Submit Support Request</Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Developer Resources</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                  <p className="text-slate-600 mb-4">
                    Find comprehensive guides and references for all aspects of the AI Agents platform.
                  </p>
                  <Link 
                    to="/developers/docs" 
                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                  >
                    View Documentation
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">API & SDK</h3>
                  <p className="text-slate-600 mb-4">
                    Access our powerful tools to build, integrate, and extend AI agents for your applications.
                  </p>
                  <Link 
                    to="/developers/api" 
                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                  >
                    Explore API & SDK
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Guidelines</h3>
                  <p className="text-slate-600 mb-4">
                    Learn about our platform's requirements, best practices, and submission process.
                  </p>
                  <Link 
                    to="/developers/guidelines" 
                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                  >
                    Read Guidelines
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Submit an AI Agent</h3>
                  <p className="text-slate-600 mb-4">
                    Ready to launch your AI agent? Submit it to our platform and reach millions of users.
                  </p>
                  <Link 
                    to="/developers/submit" 
                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                  >
                    Submit Your Agent
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
