import React from 'react';
import { ArrowRight, Briefcase, Code, PenTool, TrendingUp } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const CareersPage = () => {
  const jobs = [
    { title: 'Senior Frontend Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time' },
    { title: 'Product Designer', dept: 'Design', location: 'San Francisco', type: 'Full-time' },
    { title: 'Marketing Specialist', dept: 'Marketing', location: 'New York', type: 'Full-time' },
    { title: 'Supply Chain Manager', dept: 'Operations', location: 'Berlin', type: 'Full-time' },
  ];

  return (
    <div className="animate-fadeIn">
      <SEO title="Careers" description="Join the NextGen team and help shape the future of sport." />

      <div className="bg-black text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">Join The Team</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We are looking for game-changers, innovators, and dreamers. Help us build the next generation of sports technology.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-xl">
             <Code className="w-10 h-10 mb-4" />
             <h3 className="font-bold text-xl mb-2">Engineering</h3>
             <p className="text-gray-600">Build the platforms that power our global store and AI styling engine.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
             <PenTool className="w-10 h-10 mb-4" />
             <h3 className="font-bold text-xl mb-2">Design</h3>
             <p className="text-gray-600">Create the visual language of the future and products that inspire.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
             <TrendingUp className="w-10 h-10 mb-4" />
             <h3 className="font-bold text-xl mb-2">Business</h3>
             <p className="text-gray-600">Drive growth and bring our vision to new markets around the world.</p>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold uppercase mb-8">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="border border-gray-200 p-6 rounded-lg hover:border-black transition cursor-pointer group flex flex-col md:flex-row justify-between md:items-center">
               <div>
                 <h3 className="font-bold text-lg">{job.title}</h3>
                 <p className="text-gray-500 text-sm mt-1">{job.dept} • {job.location} • {job.type}</p>
               </div>
               <div className="mt-4 md:mt-0">
                 <span className="inline-flex items-center text-sm font-bold uppercase group-hover:underline">
                   Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                 </span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};