import React from "react";
import BackOfficeCard from "./BackOfficeCard";
import activitiesIcon from "../img/icons/activities.png";
import categoriesIcon from "../img/icons/categories.png";
import membersIcon from "../img/icons/members.png";
import newsIcon from "../img/icons/news.png";
import organizationIcon from "../img/icons/organization.png";
import slidesIcon from "../img/icons/slides.png";
import testimonialsIcon from "../img/icons/testimonials.png";
import usersIcon from "../img/icons/users.png";

export default function BackOfficeAdminLayout() {
  const items = [
    {
      title: "Actividades",
      image: activitiesIcon,
      navlink: "/actividades",
    },
    {
      title: "Categorías",
      image: categoriesIcon,
      navlink: "/categorias",
    },
    {
      title: "Miembros",
      image: membersIcon,
      navlink: "/miembros",
    },
    {
      title: "Novedades",
      image: newsIcon,
      navlink: "/novedades",
    },
    {
      title: "Organización",
      image: organizationIcon,
      navlink: "/organizacion",
    },
    {
      title: "Slides",
      image: slidesIcon,
      navlink: "/slides",
    },
    {
      title: "Testimonios",
      image: testimonialsIcon,
      navlink: "/testimonios",
    },
    {
      title: "Usuarios",
      image: usersIcon,
      navlink: "/usuarios",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 max-w-screen-lg">
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
