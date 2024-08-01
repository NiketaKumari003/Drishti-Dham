import React from 'react';

const TempleCard = ({ temple }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={temple.image}
        alt={temple.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{temple.name}</h2>
        <p className="text-gray-700 mb-2"><strong>Location:</strong> {temple.location}</p>
        <p className="text-gray-700 mb-2"><strong>Time:</strong> {temple.time}</p>
        <p className="text-gray-700 mb-2"><strong>Prashad:</strong> {temple.prashad}</p>
        <p className="text-gray-700"><strong>Important Dates:</strong> {temple.importantDates.join(', ')}</p>
      </div>
    </div>
  );
};

export default TempleCard;
