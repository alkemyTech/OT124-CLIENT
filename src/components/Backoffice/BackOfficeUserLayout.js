import React from "react";
import BackOfficeCard from "./BackOfficeCard";
import profileIcon from "../../img/icons/profile.png";

export default function BackOfficeUserLayout() {
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
          <BackOfficeCard
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
