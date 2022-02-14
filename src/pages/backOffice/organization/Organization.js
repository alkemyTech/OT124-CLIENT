import React from 'react';
import BackOfficeCard from '../../../components/BackofficeCard';
import organizationIcon from "../../../img/icons/organization.png";
function Organization() {
  const items = [
    {
      title: "editar organización",
      image: organizationIcon,
      navlink: "/editar-organizacion",
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

export default Organization;
