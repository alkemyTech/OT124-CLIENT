import React, { useEffect, useState } from "react";
import { getContacts, deleteContacts } from "../../../services/contact";
import ContactsTableHeader from "../../../components/Contacts/TableHeader";
import HeaderList from "../../../components/Shared/Containers/HeaderList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import TableLayout from "../../../components/Shared/Table/TableLayout";
import HeaderTable from "../../../components/Shared/Table/HeaderTable";
import BodyTable from "../../../components/Shared/Table/BodyTable";
import NotFoundComponent from "../../../components/Shared/Others/NotFoundComponent"

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [ isLoad, setIsLoad ] = useState(false)

  useEffect(() => {
    getContacts()
      .then((response) => {
        setContacts(response?.data?.contactList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad]);

  return (
    <CenterResponsiveContainer>
        <HeaderList
          title={"Contactos"}
          name={"contactos"}
          addTitle={"Añadir una nueva novedad"}
        />
        <>
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
    </>
    </CenterResponsiveContainer>
    
  );
}


export default ContactsList;
