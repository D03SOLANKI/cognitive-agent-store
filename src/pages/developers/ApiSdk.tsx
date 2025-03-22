
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Download, Server } from 'lucide-react';

const ApiSdk = () => {
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
            <h1 className="text-3xl font-bold mb-3">API & SDK</h1>
            <p className="text-slate-600">
              Powerful tools to build, integrate, and extend AI agents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-6">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">RESTful API</h2>
              <p className="text-slate-600 mb-6">
                Our comprehensive API gives you full access to the AI Agents platform, allowing you to create, manage, and deploy AI agents programmatically.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>JSON-based RESTful endpoints</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>Comprehensive authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>Webhooks for real-time events</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>Rate limits of 10,000 requests/hour</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">View API Documentation</Button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Software Development Kits</h2>
              <p className="text-slate-600 mb-6">
                Integrate AI Agents into your applications quickly with our language-specific SDKs. Available for multiple platforms and languages.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>JavaScript/TypeScript SDK</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>Python SDK</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>Java SDK</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-blue-600 mr-2">✓</span>
                  <span>C# SDK</span>
                </li>
              </ul>
              <Button className="w-full">Download SDKs</Button>
            </motion.div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">SDK Documentation</h2>
            
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="csharp">C#</TabsTrigger>
              </TabsList>
              
              <TabsContent value="javascript" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">JavaScript SDK</h3>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Latest version: v2.3.0</p>
                    <p className="text-sm text-slate-500">Released: June 15, 2023</p>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download SDK
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Installation</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>npm install @ai-agents/sdk</code>
                  </pre>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Basic Usage</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>{`
import { AIAgentsClient } from '@ai-agents/sdk';

// Initialize with your API key
const client = new AIAgentsClient('YOUR_API_KEY');

// Create a new agent
async function createAgent() {
  try {
    const agent = await client.createAgent({
      name: 'My Test Agent',
      description: 'A simple test agent',
      category: 'chatbot',
      capabilities: ['text-response']
    });
    
    console.log('Agent created:', agent);
  } catch (error) {
    console.error('Error creating agent:', error);
  }
}

createAgent();
                    `}</code>
                  </pre>
                </div>
              </TabsContent>
              
              <TabsContent value="python" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Python SDK</h3>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Latest version: v1.8.2</p>
                    <p className="text-sm text-slate-500">Released: May 22, 2023</p>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download SDK
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Installation</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>pip install ai-agents-sdk</code>
                  </pre>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Basic Usage</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>{`
from ai_agents import AIAgentsClient

# Initialize with your API key
client = AIAgentsClient('YOUR_API_KEY')

# Create a new agent
def create_agent():
    try:
        agent = client.create_agent(
            name='My Test Agent',
            description='A simple test agent',
            category='chatbot',
            capabilities=['text-response']
        )
        
        print(f'Agent created: {agent.id}')
    except Exception as e:
        print(f'Error creating agent: {e}')

create_agent()
                    `}</code>
                  </pre>
                </div>
              </TabsContent>
              
              <TabsContent value="java" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Java SDK</h3>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Latest version: v1.5.0</p>
                    <p className="text-sm text-slate-500">Released: April 10, 2023</p>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download SDK
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Installation</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>{`
// Maven
<dependency>
    <groupId>com.aiagents</groupId>
    <artifactId>ai-agents-sdk</artifactId>
    <version>1.5.0</version>
</dependency>

// Gradle
implementation 'com.aiagents:ai-agents-sdk:1.5.0'
                    `}</code>
                  </pre>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Basic Usage</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>{`
import com.aiagents.AIAgentsClient;
import com.aiagents.models.Agent;
import com.aiagents.requests.CreateAgentRequest;

public class AgentExample {
    public static void main(String[] args) {
        // Initialize with your API key
        AIAgentsClient client = new AIAgentsClient("YOUR_API_KEY");
        
        // Create a new agent
        try {
            CreateAgentRequest request = new CreateAgentRequest.Builder()
                .withName("My Test Agent")
                .withDescription("A simple test agent")
                .withCategory("chatbot")
                .withCapabilities(Arrays.asList("text-response"))
                .build();
                
            Agent agent = client.createAgent(request);
            System.out.println("Agent created: " + agent.getId());
        } catch (Exception e) {
            System.out.println("Error creating agent: " + e.getMessage());
        }
    }
}
                    `}</code>
                  </pre>
                </div>
              </TabsContent>
              
              <TabsContent value="csharp" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">C# SDK</h3>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Latest version: v1.2.1</p>
                    <p className="text-sm text-slate-500">Released: March 5, 2023</p>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download SDK
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Installation</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>Install-Package AIAgents.SDK -Version 1.2.1</code>
                  </pre>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Basic Usage</h4>
                  <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
                    <code>{`
using AIAgents.SDK;
using AIAgents.SDK.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize with your API key
        var client = new AIAgentsClient("YOUR_API_KEY");
        
        // Create a new agent
        try
        {
            var agent = await client.CreateAgentAsync(new CreateAgentRequest
            {
                Name = "My Test Agent",
                Description = "A simple test agent",
                Category = "chatbot",
                Capabilities = new List<string> { "text-response" }
            });
            
            Console.WriteLine($"Agent created: {agent.Id}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error creating agent: {ex.Message}");
        }
    }
}
                    `}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiSdk;
