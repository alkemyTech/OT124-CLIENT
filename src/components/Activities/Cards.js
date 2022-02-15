import React from "react";

const Cards = ({ activity }) => {
  return (
    <div class="p-10">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
        <img
          class="w-full object-cover "
          src={`https://drive.google.com/uc?export=view&id=1ileZuq6dMphx9i-aFtz95iSDRsRVZgLj`}
          alt="Mountain"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{activity.name}</div>
          <p
            class="text-gray-700 text-base line-clamp-3"
            dangerouslySetInnerHTML={{ __html: activity.content }}
          ></p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button className="bg-green-500 text-white px-4 py-1 rounded-full">
            Ver Más
          </button>
          {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
