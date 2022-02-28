import React, { useEffect, useState } from "react";
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";
import { getAllActivities } from "../services/activities";
import PublicCard from "../components/Shared/Cards/PublicCard";

const Activities = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    getAllActivities().then((res) => {
      setActividades(res?.data?.activities);
    });
  }, []);

  return (
    <CenterResponsiveContainer>
      <h2 className="text-3xl font-bold text-center mb-10">Actividades</h2>
      <div className="flex flex-wrap gap-20 justify-center">
        {actividades?.length ? (
          actividades.map((activity) => (
            <PublicCard key={activity.id} entity={activity} />
          ))
        ) : (
          <h1 className="text-center">No hay actividades</h1>
        )}
      </div>
    </CenterResponsiveContainer>
  );
};

export default Activities;
