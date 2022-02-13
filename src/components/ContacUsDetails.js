import React from 'react'
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Mail from "../img/email.png";
import Tel from "../img/whatsapp.png";

function ContactUsDetails() {
    return ( 
        <div className="flex flex-col justify-center items-center bg-sky-500 shadow-lg text-white text-justify sm:text-xl text-md py-3 rounded-r-xl">
          <div className=" p-10 bg-white text-sky-500 rounded-r-xl">
            <div className=" mb-5 text-center">
              <strong>
                <h2>Datos de contacto:</h2>
              </strong>
            </div>
            <ul className="list-none">
              <li className=" flex items-center">
                <img src={Mail} alt="" className="h-5 mr-3" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="mailto:somosfundacionmas@gmail.com"
                >
                  somosfundacionmas@gmail.com
                </a>
              </li>
              <li className=" flex items-center">
                <img src={Instagram} alt="" className="h-5 mr-3" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="/"
                >
                  SomosMás
                </a>
              </li>
              <li className=" flex items-center">
                <img src={Facebook} alt="" className="h-5 mr-3" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="/"
                >
                  Somos_Más
                </a>
              </li>
              <li className=" flex items-center">
                <img src={Tel} alt="" className="h-5 mr-3" />
                <a
                  className="transform hover:scale-105 hover:text-sky-600"
                  href="tel:01160112988"
                >
                  +54-911-60112988
                </a>
              </li>
            </ul>
          </div>
        </div>
     );
}

export default ContactUsDetails;