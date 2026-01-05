import React, { useState } from 'react';
import { Star, Trash2, CheckCircle, MessageSquare } from 'lucide-react';

export const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, product: 'Ultraboost Light', user: 'Mike R.', rating: 5, comment: 'Best running shoes I have ever owned. Super light!', date: '2 hours ago', status: 'Pending' },
    { id: 2, product: 'Samba OG', user: 'Sarah L.', rating: 4, comment: 'Love the style, but they run a bit narrow.', date: '5 hours ago', status: 'Published' },
    { id: 3, product: 'Track Jacket', user: 'Davide B.', rating: 1, comment: 'Zipper broke after one wash. Terrible quality.', date: '1 day ago', status: 'Pending' },
  ]);

  const handlePublish = (id: number) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status: 'Published' } : r));
  };

  const handleDelete = (id: number) => {
    if(confirm('Delete this review?')) {
      setReviews(prev => prev.filter(r => r.id !== id));
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Reviews Moderation</h1>
          <p className="text-gray-500 text-sm">Manage customer feedback and ratings.</p>
        </div>
      </div>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6">
             <div className="flex-shrink-0">
               <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                 <MessageSquare className="w-6 h-6 text-gray-400" />
               </div>
             </div>
             <div className="flex-1">
               <div className="flex justify-between items-start mb-2">
                 <div>
                   <h3 className="font-bold text-lg">{review.product}</h3>
                   <div className="flex items-center gap-2 text-sm text-gray-500">
                     <span>by {review.user}</span>
                     <span>•</span>
                     <span>{review.date}</span>
                   </div>
                 </div>
                 <div className="flex text-yellow-400">
                   {'★'.repeat(review.rating)}
                   <span className="text-gray-200">{'★'.repeat(5 - review.rating)}</span>
                 </div>
               </div>
               <p className="text-gray-700 bg-gray-50 p-3 rounded-lg mb-4 text-sm italic">"{review.comment}"</p>
               <div className="flex items-center gap-2">
                 <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                   review.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                 }`}>
                   {review.status}
                 </span>
               </div>
             </div>
             <div className="flex flex-col gap-2 justify-center border-l pl-6 border-gray-100">
               {review.status === 'Pending' && (
                 <button 
                   onClick={() => handlePublish(review.id)}
                   className="flex items-center gap-2 text-green-600 hover:bg-green-50 px-3 py-2 rounded transition text-sm font-bold"
                 >
                   <CheckCircle className="w-4 h-4" /> Publish
                 </button>
               )}
               <button 
                 onClick={() => handleDelete(review.id)}
                 className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-3 py-2 rounded transition text-sm font-bold"
               >
                 <Trash2 className="w-4 h-4" /> Delete
               </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};