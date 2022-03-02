import React, { useEffect, useState } from "react";
import { getContacts, deleteContacts } from "../../../services/contact";
import ContactsTableHeader from "../../../components/Contacts/TableHeader";
import HeaderList from "../../../components/Shared/Containers/HeaderList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import TableLayout from "../../../components/Shared/Table/TableLayout";
import HeaderTable from "../../../components/Shared/Table/HeaderTable";
import BodyTable from "../../../components/Shared/Table/BodyTable";
import NotFoundComponent from "../../../components/Shared/Others/NotFoundComponent";
import SearchBar from "../../../components/Shared/Others/SearchBar";
import Pagination from "../../../components/Shared/Table/Pagination";
import useQueries from "../../../hooks/useQueries";
import Spinner from "../../../components/Shared/Loaders/Spinner";

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getContacts(queries)
      .then((response) => {
        setContacts(response?.data?.contactList);
        setCantItems(response?.data?.count);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);

  return (
    <CenterResponsiveContainer>
      <header className="flex sm:flex-row flex-col  items-center justify-around ">
        <h1 className="sm:text-5xl text-3xl text-center text-sky-500">
          Contactos
        </h1>
      </header>
      <>
        <SearchBar />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {contacts?.length ? (
              <TableLayout>
                <HeaderTable
                  columnsName={[
                    "Nombre",
                    "Telefono",
                    "Email",
                    "Mensaje",
                    "Enviado",
                  ]}
                />
                <BodyTable
                  isLoad={isLoad}
                  setIsLoad={setIsLoad}
                  service={deleteContacts}
                  list={contacts}
                  bodyName={"contacto"}
                  message={"¿Desea eliminar esta contacto?"}
                  afterMessage={"Contacto eliminada con éxito"}
                />
              </TableLayout>
            ) : (
              <NotFoundComponent title={"No se encontraron contactos"} />
            )}
            <Pagination cantItems={cantItems} />
          </>
        )}
      </>
    </CenterResponsiveContainer>
  );
}

export default ContactsList;
