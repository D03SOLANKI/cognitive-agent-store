
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from 'lucide-react';

const Guidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-3xl font-bold mb-3">Developer Guidelines</h1>
            <p className="text-slate-600">
              Important guidelines and best practices for developing AI agents on our platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-8">
              <Info className="h-4 w-4" />
              <AlertTitle>Important Notice</AlertTitle>
              <AlertDescription>
                Please read these guidelines carefully before submitting your AI agent to our marketplace. Non-compliant agents may be rejected or removed.
              </AlertDescription>
            </Alert>
            
            <motion.div 
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Content Guidelines</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Prohibited Content</h3>
                  <p className="mb-3">AI agents must not generate or promote:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Hate speech, discrimination, or content that promotes harm</li>
                    <li>Sexually explicit or adult content</li>
                    <li>Violence or graphic imagery</li>
                    <li>Illegal activities or content that violates laws</li>
                    <li>Misinformation or deceptive content</li>
                    <li>Content that violates intellectual property rights</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Data Privacy</h3>
                  <p className="mb-3">Your AI agent must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be transparent about data collection and usage</li>
                    <li>Comply with applicable privacy laws (GDPR, CCPA, etc.)</li>
                    <li>Properly secure user data</li>
                    <li>Allow users to request deletion of their data</li>
                    <li>Only collect data necessary for the agent's functionality</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Age Appropriate Content</h3>
                  <p className="mb-3">AI agents must be appropriate for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The age rating specified during submission</li>
                    <li>The target audience for your agent</li>
                  </ul>
                  <p>Agents with content suitable for all ages will have wider distribution in our marketplace.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Technical Guidelines</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">API Performance</h3>
                  <p className="mb-3">Your AI agent's API must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond within 5 seconds for most operations</li>
                    <li>Maintain 99.9% uptime</li>
                    <li>Handle at least 10 requests per second</li>
                    <li>Have proper error handling and graceful degradation</li>
                    <li>Include appropriate rate limiting</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Security Requirements</h3>
                  <p className="mb-3">Your AI agent must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use HTTPS for all communications</li>
                    <li>Implement proper authentication and authorization</li>
                    <li>Protect against common security vulnerabilities (XSS, CSRF, etc.)</li>
                    <li>Regularly update dependencies to address security issues</li>
                    <li>Follow secure coding practices</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Integration Standards</h3>
                  <p className="mb-3">Your AI agent should:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide clear and accurate documentation</li>
                    <li>Follow REST API best practices</li>
                    <li>Use JSON for request/response format</li>
                    <li>Include proper versioning</li>
                    <li>Implement webhooks for asynchronous operations when appropriate</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Submission Process</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Required Information</h3>
                  <p className="mb-3">When submitting your AI agent, you must provide:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Agent name and description</li>
                    <li>Category and tags</li>
                    <li>Screenshots and/or demo video</li>
                    <li>API documentation and endpoints</li>
                    <li>Privacy policy and terms of service</li>
                    <li>Support contact information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Review Process</h3>
                  <p className="mb-3">Our review process includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Initial submission screening (1-2 business days)</li>
                    <li>Technical review (3-5 business days)</li>
                    <li>Content and policy compliance review (2-3 business days)</li>
                    <li>Final approval or feedback for changes</li>
                  </ul>
                  <p>The entire process typically takes 7-10 business days.</p>
                </div>
                
                <div className="pt-4">
                  <Link 
                    to="/developers/submit" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Submit Your AI Agent
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

export default Guidelines;
