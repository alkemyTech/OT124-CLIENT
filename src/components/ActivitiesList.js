import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ActivitiesHeader from "./ActivitiesHeader";
import { getAllActivities } from "../services/activities";

function ActivitiesList() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities().then((response) => {
      setActivities(response.data.listActivity);
    });
  }, []);

  return (
    <>
      <ActivitiesHeader />

      {activities.length ? (
        <div className="shadow-md">
          <table className=" shadow-md text-left duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
            <thead className="bg-gray-100 text-sm sm:text-base">
              <tr className="uppercase">
                <th className="tracking-wider py-3 px-4">Nombre</th>
                <th
                  colSpan={2}
                  className="tracking-wider py-3 px-4 text-center"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activities?.map((activity, count) => (
                <tr
                  className={`${
                    count % 2 === 0 ? "" : ""
                  } p-10  text-sm sm:text-base`}
                  key={activity.id}
                >
                  <td className="py-3 px-4">{activity.name}</td>
                  <td colSpan={2} className="text-center">
                    <button
                      onClick={() =>
                        navigate(`/backoffice/actividades/edit/${activity.id}`)
                      }
                      className="mr-4 bg-yellow-500 text-white shadow shadow-yellow-800 rounded-sm px-4 py-1 hover:bg-yellow-600"
                    >
                      Editar
                    </button>
                    <button className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center">No hay actividades</h1>
      )}
    </>
  );
}

export default ActivitiesList;
