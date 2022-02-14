import React from 'react';

function OrganizationsList({ organizations, setOrgData }) {

    return (<>
        {organizations.length ? (
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
                        {organizations?.map((org, count) => (
                            <tr
                                className={`${count % 2 === 0 ? "" : ""
                                    } p-10 transform ease-in-out duration-300 hover:scale-105 text-sm sm:text-base`}
                                key={org.id}
                            >
                                <img className="py-3 px-4" src={org.image} alt="Girl in a jacket" width="125" height="150" />
                                <td className="py-3 px-4">{org.name}</td>
                                <td className="py-3 px-4">{org.email}</td>
                                <td className="py-3 px-4 text-center">
                                    <button className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600">
                                        Eliminar
                                    </button>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setOrgData({
                                            name : org.name,
                                            id : org.id,
                                            image : org.image
                                        })
                                    }} className="hover:underline">Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <h1 className="text-center">No hay categorias existentes</h1>
        )}
    </>)
}

export default OrganizationsList;