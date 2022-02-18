import ContactForm from "../components/Contacts/ContactForm";
import React from "react";
import ContactUsDetails from "../components/Contacts/ContacUsDetails";

export default function ContactUs() {
  return (
    <div className="">
      <h1 className="text-center text-5xl text-sky-500 my-10">Contactenos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:mx-64 shadow-lg p-4 rounded-r-xl">
        <ContactForm />
        <ContactUsDetails />
      </div>
    </div>
  );
}
