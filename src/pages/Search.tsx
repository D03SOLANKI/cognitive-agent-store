
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AgentCard from '@/components/agents/AgentCard';
import { Button } from '@/components/ui/button';
import { Agent, AgentCategory } from '@/types/agent';
import { getAllAgents } from '@/data/agents';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'All';
  
  const [agents, setAgents] = useState<Agent[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
    const allAgents = getAllAgents();
    setAgents(allAgents);
  }, []);

  useEffect(() => {
    const filterAgents = () => {
      let results = [...agents];
      
      // Filter by query
      if (query) {
        results = results.filter(
          agent => 
            agent.name.toLowerCase().includes(query.toLowerCase()) ||
            agent.description.toLowerCase().includes(query.toLowerCase()) ||
            agent.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
      }
      
      // Filter by category
      if (categoryParam && categoryParam !== 'All') {
        results = results.filter(agent => agent.category === categoryParam);
      }
      
      setFilteredAgents(results);
      setCurrentPage(1); // Reset to first page when filters change
    };
    
    filterAgents();
  }, [query, categoryParam, agents]);

  // Get current agents for pagination
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = filteredAgents.slice(indexOfFirstAgent, indexOfLastAgent);
  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);

  const categories: AgentCategory[] = ['All', 'Assistant', 'Chatbot', 'Trading', 'Automation', 'Healthcare', 'Content', 'Security', 'Education', 'Analytics'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-3">
              {query ? `Search Results: ${query}` : 
               categoryParam !== 'All' ? `Category: ${categoryParam}` : 
               'All AI Agents'}
            </h1>
            <p className="text-slate-600">
              {filteredAgents.length} {filteredAgents.length === 1 ? 'agent' : 'agents'} found
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm sticky top-24">
                <h2 className="font-medium text-lg mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={categoryParam === category ? "default" : "outline"}
                      className="w-full justify-start text-left"
                      asChild
                    >
                      <a href={`/search?${query ? `q=${query}&` : ''}category=${category}`}>
                        {category}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex-grow">
              {filteredAgents.length > 0 ? (
                <>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentAgents.map(agent => (
                      <AgentCard key={agent.id} agent={agent} />
                    ))}
                  </motion.div>
                  
                  {totalPages > 1 && (
                    <div className="mt-10">
                      <Pagination>
                        <PaginationContent>
                          {currentPage > 1 && (
                            <PaginationItem>
                              <PaginationPrevious 
                                href="#" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(prev => Math.max(prev - 1, 1));
                                  window.scrollTo(0, 0);
                                }} 
                              />
                            </PaginationItem>
                          )}
                          
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            // Show pages around current page
                            let pageToShow;
                            if (totalPages <= 5) {
                              pageToShow = i + 1;
                            } else if (currentPage <= 3) {
                              pageToShow = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageToShow = totalPages - 4 + i;
                            } else {
                              pageToShow = currentPage - 2 + i;
                            }
                            
                            return (
                              <PaginationItem key={pageToShow}>
                                <PaginationLink 
                                  href="#" 
                                  isActive={currentPage === pageToShow}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(pageToShow);
                                    window.scrollTo(0, 0);
                                  }}
                                >
                                  {pageToShow}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          })}
                          
                          {currentPage < totalPages && (
                            <PaginationItem>
                              <PaginationNext 
                                href="#" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                  window.scrollTo(0, 0);
                                }} 
                              />
                            </PaginationItem>
                          )}
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-slate-50 rounded-xl p-10 text-center">
                  <h3 className="text-xl font-medium mb-3">No agents found</h3>
                  <p className="text-slate-600 mb-6">
                    We couldn't find any agents matching your search criteria.
                  </p>
                  <Button asChild>
                    <a href="/search">View all agents</a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
