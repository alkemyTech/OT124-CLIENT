import React from "react";
import { useState, useEffect } from "react";
import {deleteMember, getAllMembers} from "../../../services/members"
import TableLayout from "../../../components/Shared/Table/TableLayout";
import HeaderTable from "../../../components/Shared/Table/HeaderTable";
import BodyTable from "../../../components/Shared/Table/BodyTable";
import NotFoundComponent from "../../../components/Shared/Others/NotFoundComponent"
import Pagination from "../../../components/Shared/Table/Pagination";
import useQueries from "../../../hooks/useQueries";
import SearchBar from "../../../components/Shared/Others/SearchBar";

function MembersList(props) {
  const [ isLoad, setIsLoad ] = useState(false)
  const [member, setMember] = useState([]);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    getAllMembers(queries)
      .then((res) => {        
      setMember(res?.data?.members?.map((e)=>{
        const {id, name, image, createdAt} = e
        const date = new Date(createdAt).toLocaleDateString() 
        return { ...{image,name, date, id} } 
      }));
      setCantItems(res?.data?.counter)
    })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);


  
  return (
    <>
    <SearchBar />
      {member?.length ? (
        <TableLayout>
          <HeaderTable columnsName={["Imagen", "Nombre","Fecha"]} />
          <BodyTable
            isLoad={isLoad}
            setIsLoad={setIsLoad}
            service={deleteMember}
            list={member}
            bodyName={"miembro"}
            message={"¿Desea eliminar este miembro?"}
            afterMessage={"Miembro eliminado con éxito"}
          />
        </TableLayout>
      ) : 
      (
        <NotFoundComponent title={"No se encontra el miembro"} />
      )}
      <Pagination cantItems={cantItems} />
    </>
  );

}

export default MembersList;