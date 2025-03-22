
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Documentation = () => {
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
            <h1 className="text-3xl font-bold mb-3">Developer Documentation</h1>
            <p className="text-slate-600">
              Comprehensive guides and references for building AI agents on our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <motion.div 
              className="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#getting-started" className="text-blue-600 hover:underline">Getting Started</a>
                </li>
                <li>
                  <a href="#authentication" className="text-blue-600 hover:underline">Authentication</a>
                </li>
                <li>
                  <a href="#api-reference" className="text-blue-600 hover:underline">API Reference</a>
                </li>
                <li>
                  <a href="#sdk-guide" className="text-blue-600 hover:underline">SDK Guide</a>
                </li>
                <li>
                  <a href="#webhooks" className="text-blue-600 hover:underline">Webhooks</a>
                </li>
                <li>
                  <a href="#best-practices" className="text-blue-600 hover:underline">Best Practices</a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Tabs defaultValue="getting-started" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                  <TabsTrigger value="api-reference">API Reference</TabsTrigger>
                  <TabsTrigger value="sdk-guide">SDK Guide</TabsTrigger>
                </TabsList>
                
                <TabsContent value="getting-started" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h2 id="getting-started" className="text-2xl font-bold mb-4">Getting Started</h2>
                  <p className="mb-4">
                    Welcome to our AI Agents Platform. This guide will help you get started with building your own AI agents.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3">Prerequisites</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Basic knowledge of RESTful APIs</li>
                    <li>Programming experience in JavaScript, Python, or similar languages</li>
                    <li>An AI Agents Developer Account</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3">Installation</h3>
                  <pre className="bg-slate-100 p-4 rounded-md mb-4 overflow-x-auto">
                    <code>npm install @ai-agents/sdk</code>
                  </pre>
                  <pre className="bg-slate-100 p-4 rounded-md mb-4 overflow-x-auto">
                    <code>pip install ai-agents-sdk</code>
                  </pre>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3">Quick Start Example</h3>
                  <pre className="bg-slate-100 p-4 rounded-md mb-4 overflow-x-auto">
                    <code>{`
import { AIAgentsClient } from '@ai-agents/sdk';

// Initialize the client with your API key
const client = new AIAgentsClient('YOUR_API_KEY');

// Create a simple agent
const agent = await client.createAgent({
  name: 'My First Agent',
  description: 'A simple demo agent',
  category: 'chatbot',
  capabilities: ['text-response']
});

console.log('Agent created:', agent.id);
                    `}</code>
                  </pre>
                </TabsContent>
                
                <TabsContent value="api-reference" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h2 id="api-reference" className="text-2xl font-bold mb-4">API Reference</h2>
                  <p className="mb-6">
                    Complete reference documentation for our RESTful API endpoints.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="text-xl font-bold mb-3">Authentication</h3>
                      <p className="mb-2">
                        All API requests require authentication using your API key in the header:
                      </p>
                      <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                        <code>{`
Authorization: Bearer YOUR_API_KEY
                        `}</code>
                      </pre>
                    </div>
                    
                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="text-xl font-bold mb-3">Endpoints</h3>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">GET /agents</h4>
                        <p>Retrieve a list of all your agents.</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">POST /agents</h4>
                        <p>Create a new agent.</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">GET /agents/:id</h4>
                        <p>Retrieve a specific agent by ID.</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">PUT /agents/:id</h4>
                        <p>Update an existing agent.</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">DELETE /agents/:id</h4>
                        <p>Delete an agent.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="sdk-guide" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h2 id="sdk-guide" className="text-2xl font-bold mb-4">SDK Guide</h2>
                  <p className="mb-6">
                    Learn how to use our Software Development Kit (SDK) to integrate AI Agents into your applications.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">Installation</h3>
                  <p className="mb-4">Install the SDK using your preferred package manager:</p>
                  <pre className="bg-slate-100 p-4 rounded-md mb-6 overflow-x-auto">
                    <code>npm install @ai-agents/sdk</code>
                  </pre>
                  
                  <h3 className="text-xl font-bold mb-3">Basic Usage</h3>
                  <pre className="bg-slate-100 p-4 rounded-md mb-6 overflow-x-auto">
                    <code>{`
import { AIAgentsClient } from '@ai-agents/sdk';

// Initialize the client
const client = new AIAgentsClient('YOUR_API_KEY');

// Get all your agents
const agents = await client.getAgents();

// Get a specific agent
const agent = await client.getAgent('agent_id');

// Create a new agent
const newAgent = await client.createAgent({
  name: 'Customer Support Bot',
  description: 'Helps answer customer questions',
  category: 'chatbot',
  capabilities: ['text-response', 'image-recognition']
});
                    `}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
