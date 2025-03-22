
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold mb-3">Privacy Policy</h1>
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
                AI Agents Store ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-slate-600">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="text-slate-600 mb-2">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                  <li>Register for an account</li>
                  <li>Purchase or subscribe to our services</li>
                  <li>Sign up for our newsletter</li>
                  <li>Contact our customer support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-slate-600 mt-2">
                  This information may include your name, email address, mailing address, phone number, payment information, and other contact or identifying information.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                <p className="text-slate-600 mb-2">
                  When you visit our website or use our services, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                  <li>Device information (e.g., device type, operating system, browser type)</li>
                  <li>IP address and location information</li>
                  <li>Usage data (e.g., pages visited, time spent on pages, links clicked)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-slate-600 mb-2">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send promotional communications, such as special offers and newsletters</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against, identify, and prevent fraud and other illegal activities</li>
                <li>Comply with our legal obligations</li>
              </ul>
              <p className="text-slate-600">
                We may combine or aggregate any of the information we collect for any of these purposes.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
              <p className="text-slate-600 mb-2">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf (e.g., payment processing, data analysis, email delivery).</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information when we believe in good faith that disclosure is necessary to comply with a legal obligation, protect our rights or safety, or investigate potential violations of our terms of service.</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us your consent to do so.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p className="text-slate-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Objecting to our processing of your personal information</li>
                <li>Requesting that we restrict processing of your personal information</li>
                <li>Requesting portability of your personal information</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p className="text-slate-600 mt-4">
                To exercise these rights, please contact us using the contact information provided at the end of this Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-slate-600">
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;
