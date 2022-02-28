import React from 'react'
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import Mail from "../../img/email.png";
import Tel from "../../img/whatsapp.png";

function ContactUsDetails({children}) {
    return ( 
        <div className="flex bg-sky-500 text-white items-center py-3 text-justify sm:text-xl text-sm rounded-r-xl">
          <div className="bg-white w-full text-sky-500 p-5 sm:rounded-r-xl rounded-xl">
            <div className=" mb-5 text-center">
              <strong>
                <h2>Datos de contacto:</h2>
              </strong>
            </div>
            <ul className="list-none">
              <li className=" flex items-center">
                <img src={Mail} alt="" className="h-5 mr-2" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="mailto:somosfundacionmas@gmail.com"
                >
                  somosfundacionmas@gmail.com
                </a>
              </li>
              <li className=" flex items-center">
                <img src={Instagram} alt="" className="h-5 mr-2" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="https://www.instagram.com/somosmas"
                >
                  SomosMás
                </a>
              </li>
              <li className=" flex items-center">
                <img src={Facebook} alt="" className="h-5 mr-2" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="https://www.facebook.com/somos_mas"
                >
                  Somos_Más
                </a>
              </li>
              <li className=" flex items-center">
                <img src={Tel} alt="" className="h-5 mr-2" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="tel:01160112988"
                >
                  +54-911-60112988
                </a>
              </li>
            </ul>
            <div className=" mt-5 text-center">
              <strong>
                <h2>📌 Donde encontrarnos:</h2>
              </strong>
            </div>
            {children}
          </div>
        </div>
     );
}

export default ContactUsDetails;