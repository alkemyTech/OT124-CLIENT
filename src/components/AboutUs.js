import React from "react";
import { useState, useEffect } from "react";
import { getAllMembers } from "../services/members";

function AboutUs() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMembers()
      .then((res) => {
        setMembers(res.data.resMembers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {members?.length ? (
        <div className="shadow-md">
          <table className=" shadow-md text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
            <thead className="bg-gray-100 text-sm sm:text-base">
              <tr className="uppercase">
                <th className="tracking-wider py-3 px-4">Nombre</th>
                <th className="tracking-wider py-3 px-4">Imagen</th>
                <th className="tracking-wider py-3 px-4"></th>
                <th className="tracking-wider py-3 px-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {members?.map((member, count) => (
                <tr
                  className={`${
                    count % 2 === 0 ? "" : ""
                  } p-10 transform ease-in-out duration-300 hover:scale-105 text-sm sm:text-base`}
                  key={member.id}
                >
                  <td className="py-3 px-4">{member.name}</td>
                  <td className="py-3 px-4">{member.image}</td>
                  <td className="py-3 px-4 text-center"></td>
                </tr>
              ))}
            </tbody>
          </table>
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
