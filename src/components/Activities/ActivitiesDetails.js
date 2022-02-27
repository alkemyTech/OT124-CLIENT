import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivity } from "../../services/activities";
import { API_BASE_URL } from "../../services";

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
    <div className="mx-20">
      <h1 className="text-center font-bold text-4xl mb-6">
        {" "}
        {activities.name}
      </h1>
      <img
        src={`${API_BASE_URL}/api/v1/files/${activities?.image?.key}`}
        alt=""
        className="w-full float-left mr-6 mb-8 sm:w-80 h-80"
      />
      <p
        className="font-normal text-lg mb-6"
        dangerouslySetInnerHTML={{ __html: activities.content }}
      ></p>
    </div>
  );
};

export default ActivitiesDetails;
