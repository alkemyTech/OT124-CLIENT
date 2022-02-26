import React from "react";
import { API_BASE_URL } from "../../services";

export default function MemberCard({ member }) {
  return (
    <div className="bg-white grid text-center w-[200px] h-[300px] border-solid rounded-md shadow-xl hover:shadow-2xl">
      <img
        className="rounded-t-md w-[200px] h-[200px] object-cover object-center"
        src={`${API_BASE_URL}/api/v1/files/${member.image.key}`}
        alt={member.name}
      />
      <div>
        <p className="font-bold text-lg">{member.name}</p>
        <p>{member.position}</p>
      </div>
    </div>
  );
}
