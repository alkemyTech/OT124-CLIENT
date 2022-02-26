import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../services";

const Cards = ({ activity }) => {
  return (
    <div class="p-10">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
        {activity?.image?.key !== null || activity?.image?.key !== undefined ? (
          <img
            class="w-full object-cover "
            src={
              activity?.image?.key &&
              `${API_BASE_URL}/api/v1/files/${activity?.image?.key}`
            }
            alt={activity?.name}
          />
        ) : (
          <img class="w-full object-cover " src="" alt="No hay imagen" />
        )}
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{activity.name}</div>
          <p
            class="text-gray-700 text-base line-clamp-3"
            dangerouslySetInnerHTML={{ __html: activity.content }}
          ></p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <Link to={`${activity?.id}`}>
            <button className=" hover:bg-green-700 bg-green-500 text-white px-4 py-1 rounded-full">
              Ver Más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
