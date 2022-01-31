import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Spinner from "./Spinner";

import React from "react";
import Carrusel from "./Carrusel";

function Home(props) {
  //SPINNER USAGE EXAMPLE-------------------------------------------------------------
  const url = "https://baconipsum.com/api/?type=meat-and-filler";
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setIsLoading(false);
  };
  //-----------------------------------------------------------------------------------
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="Home">
          <div>
            <p>Nuestro objetivo:</p>
            <p>{data}</p>
            <Carrusel></Carrusel>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
