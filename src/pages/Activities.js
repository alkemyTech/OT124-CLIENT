import React, { useEffect, useState } from "react";
import Card from "../components/Activities/Cards";
import { getAllActivities } from "../services/activities";

const Activities = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    getAllActivities().then((res) => {
      console.log(res);
      setActividades(res.data.listActivity);
    });
  }, []);

  return (
    <>
      {actividades.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {actividades.map((activity) => (
            <Card key={activity.id} activity={activity} />
          ))}
        </div>
      ) : (
        <h1 className="text-center">No hay actividades</h1>
      )}
    </>
  );
};

export default Activities;
