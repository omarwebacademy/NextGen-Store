import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <SEO title="Contact Us" description="Get in touch with the NextGen support team." />

      <div className="text-center mb-16">
        <h1 className="text-4xl font-heading font-bold uppercase mb-4">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are here to help. Send us a message and our team will respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="font-heading font-bold text-lg uppercase mb-6">Contact Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase text-gray-500">Phone</p>
                  <p className="font-bold text-lg">1-800-NEXTGEN</p>
                  <p className="text-xs text-gray-500">Mon-Fri, 8am-8pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase text-gray-500">Email</p>
                  <p className="font-bold text-lg">support@nextgen.com</p>
                  <p className="text-xs text-gray-500">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase text-gray-500">Headquarters</p>
                  <p className="font-bold text-lg">San Francisco</p>
                  <p className="text-xs text-gray-500">123 Innovation Dr, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 rounded-xl">
            <MessageSquare className="w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg uppercase mb-2">Live Chat</h3>
            <p className="text-gray-300 text-sm mb-6">Chat with a specialist for immediate assistance with orders and products.</p>
            <button className="w-full bg-white text-black py-3 font-bold uppercase text-sm rounded hover:bg-gray-100 transition">
              Start Chat
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
            {status === 'success' ? (
              <div className="text-center py-20 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-8">Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="text-black font-bold underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Return/Exchange">Return / Exchange</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest rounded-lg hover:bg-gray-800 transition disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  {!status && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};