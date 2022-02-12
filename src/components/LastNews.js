import React, { useState, useEffect } from "react";
import HomeCard from "./HomeCard";
import { getAllNews } from "../services/news";

export default function LastNews() {
  const [newsArray, setNewsArray] = useState([]);

  async function fetchData() {
    try {
      const response = await getAllNews();
      setNewsArray(response?.data.news.slice(0, 4));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mt-16">
      <h2 className="pb-10 text-xl">Últimas novedades</h2>
      <div className="flex gap-9 flex-wrap justify-center">
        {newsArray.length ? (
          newsArray.map((news) => {
            return (
              <HomeCard
                id={news.id}
                type="novedades"
                key={news.id}
                name={news.name}
                img={news.image.key}
              />
            );
          })
        ) : (
          <h2>No existen nodevades por el momento</h2>
        )}
      </div>
      <div className="flex mt-12 items-center">
        <button className="bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded m-auto">
          Ver todas
        </button>
      </div>
    </section>
  );
}
