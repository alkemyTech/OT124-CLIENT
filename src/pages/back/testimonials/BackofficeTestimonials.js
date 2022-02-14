import React, { useEffect, useState } from "react";
import TestimonialsHeader from "../../../components/Testimonials/Header";
import TestimonialsRow from "../../../components/Testimonials/Row";
import TestimonialsTableHeader from "../../../components/Testimonials/TableHeader";
import { getTestimonials } from "../../../services/testimonials";

export default function BackofficeTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials()
      .then((res) => {
        setTestimonials(res.data.testimonials);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="mx-auto flex justify-center shadow-lg sm:py-40">
        <div className="sm:px-32 px-2 w-full">
          <TestimonialsHeader />

          {testimonials.length > 0 ? (
            <div className="shadow-md">
              <table className=" shadow-md text-left duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
                <TestimonialsTableHeader />
                <tbody className="divide-y divide-gray-200">
                  {testimonials.map((testimonios) => (
                    <TestimonialsRow
                      key={testimonios.id}
                      testimonio={testimonios}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h1 className="text-center">No hay Testimonios</h1>
          )}
        </div>
      </div>
    </>
  );
}
