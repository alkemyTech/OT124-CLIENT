import React, { useEffect, useState } from "react";
import { getContacts, deleteContacts } from "../../../services/contact";
import ContactsTableHeader from "../../../components/Contacts/TableHeader";
import HeaderList from "../../../components/Shared/Containers/HeaderList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import TableLayout from "../../../components/Shared/Table/TableLayout";
import HeaderTable from "../../../components/Shared/Table/HeaderTable";
import BodyTable from "../../../components/Shared/Table/BodyTable";
import NotFoundComponent from "../../../components/Shared/Others/NotFoundComponent"
import SearchBar from "../../../components/Shared/Others/SearchBar";
import Pagination from "../../../components/Shared/Table/Pagination";
import useQueries from "../../../hooks/useQueries";

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [ isLoad, setIsLoad ] = useState(false)

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    getContacts(queries)
      .then((response) => {
        setContacts(response?.data?.contactList);
        setCantItems(response?.data?.count)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);

  return (
    <CenterResponsiveContainer>
        <HeaderList
          title={"Contactos"}
          name={"contactos"}
          addTitle={"Añadir una nueva novedad"}
        />
        <>
        <SearchBar />
          {contacts?.length ? (
            <TableLayout>
              <HeaderTable columnsName={["Nombre", "Telefono","Email", "Message", "Enviado"]} />
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
      ) : 
      (
        <NotFoundComponent title={"No se encontraron contactos"} />
      )}
      <Pagination cantItems={cantItems} />
    </>
    </CenterResponsiveContainer>
    
  );
}


export default ContactsList;
