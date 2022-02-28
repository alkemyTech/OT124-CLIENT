import React from "react";
import { useSelector } from 'react-redux';
import Carrusel from "../components/UI/Carrusel.js";
import LastNews from "../components/News/LastNews";
import LastTestimonials from "../components/Testimonials/LastTestimonials";
import { selectWelcomeText } from '../features/ongSlice';

function Home(props) {
  const welcomeText = useSelector(selectWelcomeText);

  return (
    <div className="Home flex flex-col justify-center items-center text-center">
      <Carrusel />
      <h1 className="text-4xl">{welcomeText}</h1>
      <LastNews></LastNews>
      <LastTestimonials></LastTestimonials>
    </div>
  );
}

export default Home;
