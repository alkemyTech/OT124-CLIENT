import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { initialPagination, selectPage, selectSize } from "../features/paginationSlice";
import { initialSearch, selectSearch } from "../features/searchSlice";

function useQueries() {
  const page = useSelector(selectPage);
  const size = useSelector(selectSize);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch()
  const location = useLocation()

  const [queries, setQueries] = useState(new URLSearchParams({ page, size }));

  useEffect(() => {
    setQueries(new URLSearchParams({ page, size, search }));
  }, [page, size, search]);

  useEffect(()=>{
        dispatch(initialSearch())
        dispatch(initialPagination())
  }, [location, dispatch])

  return "?" + queries.toString();
}

export default useQueries;
