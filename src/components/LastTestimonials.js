import React, { useState, useEffect } from "react";
import HomeCard from "./HomeCard";

export default function LastTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  async function fetchData() {
    // Fetch data form db
    const mockTestimonials = [
      {
        id: 1,
        name: "Testimonial 1",
        lastImage: "www.image.url",
        content: "Soy un contenido",
      },
      {
        id: 2,
        name: "Testimonial 2",
        lastImage: "www.image.url",
        content: "Soy un contenido",
      },
      {
        id: 3,
        name: "Testimonial 3",
        lastImage: "www.image.url",
        content: "Soy un contenido",
      },
      {
        id: 4,
        name: "Testimonial 4",
        lastImage: "www.image.url",
        content: "Soy un contenido",
      },
    ];
    setTestimonials(mockTestimonials);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mt-16">
      <h2 className="pb-10 text-xl">Testimonios</h2>
      <div className="flex gap-9 flex-wrap justify-center">
        {testimonials.map((testimonial) => {
          return (
            <HomeCard
              key={testimonial.id}
              name={testimonial.name}
              img={testimonial.lastImage}
            />
          );
        })}
      </div>
      <div className="flex mt-12 items-center">
        <button className="bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded m-auto">
          Ver todos
        </button>
      </div>
    </section>
  );
}
