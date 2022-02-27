import React from "react";
import { useState, useEffect } from "react";
import { deleteMember, getAllMembers } from "../../../services/members";
import TableLayout from "../../../components/Shared/Table/TableLayout";
import HeaderTable from "../../../components/Shared/Table/HeaderTable";
import BodyTable from "../../../components/Shared/Table/BodyTable";
import NotFoundComponent from "../../../components/Shared/Others/NotFoundComponent";
import Pagination from "../../../components/Shared/Table/Pagination";
import useQueries from "../../../hooks/useQueries";
import SearchBar from "../../../components/Shared/Others/SearchBar";
import Spinner from "../../../components/Shared/Loaders/Spinner";

function MembersList(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [member, setMember] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getAllMembers(queries)
      .then((res) => {
        setMember(
          res?.data?.members?.map((e) => {
            const { id, name, position, image, createdAt } = e;
            const date = new Date(createdAt).toLocaleDateString();
            return { ...{ image, name, position, date, id } };
          })
        );
        setCantItems(res?.data?.count);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {member?.length ? (
            <TableLayout>
              <HeaderTable
                columnsName={["Imagen", "Nombre", "Posición", "Fecha"]}
              />
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
          ) : (
            <NotFoundComponent title={"No se encuentra ningun miembro"} />
          )}
          <Pagination cantItems={cantItems} />
        </>
      )}
    </>
  );
}

export default MembersList;
