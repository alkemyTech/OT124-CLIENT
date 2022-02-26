import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectPage, selectSize } from "../features/paginationSlice";

function useQueries() {
  const page = useSelector(selectPage);
  const size = useSelector(selectSize);

  const [queries, setQueries] = useState(new URLSearchParams({ page, size }));

  useEffect(() => {
    setQueries(new URLSearchParams({ page, size }));
  }, [page, size]);

  return "?" + queries.toString();
}

export default useQueries;
