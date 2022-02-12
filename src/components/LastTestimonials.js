import React, { useState, useEffect } from "react";
import HomeCard from "./HomeCard";
import { getAllTestimonials } from "../services/testimonials";

export default function LastTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  async function fetchData() {
    try {
      const response = await getAllTestimonials();
      console.log(response);
      setTestimonials(response?.data.testimonials.slice(0, 4));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mt-16">
      <h2 className="pb-10 text-xl">Testimonios</h2>
      <div className="flex gap-9 flex-wrap justify-center">
        {testimonials.lenght ? (
          testimonials.map((testimonial) => {
            return (
              <HomeCard
                id={testimonial.id}
                type="testimonios"
                key={testimonial.id}
                name={testimonial.name}
                img={testimonial.lastimage?.key}
              />
            );
          })
        ) : (
          <h2>No existen testimonios por el momento</h2>
        )}
      </div>
      <div className="flex mt-12 items-center">
        <button className="bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded m-auto">
          Ver todos
        </button>
      </div>
    </section>
  );
}
