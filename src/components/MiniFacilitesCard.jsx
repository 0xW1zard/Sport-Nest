import React from 'react';
import { MapPin, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';

const MiniFacilityCard = ({ facility }) => {

  const {name, location, price_per_hour,facility_type, _id ,image } = facility;

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 font-sans">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={image}
          alt={name} width={200} height={100}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {facility_type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>

        <div className="flex items-center text-gray-500 text-sm mb-6">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-extrabold text-green-700">${price_per_hour}<span className="text-sm font-medium text-gray-400">/hr</span></span>

          <div className="flex gap-2">
            <button className="p-3 rounded-full border border-gray-200 text-green-700 hover:bg-gray-50 transition-colors">
              <Pencil size={18} />
            </button>
            <button className="p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniFacilityCard;