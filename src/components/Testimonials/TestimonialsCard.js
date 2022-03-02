import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../services";

export default function TestimonialsCard({ testimonial }) {
  return (
    <div className="w-[250px] py-4 px-8 bg-white shadow-lg hover:shadow-xl rounded-lg mt-20 grid">
      <div className="flex justify-center -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-sky-400"
          alt={testimonial.name}
          src={`${API_BASE_URL}/api/v1/files/${testimonial.image.key}`}
        />
      </div>
      <div>
        <p className="mt-2 text-gray-600 italic">"{testimonial.content}"</p>
      </div>
      <div className="flex justify-end mt-4 self-end">
        <a className="text-xl font-medium text-sky-500">{testimonial.name}</a>
      </div>
    </div>
  );
}
