import React from 'react';
import { SEO } from '../../components/SEO';
import { Shield, Lock, FileText, Cookie } from 'lucide-react';

const LegalLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
    <div className="border-b border-gray-200 pb-8 mb-8">
      <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">{title}</h1>
      <p className="text-gray-500 font-mono text-sm">Last Updated: {lastUpdated}</p>
    </div>
    <div className="prose prose-lg max-w-none text-gray-700">
      {children}
    </div>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-xl font-heading font-bold uppercase mb-4 text-black flex items-center gap-2">
      <span className="w-2 h-2 bg-adidas-accent inline-block"></span> {title}
    </h3>
    <div className="space-y-4 text-base leading-relaxed">
      {children}
    </div>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy" lastUpdated="January 15, 2026">
    <SEO title="Privacy Policy" description="Detailed information on how NextGen Store collects, uses, and protects your data." />
    
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
      <div className="flex items-start gap-4">
        <Shield className="w-8 h-8 text-black mt-1" />
        <div>
          <h4 className="font-bold text-lg mb-2">Your Privacy Matters</h4>
          <p className="text-sm">
            At NextGen, we believe in transparency. This policy outlines exactly what data we collect, why we collect it, and how we keep it secure. We do not sell your personal data to third parties.
          </p>
        </div>
      </div>
    </div>

    <Section title="1. Information We Collect">
      <p>We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support, or otherwise communicate with us.</p>
      <ul className="list-disc pl-5 space-y-2 marker:text-black">
        <li><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
        <li><strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.</li>
        <li><strong>Financial Data:</strong> Bank account and payment card details (processed securely via third-party gateways).</li>
        <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of products you have purchased from us.</li>
      </ul>
    </Section>

    <Section title="2. How We Use Your Information">
      <p>We use the information we collect to deliver, maintain, and improve our services, such as to:</p>
      <ul className="list-disc pl-5 space-y-2 marker:text-black">
        <li>Process transactions and send related information, including confirmations and invoices.</li>
        <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
        <li>Respond to your comments, questions, and requests and provide customer service.</li>
        <li>Communicate with you about products, services, offers, promotions, rewards, and events offered by NextGen.</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
      </ul>
    </Section>

    <Section title="3. Data Security">
      <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
    </Section>

    <Section title="4. Your Rights">
      <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data, and (where the lawful ground of processing is consent) to withdraw consent.</p>
    </Section>
  </LegalLayout>
);

export const TermsConditions = () => (
  <LegalLayout title="Terms & Conditions" lastUpdated="January 10, 2026">
    <SEO title="Terms & Conditions" description="Rules and regulations for using the NextGen Store platform." />

    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
      <div className="flex items-start gap-4">
        <FileText className="w-8 h-8 text-black mt-1" />
        <div>
          <h4 className="font-bold text-lg mb-2">Agreement to Terms</h4>
          <p className="text-sm">
            By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>
        </div>
      </div>
    </div>

    <Section title="1. Accounts & Membership">
      <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
      <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>
    </Section>

    <Section title="2. Purchases & Payment">
      <p>If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
      <p>We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p>
    </Section>

    <Section title="3. Intellectual Property">
      <p>The Service and its original content, features, and functionality are and will remain the exclusive property of NextGen Store and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NextGen Store.</p>
    </Section>

    <Section title="4. Prohibited Uses">
      <p>You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the Service:</p>
      <ul className="list-disc pl-5 space-y-2 marker:text-black">
        <li>In any way that violates any applicable national or international law or regulation.</li>
        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
      </ul>
    </Section>
  </LegalLayout>
);

export const CookiesPolicy = () => (
  <LegalLayout title="Cookie Policy" lastUpdated="January 15, 2026">
    <SEO title="Cookie Policy" description="How NextGen Store uses cookies to improve your experience." />

    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
      <div className="flex items-start gap-4">
        <Cookie className="w-8 h-8 text-black mt-1" />
        <div>
          <h4 className="font-bold text-lg mb-2">What Are Cookies?</h4>
          <p className="text-sm">
            Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
        </div>
      </div>
    </div>

    <Section title="1. How We Use Cookies">
      <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
    </Section>

    <Section title="2. Types of Cookies We Use">
      <ul className="list-disc pl-5 space-y-2 marker:text-black">
        <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site.</li>
        <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, e.g. which pages you visit most often.</li>
        <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your user name, language or the region you are in).</li>
      </ul>
    </Section>

    <Section title="3. Managing Cookies">
      <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
    </Section>
  </LegalLayout>
);