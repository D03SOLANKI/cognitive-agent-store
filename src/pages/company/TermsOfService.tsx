
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-3xl font-bold mb-3">Terms of Service</h1>
            <p className="text-slate-600">
              Last updated: June 1, 2023
            </p>
          </div>
          
          <motion.div 
            className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4">
                Welcome to AI Agents Store. These Terms of Service ("Terms") govern your access to and use of our website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-slate-600">
                Please read these Terms carefully. If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">2.1 Account Registration</h3>
                <p className="text-slate-600">
                  To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">2.2 Usage Restrictions</h3>
                <p className="text-slate-600 mb-2">
                  When using our Services, you agree not to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe the rights of others, including intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to any part of our Services</li>
                  <li>Use our Services to distribute malware or other harmful code</li>
                  <li>Interfere with or disrupt the integrity or performance of our Services</li>
                  <li>Use our Services to send unsolicited communications or advertisements</li>
                  <li>Scrape, crawl, or otherwise extract data from our Services without our prior written consent</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">2.3 API Usage and Rate Limits</h3>
                <p className="text-slate-600">
                  If you use our APIs, you agree to comply with our API documentation and any rate limits we impose. We reserve the right to modify or discontinue APIs at any time, with or without notice.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. AI Agents</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">3.1 Marketplace</h3>
                <p className="text-slate-600">
                  Our Services include a marketplace for AI agents created by us and third-party developers. We make no representations or warranties about the quality, accuracy, reliability, suitability, or availability of any AI agents offered through our marketplace.
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">3.2 Developer Submissions</h3>
                <p className="text-slate-600">
                  If you submit an AI agent to our marketplace, you represent and warrant that you have all necessary rights to do so and that your AI agent complies with our Developer Guidelines and these Terms.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">3.3 Usage of AI Agents</h3>
                <p className="text-slate-600">
                  You agree to use AI agents in accordance with any applicable terms and conditions, including any usage limitations or restrictions specified by the AI agent's developer or us.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">4.1 Our Intellectual Property</h3>
                <p className="text-slate-600">
                  Our Services and all content, features, and functionality thereof, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the design, selection, and arrangement thereof, are owned by us, our licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">4.2 License to Use</h3>
                <p className="text-slate-600">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use our Services for your personal or internal business purposes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">4.3 User Content</h3>
                <p className="text-slate-600">
                  By submitting content to our Services (including AI agents), you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform such content in connection with the Services and our business operations.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Payments and Billing</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">5.1 Fees</h3>
                <p className="text-slate-600">
                  Certain features of our Services may require payment of fees. All fees are non-refundable unless otherwise expressly stated or required by applicable law.
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">5.2 Subscriptions</h3>
                <p className="text-slate-600">
                  Some of our Services may be offered on a subscription basis. By subscribing, you authorize us to charge your payment method on a recurring basis. Subscriptions automatically renew until cancelled by you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">5.3 Developer Revenue Share</h3>
                <p className="text-slate-600">
                  If you are a developer and monetize your AI agent through our marketplace, you will receive a share of the revenue generated by your AI agent as specified in our Developer Agreement.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Disclaimers and Limitations of Liability</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">6.1 Disclaimers</h3>
                <p className="text-slate-600 uppercase font-semibold">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">6.2 Limitation of Liability</h3>
                <p className="text-slate-600 uppercase font-semibold">
                  In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Indemnification</h2>
              <p className="text-slate-600">
                You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of the Services or your violation of these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-slate-600">
                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-slate-600">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="text-slate-600">
                <p>AI Agents Store</p>
                <p>Email: legal@aiagents.com</p>
                <p>Address: 123 AI Street, San Francisco, CA 94105</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
