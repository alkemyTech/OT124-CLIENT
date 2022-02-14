import React from "react";

const ContactsTableHeader = () => {
  return (
    <thead className="bg-gray-100 text-sm sm:text-base">
      <tr className="uppercase">
        <th className="tracking-wider py-3 px-4">Nombre</th>
        <th className="tracking-wider py-3 px-4">Email</th>
        <th colSpan={2} className="tracking-wider py-3 px-4 text-center">
          Acciones
        </th>
      </tr>
    </thead>
  );
};

export default ContactsTableHeader;
