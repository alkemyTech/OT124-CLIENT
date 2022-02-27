import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decresePage,
  increasePage,
  selectPage,
  selectSize,
  setPage,
} from "../../../features/paginationSlice";

const Pagination = (props) => {
  const { cantItems } = props;
  const size = useSelector(selectSize);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  let pageLimit = {
    prev: (page + 1) * size - size + 1,
    next: (page + 1) * size,
  };
  const cantPages =
    new Array(cantItems)
      .fill(1, 0, cantItems - 1)
      .map((e, i) => i + 1)
      .filter((e, i) => (e % size === 0 ? i : 0)).length + 1;

  useEffect(() => {
    if (cantItems % size === 0) {
      if (pageLimit.prev >= size) {
        dispatch(decresePage());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cantItems]);

      useEffect(() => {
        if (pageLimit.prev >= size){
            dispatch(setPage(0));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cantItems])

  return (
    <>
      <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
        {cantItems > size && (
          <div className=" container relative sm:hidden">
            {pageLimit.prev > size && (
              <div>
                <button
                  onClick={(e) => dispatch(decresePage())}
                  className="absolute items-center left-0 px-4 py-2 border border-sky-600 text-sm font-medium rounded-md text-sky-600 bg-white hover:bg-gray-50"
                >
                  Anterior
                </button>
              </div>
            )}
            {pageLimit.next < cantItems && (
              <button
                onClick={(e) => dispatch(increasePage())}
                className="ml-3 absolute right-0 items-center px-4 py-2 border border-sky-600 text-sm font-medium rounded-md text-sky-600 bg-white hover:bg-gray-50"
              >
                Siguiente
              </button>
            )}
          </div>
        )}
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          {cantItems > 0 && (
            <p className={`text-sm text-gray-700 ${cantItems<=size && "mt-3"}`}>
              Mostrando <span className="font-medium">{pageLimit.prev}</span>{" "}
              hasta{" "}
              <span className="font-medium">
                {pageLimit.next < cantItems
                  ? `${pageLimit.next}`
                  : `${cantItems}`}
              </span>{" "}
              de <span className="font-medium">{cantItems}</span>
            </p>
          )}
          <div>
            {cantItems > size && (
              <nav
                className="z-0 inline-flex rounded-3xl p-2 gap-2 border shadow-sm -space-x-px "
                aria-label="Pagination"
              >
                {pageLimit.prev > size && (
                  <>
                    <button
                      onClick={(e) => dispatch(setPage(0))}
                      className="inline-flex items-center px-2 py-2 rounded-full aspect-square w-full    bg-white text-sm font-medium text-sky-500 "
                    >
                      <span className="sr-only">Anterior</span>
                      {"<<"}
                    </button>
                    <button
                      onClick={(e) => dispatch(decresePage())}
                      className="inline-flex items-center px-2 py-2 aspect-square rounded-full w-full   bg-white text-sm font-medium text-sky-500 "
                    >
                      <span className="sr-only">Siguiente</span>
                      {"<"}
                    </button>
                  </>
                )}
                {page >= 0 && (
                  <button
                    onClick={() => dispatch(setPage(0))}
                    className={`inline-flex items-center px-4 ${
                      page === 0 ? "bg-sky-200 " : "bg-white hover:bg-sky-100"
                    }  aspect-square w-full rounded-full text-sm font-medium text-sky-600 transform ease-in-out duration-300 hover:scale-110`}
                  >
                    <span className="sr-only">Anterior</span>
                    {"1"}
                  </button>
                )}
                {(page + 1) * size > 0 && page >= 3 && (
                  <button
                    className={`inline-flex items-center px-3.5 aspect-square w-full rounded-full text-sm font-medium text-sky-600 `}
                  >
                    <span className="sr-only">Anterior</span>
                    {"..."}
                  </button>
                )}

                {new Array(cantPages)
                  ?.fill(1, 0, 11)
                  ?.map((e, i) => i + 1)
                  .slice(page-1>=0 ? page-1 : 0, page + 2)
                  ?.map((e) => (
                    <>
                      {e !== 1 && e !== cantPages && (
                        <button
                          onClick={() => dispatch(setPage(e - 1))}
                          className={`inline-flex items-center px-3.5 aspect-square w-full rounded-full ${
                            e - 1 === page
                              ? "bg-sky-200 "
                              : "bg-white hover:bg-sky-100"
                          }   text-sm font-medium text-sky-600 transform ease-in-out duration-300 hover:scale-110`}
                        >
                          <span className="sr-only">Anterior</span>
                          {e}
                        </button>
                      )}
                    </>
                  ))}
                {cantPages > 3 &&
                  (page + 1) * size < cantItems - size &&
                  page !== cantPages - 3 && (
                    <>
                      <button
                        className={`inline-flex items-center px-3.5 aspect-square w-full rounded-full text-sm font-medium text-sky-600 `}
                      >
                        <span className="sr-only">Anterior</span>
                        {"..."}
                      </button>
                    </>
                  )}
                {cantPages !== page && (
                  <button
                    onClick={() => dispatch(setPage(cantPages - 1))}
                    className={`inline-flex items-center px-3.5 ${
                      page === cantPages - 1
                        ? "bg-sky-200 "
                        : "bg-white hover:bg-sky-100"
                    }  aspect-square w-full rounded-full text-sm font-medium text-sky-600 transform ease-in-out duration-300 hover:scale-110 `}
                  >
                    <span className="sr-only">Anterior</span>
                    {cantPages}
                  </button>
                )}
                {pageLimit.next < cantItems && (
                  <>
                    <button
                      onClick={(e) => dispatch(increasePage())}
                      className="inline-flex items-center px-2 py-2 aspect-square rounded-full w-full   bg-white text-sm font-medium text-sky-600 "
                    >
                      <span className="sr-only rounded-full">Siguiente</span>
                      {">"}
                    </button>
                    <button
                      onClick={(e) => dispatch(setPage(cantPages - 1))}
                      className="inline-flex items-center px-2 py-2 rounded-full aspect-square w-full   bg-white text-sm font-medium text-sky-600 "
                    >
                      <span className="sr-only">Siguiente</span>
                      {">>"}
                    </button>
                  </>
                )}
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
