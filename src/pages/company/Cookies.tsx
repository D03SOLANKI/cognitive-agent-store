
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Cookies = () => {
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
            <h1 className="text-3xl font-bold mb-3">Cookie Policy</h1>
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
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-slate-600 mb-4">
                AI Agents Store ("we," "our," or "us") uses cookies and similar technologies on our website. This Cookie Policy explains how we use cookies, how they work, and your choices regarding their use.
              </p>
              <p className="text-slate-600">
                By using our website, you consent to the use of cookies as described in this Cookie Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-slate-600 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p className="text-slate-600">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-slate-600 mb-4">
                We use cookies for various purposes, including:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-slate-600">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and shopping cart functionality. The website cannot function properly without these cookies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analytical/Performance Cookies</h3>
                  <p className="text-slate-600">
                    These cookies allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works, for example, by ensuring that users find what they are looking for easily.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
                  <p className="text-slate-600">
                    These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Targeting/Advertising Cookies</h3>
                  <p className="text-slate-600">
                    These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-slate-600 mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These cookies may include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Google Analytics cookies for website traffic analysis</li>
                <li>Google AdSense cookies for targeted advertising</li>
                <li>Facebook Pixel for advertising and analytics</li>
                <li>HubSpot for customer relationship management</li>
                <li>Intercom for customer support chatbot functionality</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Cookie Choices</h2>
              <p className="text-slate-600 mb-4">
                You have several options to manage your cookie preferences:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Browser Settings</h3>
                  <p className="text-slate-600">
                    Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. To understand these settings, the following links may be helpful:
                  </p>
                  <ul className="list-disc pl-6 text-slate-600 mt-2 space-y-1">
                    <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings in Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings in Firefox</a></li>
                    <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings in Microsoft Edge</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings in Safari</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Opt-Out Programs</h3>
                  <p className="text-slate-600">
                    You can opt out of targeted advertising by using the following links:
                  </p>
                  <ul className="list-disc pl-6 text-slate-600 mt-2 space-y-1">
                    <li><a href="https://optout.aboutads.info/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
                    <li><a href="https://optout.networkadvertising.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
                    <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cookie Preference Tool</h3>
                  <p className="text-slate-600">
                    We provide a cookie preference tool on our website that allows you to customize your cookie settings. You can access this tool by clicking on the "Cookie Settings" button at the bottom of our website.
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 mt-4">
                Please note that restricting cookies may impact the functionality of our website. If you disable cookies, you may not be able to use some of the features on our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Cookie Policy</h2>
              <p className="text-slate-600">
                We may update this Cookie Policy from time to time to reflect changes in technology, our business operations, or legal requirements. Any changes will be posted on this page with an updated revision date. If we make significant changes to this policy, we may notify you through a notice on our website or by email.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions or concerns about our use of cookies, please contact us at:
              </p>
              <div className="text-slate-600">
                <p>AI Agents Store</p>
                <p>Email: privacy@aiagents.com</p>
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

export default Cookies;
