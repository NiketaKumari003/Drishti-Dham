import React from 'react';
import JyotirlingaCard from './JyotirlingaCard.jsx.jsx';
import  Jyotirlingas  from '../data/Jyotirlingas.js';

const JyotirlingaList = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">The 12 Jyotirlingas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Jyotirlingas.map((Jyotirlinga, index) => (
            <JyotirlingaCard key={index} Jyotirlinga={Jyotirlinga} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JyotirlingaList;
