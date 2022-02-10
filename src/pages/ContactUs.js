import ContactForm from "../components/ContactForm";
import React from "react";

export default function ContactUs() {
    return (
      <div className="">  
          <h1 className="text-center text-5xl text-[#9ac9fb] my-10">Contactenos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 sm:mx-64 shadow-lg p-4 rounded-r-xl">
            <ContactForm />
            <div className="flex flex-col justify-center items-center bg-[#9ac9fb] shadow-lg text-white text-justify text-2xl rounded-r-xl">
            <div className=" mb-10">
              <strong><h2>📌Datos de contacto:</h2></strong>
            </div>
                <ul className=""> 
                    <li>● Mail: somosfundacionmas@gmail.com</li>
                    <li>● Instagram: SomosMás</li>
                    <li>● Facebook: Somos_Más</li>
                    <li>● Teléfono de contacto: 1160112988</li>
                </ul>
            </div>
          </div>
      </div>
    );
  }