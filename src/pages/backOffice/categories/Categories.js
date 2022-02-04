import React from "react";

let categories = [
  {
    id: "1",
    name: "Categ 1",
    description: "lorem",
  },
  {
    id: "2",
    name: "Categ 2",
    description: "lorem",
  },
  {
    id: "3",
    name: "Categ 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam doloremque dicta, deserunt voluptate aliquid quod saepe sunt quasi minus ipsum odio. Earum, modi animi. Molestias quas vel veritatis impedit?",
  },
];


export default function Categories() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <div className="flex sm:flex-row flex-col justify-around ">
          <h1 className="sm:text-5xl text-3xl text-center pt-10">Categorias</h1>
          <div className="py-10 text-center">
            <button className=" bg-green-600 text-sm sm:text-base text-white shadow shadow-green-800 rounded-sm px-8 py-4 hover:bg-green-700 transform ease-in-out duration-300 hover:scale-105">
            Añadir nueva categoria
            </button>
          </div>
        </div>
        {categories.length ? (
          <div className="shadow-md">
            <table className=" shadow-md text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
              <thead className="bg-gray-100 text-sm sm:text-base">
                <tr className="uppercase">
                  <th className="tracking-wider py-3 px-4">Nombre</th>
                  <th className="tracking-wider py-3 px-4">Descripcion</th>
                  <th className="tracking-wider py-3 px-4"></th>
                  <th className="tracking-wider py-3 px-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories?.map((category, count) => (
                  <tr
                    className={`${
                      count % 2 === 0 ? "" : ""
                    } p-10 transform ease-in-out duration-300 hover:scale-105 text-sm sm:text-base`}
                    key={category.id}
                  >
                    <td className="py-3 px-4">{category.name}</td>
                    <td className="py-3 px-4">{category.description}</td>
                    <td className="py-3 px-4 text-center">
                      <button className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600">
                        Eliminar
                      </button>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="hover:underline">Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center">No hay categorias existentes</h1>
        )}
      </div>
    </div>
  );
}
