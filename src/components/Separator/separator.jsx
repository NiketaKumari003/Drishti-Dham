import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrayingHands, faOm, faHeart, faLightbulb, faHands, faDove } from '@fortawesome/free-solid-svg-icons';

const Separator = () => {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-red-900 font-bold mb-4">Embrace Spiritual Growth</h2>
          <p className="text-xl text-red-900">
            Explore various aspects of spirituality and discover paths to personal growth and enlightenment.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faPrayingHands} className="text-4xl mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Meditation</h3>
            <p className="text-gray-600">
              Engage in meditation practices to find inner peace and clarity.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faOm} className="text-4xl mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Symbols</h3>
            <p className="text-gray-600">
              Understand the spiritual symbols and their significance.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faHeart} className="text-4xl mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Love</h3>
            <p className="text-gray-600">
              Cultivate love and compassion in your spiritual journey.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faLightbulb} className="text-4xl mb-4 text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2">Enlightenment</h3>
            <p className="text-gray-600">
              Seek enlightenment and understanding through spiritual practices.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faHands} className="text-4xl mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Unity</h3>
            <p className="text-gray-600">
              Experience the unity and connection with all beings.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faDove} className="text-4xl mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">Peace</h3>
            <p className="text-gray-600">
              Find peace through spiritual practices and mindfulness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Separator;
