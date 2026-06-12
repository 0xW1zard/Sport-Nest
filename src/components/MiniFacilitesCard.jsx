import React from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import EditFacilityModal from './EditFacilityModal';
import DeleteButton from './DeleteButton';

const MiniFacilityCard = ({ facility }) => {

  const { name, location, price_per_hour, facility_type, _id, image } = facility;

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 font-sans">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={image} loading="eager"
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

          <div className="flex items-center gap-2">
            <EditFacilityModal facility={facility}></EditFacilityModal>
            <DeleteButton name={name} id={_id} url="manage-facilities"></DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniFacilityCard;