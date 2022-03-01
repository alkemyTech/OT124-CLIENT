import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivity } from "../../services/activities";
import { API_BASE_URL } from "../../services";
import CenterResponsiveContainer from "../Shared/Containers/CenterResponsiveContainer";

const ActivitiesDetails = () => {
  const { id } = useParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivity(id)
      .then((res) => {
        setActivities(res?.data?.activity);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <CenterResponsiveContainer>
      {activities !== undefined ? (
        <>
          <h3 className="text-center font-bold text-4xl mb-6 md:col-start-1 md:col-end-2">
            {activities.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 rounded items-center center template-col-[1fr 1fr] gap-6 p-6">
            <img
              className="object-cover md:col-start-1 md:col-end-2 w-[80%] md:w-full justify-self-center rounded"
              src={
                activities?.image?.key &&
                `${API_BASE_URL}/api/v1/files/${activities?.image?.key}`
              }
            ></img>
            <p className="w-full max-h-[250px] flex text-center md:text-left md:col-start-2 md:col-end-3 font-normal text-lg overflow-y-scroll">
              {activities.content}
            </p>
          </div>
        </>
      ) : (
        <div className="grid rounded grid-cols-[1fr] grid-rows-[1fr] justify-items-center">
          <h3 className=" text-xl ">La novedad no existe o no se encuentra.</h3>
        </div>
      )}
    </CenterResponsiveContainer>
  );
};

export default ActivitiesDetails;
