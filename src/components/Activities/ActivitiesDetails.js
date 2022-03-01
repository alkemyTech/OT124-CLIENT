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
    <div className="md:mx-10 mx-5 grid grid-cols-1 md:grid-cols-2 rounded" >
      <h3 className="text-center font-bold text-4xl mb-6 md:col-start-1 md:col-end-2">
        {" "}
        {activities.name}
      </h3>
      <img
        src={`${API_BASE_URL}/api/v1/files/${activities?.image?.key}`}
        alt=""
        className=" md:col-start-1 md:col-end-2 md:max-w-[600px] md:min-w-[500px] rounded justify-self-center self-center"
      />
      <p
        className=" md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 font-normal text-lg mt-6 overflow-y-scroll overflow-x-hidden px-6 md:max-h-full min-h-[100px]"
        dangerouslySetInnerHTML={{ __html: activities.content }}
      ></p>
    </div>

    </CenterResponsiveContainer>
  );
};

export default ActivitiesDetails;
