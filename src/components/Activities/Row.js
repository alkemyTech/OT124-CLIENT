import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { deleteActivities } from "../../services/activities";

const ActivitiesRow = ({ activity }) => {
  const navigate = useNavigate();
  const deleteActivity = async (id) => {
    console.log(id);
    deleteActivities(id);
    navigate("/backoffice/actividades");
  };

  return (
    <tr key={activity.id}>
      <td className="py-3 px-4">{activity.name}</td>
      <td colSpan={2} className="text-center">
        <Link
          to={`edit/${activity.id}`}
          className="mr-4 bg-yellow-500 text-white shadow shadow-yellow-800 rounded-sm px-4 py-1 hover:bg-yellow-600"
        >
          Editar
        </Link>
        <button
          onClick={() => deleteActivity(activity.id)}
          className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ActivitiesRow;
