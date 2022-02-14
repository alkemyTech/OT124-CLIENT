import React, { useEffect, useState } from "react";
import { getContacts } from "../../../services/contact";
import ContactsTableHeader from "../../../components/Contacts/TableHeader";
import ContactsHeader from "../../../components/Contacts/Header";
import ContactsRow from "../../../components/Contacts/Row";

function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts()
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ContactsHeader />

      {contacts.length > 0 ? (
        <div className="shadow-md">
          <table className=" shadow-md text-left duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
            <ContactsTableHeader />
            <tbody className="divide-y divide-gray-200">
              {contacts.map((contact) => (
                <ContactsRow key={contact.id} contact={contact} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center py-14">No hay Contactos</h1>
      )}
    </>
  );
}

export default ContactsList;
