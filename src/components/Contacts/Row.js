import React from "react";
import { Link } from "react-router-dom";

const ContactsRow = ({ contact }) => {
  return (
    <tr key={contact.id}>
      <td className="py-3 px-4">{contact.name}</td>
      <td className="py-3 px-4">{contact.email}</td>
      <td colSpan={2} className="text-center">
        {/* <Link
          to={`editar-contacto/${contacto.id}`}
          className="mr-4 bg-yellow-500 text-white shadow shadow-yellow-800 rounded-sm px-4 py-1 hover:bg-yellow-600"
        >
          Editar
        </Link>
        <button className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600">
          Eliminar
        </button> */}
      </td>
    </tr>
  );
};

export default ContactsRow;
