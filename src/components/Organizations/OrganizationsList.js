
import React from "react";
import CenterResponsiveContainer from "../Shared/Containers/CenterResponsiveContainer";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import HeaderTable from "../Shared/Table/HeaderTable";
import TableLayout from "../Shared/Table/TableLayout";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrg, getAllOrgs } from '../../features/orgSlice';
import { API_BASE_URL } from '../../services';
import { deleteOrganization } from '../../services/organization';
import { getAllOrganizations } from '../../services/organization';
function OrganizationsList({ organizations }) {
    let dispatch = useDispatch()

    async function HandlerDelete(id) {
        let ret = {}
        deleteOrganization(id)
            .then((resdel) => {
                if (resdel) {
                    dispatch(deleteOrg(resdel))
                    console.log(resdel)
                    console.log(resdel?.status)
                    ret.status = resdel?.status

                    getAllOrganizations()
                        .then((resget) => {
                            if (resget?.status === 200 || resget?.status === 201 || resget?.status === 304) {
                                dispatch(getAllOrgs(resget?.data));
                               
                            } else {
                                console.error("error status")
                            }
                        }).catch(e => e)
                }
                console.log(resdel.status)
                return resdel.status
            })
            .catch(e => e)
           
    }



    return (
        <CenterResponsiveContainer>
            {organizations?.length ? (
                <TableLayout>
                    <HeaderTable
                        columnsName={[
                            "ID",
                            "Nombre",
                            "Imagen",
                            "Direccion",
                            "Teléfono",
                            "Email",
                            "WelcomeText",
                        ]}
                    />
                    <BodyTable
                        list={organizations}
                        bodyName={"organizacion"}
                        message={"¿Desea eliminar esta organización?"}
                        afterMessage={"organización eliminada con éxito"}
                        service={(id) => HandlerDelete(id)}
                    />
                </TableLayout>
            ) : (
                <NotFoundComponent title={"No se encontraron organizaciones"} />
            )}
        </CenterResponsiveContainer>
    );
}

export default OrganizationsList;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteOrg,getAllOrgs } from '../../../features/orgSlice';
// import { API_BASE_URL } from '../../../services';
// import { deleteOrganization } from '../../../services/organization';
// import { getAllOrganizations } from '../../../services/organization';
// function OrganizationsList({ organizations, setOrgData }) {
//     //`https://${org?.image.bucket}.s3.${org?.image.region}.amazonaws.com/${org?.image.key}`
//     let dispatch = useDispatch()
//     async function handleDelete(e, id) {
//         dispatch(deleteOrg())
//         const deleteOrgRes = await deleteOrganization(id)
//         dispatch(deleteOrg(deleteOrgRes))
//         e.preventDefault()
//         try {

//             const res = await getAllOrganizations();

//             if (res?.status === 200 || res?.status === 201 || res?.status === 304) {

//                 dispatch(getAllOrgs(res?.data));

//             } else {

//                 console.error("error status")
//             }

//         } catch (e) {
//             console.error(e)
//         }
//     }

//     return (<>
//         {organizations?.length ? (
//             <div className="shadow-md">
//                 <table className=" shadow-md text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
//                     <thead className="bg-gray-100 text-sm sm:text-base">
//                         <tr className="uppercase">
//                             <th className="tracking-wider py-3 px-4">Nombre</th>
//                             <th className="tracking-wider py-3 px-4">Descripcion</th>
//                             <th className="tracking-wider py-3 px-4"></th>
//                             <th className="tracking-wider py-3 px-4"></th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                         {organizations?.map((org, count) => (
//                             <tr
//                                 className={`${count % 2 === 0 ? "" : ""
//                                     } p-10 transform ease-in-out duration-300 hover:scale-105 text-sm sm:text-base`}
//                                 key={org?.id}
//                             >
//                                 <img className="py-3 px-4" src={`${API_BASE_URL}/api/v1/files/${org?.image?.key}`} alt="Girl in a jacket" width="125" height="150" />
//                                 <td className="py-3 px-4">{org?.name}</td>
//                                 <td className="py-3 px-4">{org?.email}</td>
//                                 <td className="py-3 px-4 text-center">
//                                     <button onClick={(e) => handleDelete(e, org?.id)} className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600">
//                                         Eliminar
//                                     </button>
//                                 </td>
//                                 <td className="py-3 px-4 text-center">
//                                     <button onClick={(e) => {
//                                         e.preventDefault()
//                                         setOrgData({
//                                             name: org?.name,
//                                             id: org?.id,
//                                             image: org?.image
//                                         })
//                                     }} className="hover:underline">Editar</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         ) : (
//             <h1 className="text-center">No hay categorias existentes</h1>
//         )}
//     </>)