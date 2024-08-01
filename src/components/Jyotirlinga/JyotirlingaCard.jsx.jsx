import React from 'react';

const JyotirlingaCard = ({ jyotirlinga }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <img
        src={jyotirlinga.image}
        alt={jyotirlinga.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{jyotirlinga.name}</h2>
        <p className="text-gray-700 mb-2"><strong>Location:</strong> {jyotirlinga.location}</p>
        <p className="text-gray-700 mb-2"><strong>Opening Timing:</strong> {jyotirlinga.openingTiming}</p>
        <p className="text-gray-700 mb-2"><strong>Closing Timing:</strong> {jyotirlinga.closingTiming}</p>
        <p className="text-gray-700 mb-2"><strong>Important Dates:</strong> {jyotirlinga.importantDates.join(', ')}</p>
        <p className="text-gray-700 mb-2"><strong>Prashad:</strong> {jyotirlinga.prashad}</p>
        <p className="text-gray-700 mb-2"><strong>Establishment:</strong> {jyotirlinga.establishment}</p>
        <p className="text-gray-700"><strong>Key Information:</strong> {jyotirlinga.keyInformation}</p>
      </div>
    </div>
  );
};

export default JyotirlingaCard;
