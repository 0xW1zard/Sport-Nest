import React from 'react';
// Using react-icons to keep it simple and clean
import { MdSearch, MdOutlineCalendarMonth, MdFlag } from 'react-icons/md';

const SeamlessBooking = () => {
  const steps = [
    {
      id: 1,
      title: '1. Browse',
      description: 'Discover premium facilities near you with real-time availability and verified reviews.',
      Icon: MdSearch,
    },
    {
      id: 2,
      title: '2. Book',
      description: 'Select your slot, securely pay online, and instantly receive your booking confirmation.',
      Icon: MdOutlineCalendarMonth,
    },
    {
      id: 3,
      title: '3. Play',
      description: 'Show up, present your digital pass, and focus entirely on your game.',
      Icon: MdFlag,
    },
  ];

  return (
    <section className="py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Seamless Booking
          </h2>
          <p className="text-slate-600">
            From discovering local gems to stepping onto the field, we've streamlined the entire process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ id, title, description, Icon }) => (
            <div 
              key={id} 
              className="relative bg-indigo-50/50 rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100/50 rounded-full"></div>

              <div className="relative z-10 w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center mb-6">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">
                {title}
              </h3>
              <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeamlessBooking;