
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

const SubmitAgent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your AI Agent submission has been received. We'll review it shortly!");
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
            <h1 className="text-3xl font-bold mb-3">Submit Your AI Agent</h1>
            <p className="text-slate-600 max-w-2xl">
              Complete the form below to submit your AI agent for review. Our team will evaluate your submission and get back to you within 3-5 business days.
            </p>
          </div>
          
          <motion.div 
            className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Agent Name</Label>
                <Input id="name" placeholder="Enter your AI agent name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="assistant">Virtual Assistants</SelectItem>
                    <SelectItem value="chatbot">Chatbots</SelectItem>
                    <SelectItem value="trading">Trading & Investment</SelectItem>
                    <SelectItem value="automation">Business Automation</SelectItem>
                    <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                    <SelectItem value="content">Content Generators</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your AI agent's functionality and use cases" rows={5} required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apiEndpoint">API Endpoint URL</Label>
                <Input id="apiEndpoint" placeholder="https://api.youragent.com/v1" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="demoLink">Demo Link (Optional)</Label>
                <Input id="demoLink" placeholder="https://demo.youragent.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Email</Label>
                <Input id="contact" type="email" placeholder="your@email.com" required />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full">Submit for Review</Button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitAgent;
