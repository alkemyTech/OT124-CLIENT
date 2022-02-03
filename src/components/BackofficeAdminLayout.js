import React from "react";
import BackofficeCard from "./BackofficeCard";

export default function BackofficeAdminLayout() {
  const items = [
    {
      title: "Actividades",
      image: "/icons/activities.png",
      navlink: "/actividades",
    },
    {
      title: "Categorías",
      image: "/icons/categories.png",
      navlink: "/categorias",
    },
    {
      title: "Miembros",
      image: "/icons/members.png",
      navlink: "/miembros",
    },
    {
      title: "Novedades",
      image: "/icons/news.png",
      navlink: "/novedades",
    },
    {
      title: "Organización",
      image: "/icons/organization.png",
      navlink: "/organizacion",
    },
    {
      title: "Slides",
      image: "/icons/slides.png",
      navlink: "/slides",
    },
    {
      title: "Testimonios",
      image: "/icons/testimonials.png",
      navlink: "/testimonios",
    },
    {
      title: "Usuarios",
      image: "/icons/users.png",
      navlink: "/usuarios",
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
