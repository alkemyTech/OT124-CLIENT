import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCard from "../Shared/Cards/HomeCard";
import TestimonialsCard from "./TestimonialsCard";
import { getAllTestimonials } from "../../services/testimonials";

export default function LastTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  async function fetchData() {
    try {
      const response = await getAllTestimonials();

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
        {testimonials.length ? (
          testimonials.map((testimonial) => {
            return (
              <TestimonialsCard
                testimonial={testimonial}
                key={testimonial.id}
              />
            );
          })
        ) : (
          <h2>No existen testimonios por el momento</h2>
        )}
      </div>
      <div className="flex mt-12 items-center justify-center">
        <Link to="/testimonios">
          <button className="bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded m-auto">
            Ver todos
          </button>
        </Link>
      </div>
    </section>
  );
}
