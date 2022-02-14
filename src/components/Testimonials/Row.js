import React from "react";
import { Link } from "react-router-dom";

const TestimonialsRow = ({ testimonio }) => {
  return (
    <tr key={testimonio.id}>
      <td className="py-3 px-4">{testimonio.name}</td>
      <td colSpan={2} className="text-center">
        <Link
          to={`editar-testimonio/${testimonio.id}`}
          className="mr-4 bg-yellow-500 text-white shadow shadow-yellow-800 rounded-sm px-4 py-1 hover:bg-yellow-600"
        >
          Editar
        </Link>
        <button className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TestimonialsRow;
