import React, { useState } from 'react';
import { Ruler } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const SizeCharts = () => {
  const [activeTab, setActiveTab] = useState<'men' | 'women' | 'kids'>('men');

  const Table = ({ data }: { data: any[] }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-4 border border-gray-800">US</th>
            <th className="p-4 border border-gray-800">UK</th>
            <th className="p-4 border border-gray-800">EU</th>
            <th className="p-4 border border-gray-800">CM</th>
            <th className="p-4 border border-gray-800">Inches</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-4 border border-gray-200 font-bold">{row.us}</td>
              <td className="p-4 border border-gray-200">{row.uk}</td>
              <td className="p-4 border border-gray-200">{row.eu}</td>
              <td className="p-4 border border-gray-200">{row.cm}</td>
              <td className="p-4 border border-gray-200">{row.in}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const menData = [
    { us: '7', uk: '6.5', eu: '40', cm: '25.0', in: '9.8' },
    { us: '8', uk: '7.5', eu: '41 1/3', cm: '26.0', in: '10.2' },
    { us: '9', uk: '8.5', eu: '42 2/3', cm: '27.0', in: '10.6' },
    { us: '10', uk: '9.5', eu: '44', cm: '28.0', in: '11.0' },
    { us: '11', uk: '10.5', eu: '45 1/3', cm: '29.0', in: '11.4' },
    { us: '12', uk: '11.5', eu: '46 2/3', cm: '30.0', in: '11.8' },
  ];

  const womenData = [
    { us: '5', uk: '3.5', eu: '36', cm: '22.0', in: '8.7' },
    { us: '6', uk: '4.5', eu: '37 1/3', cm: '23.0', in: '9.0' },
    { us: '7', uk: '5.5', eu: '38 2/3', cm: '24.0', in: '9.4' },
    { us: '8', uk: '6.5', eu: '40', cm: '25.0', in: '9.8' },
    { us: '9', uk: '7.5', eu: '41 1/3', cm: '26.0', in: '10.2' },
    { us: '10', uk: '8.5', eu: '42 2/3', cm: '27.0', in: '10.6' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
      <SEO title="Size Charts" description="Find your perfect fit with our comprehensive size guides." />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold uppercase mb-4">Size Charts</h1>
        <p className="text-gray-600">
          Use our size charts to determine your size. If you are between sizes, we recommend sizing up for a looser fit or down for a tighter fit.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4">
           {['men', 'women', 'kids'].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`px-6 py-2 rounded-full font-bold uppercase text-sm transition ${
                 activeTab === tab 
                 ? 'bg-black text-white' 
                 : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        <div className="mb-6 flex items-center gap-2">
           <Ruler className="w-5 h-5" />
           <h3 className="font-bold uppercase text-lg">Footwear Sizing</h3>
        </div>

        {activeTab === 'men' && <Table data={menData} />}
        {activeTab === 'women' && <Table data={womenData} />}
        {activeTab === 'kids' && (
          <div className="text-center py-12 bg-gray-50 rounded">
            <p className="font-bold text-gray-500">Kids sizing calculator coming soon.</p>
          </div>
        )}

        <div className="mt-8 bg-gray-50 p-6 rounded-lg text-sm text-gray-600">
           <h4 className="font-bold uppercase mb-2 text-black">How to measure</h4>
           <ol className="list-decimal pl-5 space-y-1">
             <li>Place a piece of paper on the floor with one end against a wall.</li>
             <li>Stand on the paper with your heel against the wall.</li>
             <li>Mark the piece of paper where your toes end.</li>
             <li>Measure from the end of the paper to the mark you created and compare the measurement to our sizing chart.</li>
           </ol>
        </div>
      </div>
    </div>
  );
};
