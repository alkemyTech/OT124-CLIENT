import ContactForm from "../components/Contacts/ContactForm";
import React from "react";
import ContactUsDetails from "../components/Contacts/ContacUsDetails";
import Maps from "../components/Shared/Others/Maps";

export default function ContactUs() {
  return (
    <div className="">
      <h1 className="text-center text-5xl my-10">Contactenos</h1>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 max-w-[80%] lg:w-3/5 py-4 px-6 rounded-3xl  bg-sky-500">
        <ContactForm />
        <ContactUsDetails >
        <Maps />
        </ContactUsDetails>
      </div>
      </div>
    </div>
  );
}
