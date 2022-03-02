import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../services";

const PublicCard = ({ entity }) => {
  return (
    <div class="w-[300px] md:w-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-xl grid">
      {entity?.image?.key !== null || entity?.image?.key !== undefined ? (
        <img
          class="h-[200px] w-full object-cover object-center"
          src={
            entity?.image?.key &&
            `${API_BASE_URL}/api/v1/files/${entity?.image?.key}`
          }
          alt={entity?.name}
        />
      ) : (
        <img class="w-full object-cover" src="" alt="No hay imagen" />
      )}
      <div class="p-6 grid">
        <div class="font-bold text-xl mb-2 text-center">{entity.name}</div>

        <div class="px-6 pt-4 flex justify-end self-end">
          <Link to={`${entity?.id}`}>
            <button className=" hover:bg-green-700 bg-green-500 text-white px-4 py-1 rounded-full">
              Ver Más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicCard;
