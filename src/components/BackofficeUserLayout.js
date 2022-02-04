import React from "react";
import BackofficeCard from "./BackofficeCard";
import profileIcon from "../img/icons/profile.png";

export default function BackofficeUserLayout() {
  const items = [
    {
      title: "Mi perfil",
      image: profileIcon,
      navlink: "/mi-perfil",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {items.map((item) => {
        return (
          <BackofficeCard
            key={item.title}
            title={item.title}
            image={item.image}
            navlink={"/backoffice" + item.navlink}
          />
        );
      })}
    </div>
  );
}
