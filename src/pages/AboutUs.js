import React from "react";
import { useState, useEffect } from "react";
import { getAllMembers } from "../services/members";
import MemberCard from "../components/Members/MemberCard";
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";

function AboutUs() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMembers()
      .then((res) => {
        setMembers(res.data.members);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CenterResponsiveContainer>
      <div className="grid md:grid-cols-2">
        <div className="px-6">
          <h2 className="text-3xl font-bold text-center m-4">Nosotros</h2>
          <p className="text-justify">
            Desde 1997 en <b>Somos Más</b> trabajamos con los chicos y chicas,
            mamás y papás, abuelos y vecinos del barrio La Cava generando
            procesos de crecimiento y de inserción social. Uniendo las manos de
            todas las familias, las que viven en el barrio y las que viven fuera
            de él, es que podemos pensar, crear y garantizar estos procesos.{" "}
            <br /> Somos una asociación civil sin fines de lucro que se creó en
            1997 con la intención de dar alimento a las familias del barrio. Con
            el tiempo fuimos involucrándonos con la comunidad y agrandando y
            mejorando nuestra capacidad de trabajo. <br /> Hoy somos un centro
            comunitario que acompaña a más de 700 personas a través de las áreas
            de: Educación, deportes, primera infancia, salud, alimentación y
            trabajo social.
          </p>
        </div>
        <div>
          <div className="px-6">
            <h2 className="text-3xl font-bold text-center m-4">Visión</h2>
            <p className="text-justify">
              Mejorar la calidad de vida de niños y familias en situación de
              vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo
              en cada individuo a través de la educación, salud, trabajo,
              deporte, responsabilidad y compromiso.
            </p>
          </div>
          <div className="px-2">
            <h2 className="text-3xl font-bold text-center m-4">Misión</h2>
            <p className="text-justify">
              Trabajar articuladamente con los distintos aspectos de la vida de
              las familias, generando espacios de desarrollo personal y
              familiar, brindando herramientas que logren mejorar la calidad de
              vida a través de su propio esfuerzo.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center m-6">El equipo</h2>
        {members?.length !== 0 ? (
          <div className="flex flex-wrap justify-center gap-[20px]">
            {members.map((member) => {
              return <MemberCard key={member.id} member={member} />;
            })}
          </div>
        ) : (
          <div className=" flex flex-col text-center justify-center  mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
            <h3 className=" p-1 text-xl">No hay miembros existentes</h3>
          </div>
        )}
      </div>
    </CenterResponsiveContainer>
  );
}

export default AboutUs;
