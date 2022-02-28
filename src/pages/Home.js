import React, { useEffect, useState } from "react";
import Carrusel from "../components/UI/Carrusel.js";
import LastNews from "../components/News/LastNews";
import LastTestimonials from "../components/Testimonials/LastTestimonials";
import { getOrganizationData } from "../services/organization.js";

function Box() {
  const styles = {
    width: 200,
    height: 150,
    backgroundColor: "gray",
  };

  return <div style={styles}></div>;
}

function Home() {
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const orgData = await getOrganizationData(1);
      setWelcomeText(orgData?.data?.organization.welcomeText);
    }
    fetchData();
  }, []);

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
