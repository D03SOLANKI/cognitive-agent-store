
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import AgentDetails from "./pages/AgentDetails";
import Search from "./pages/Search";
import CategoryPage from "./pages/CategoryPage";
import Developers from "./pages/Developers";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Developer pages
import SubmitAgent from "./pages/developers/SubmitAgent";
import Documentation from "./pages/developers/Documentation";
import ApiSdk from "./pages/developers/ApiSdk";
import Guidelines from "./pages/developers/Guidelines";
import Support from "./pages/developers/Support";

// Company pages
import Careers from "./pages/company/Careers";
import Blog from "./pages/company/Blog";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import TermsOfService from "./pages/company/TermsOfService";
import Contact from "./pages/company/Contact";
import Cookies from "./pages/company/Cookies";

// User pages
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Category pages
import HealthcarePage from "./pages/HealthcarePage";
import ContentPage from "./pages/ContentPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Index />} />
            <Route path="/agent/:id" element={<AgentDetails />} />
            <Route path="/search" element={<Search />} />
            
            {/* Auth routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            
            {/* Category routes */}
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category/healthcare" element={<HealthcarePage />} />
            <Route path="/category/content" element={<ContentPage />} />
            
            {/* Developer routes */}
            <Route path="/developers" element={<Developers />} />
            <Route path="/developers/submit" element={<ProtectedRoute><SubmitAgent /></ProtectedRoute>} />
            <Route path="/developers/docs" element={<Documentation />} />
            <Route path="/developers/api" element={<ApiSdk />} />
            <Route path="/developers/guidelines" element={<Guidelines />} />
            <Route path="/developers/support" element={<Support />} />
            
            {/* Company routes */}
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookies" element={<Cookies />} />
            
            {/* User routes - protected */}
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
