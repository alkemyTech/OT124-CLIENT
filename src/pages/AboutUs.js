import React from "react";
import { useState, useEffect } from "react";
import { getAllMembers } from "../services/members";
import { API_BASE_URL } from "../services";

function AboutUs() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMembers()
      .then((res) => {
        setMembers(res.data.members);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {members?.length !== 0 ? (
        <div className=" bg-sky-500 p-4 shadow-md flex flex-wrap justify-center">
            {members?.map((member)=> (
              <div className=" rounded md:h-80 flex flex-col bg-white p-2 mx-12 my-2 justify-center text-center shadow-md transform ease-in-out duration-300 hover:scale-105">
                <img className=" rounded-full border-2 " src={member?.image?.key && `${API_BASE_URL}/api/v1/files/${member?.image?.key}`}></img>
                <h3 className=" text-lg my-4 ">{member.name}</h3>
              </div>
            ))}
        </div>
      ) : (
        <div className=" flex flex-col text-center justify-center  mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
          <h3 className=" p-1 text-xl">No hay miembros existentes</h3>
        </div>
      )}
    </>
  );
}

export default AboutUs;
