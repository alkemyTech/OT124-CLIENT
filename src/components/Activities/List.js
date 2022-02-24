import React, { useEffect, useState } from "react";
import { getAllActivities } from "../../services/activities";
import ActivitiesHeader from "./Header";
import ActivitiesRow from "./Row";
import ActivitiesTableHeader from "./TableHeader";

function ActivitiesList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities()
      .then((response) => {
        setActivities(response.data.activities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto max-w-2xl">
      <ActivitiesHeader />

      {activities?.length > 0 ? (
        <div className="shadow-md">
          <table className=" shadow-md text-left duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
            <ActivitiesTableHeader />
            <tbody className="divide-y divide-gray-200">
              {activities?.map((activity) => (
                <ActivitiesRow key={activity.id} activity={activity} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center">No hay actividades</h1>
      )}
    </div>
  );
}

export default ActivitiesList;
