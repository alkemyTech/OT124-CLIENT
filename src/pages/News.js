import { getAllNews } from "../services/news";
import React, { useState, useEffect } from "react";
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";
import PublicCard from "../components/Shared/Cards/PublicCard";

export default function News() {
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllNews();
        setNewsArray(response?.data?.news);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <CenterResponsiveContainer>
      <div className="max-w-[1000px]">
      <h2 className="text-3xl font-bold text-center mb-10">Novedades</h2>
      <div className="flex flex-wrap gap-20 justify-center">
        {newsArray?.length ? (
          newsArray.map((news) => <PublicCard key={news.id} entity={news} />)
        ) : (
          <h1 className="text-center">No hay novedades</h1>
        )}
      </div>
      </div>
    </CenterResponsiveContainer>
  );
}
