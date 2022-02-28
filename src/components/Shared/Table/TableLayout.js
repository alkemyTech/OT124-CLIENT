import React from "react";

function TableLayout({ children }) {
  return (
<<<<<<< HEAD
    <div className="overflow-x-auto mx-1 max-w-[800px] overflow-y-auto max-h-[350px] pl-3">
          <table className="text-left transform ease-in-out hover:-translate-x-1 rounded-md duration-200 sm:overflow-x-hidden overflow-x-auto cursor-pointer">
=======
    <div className="overflow-x-auto mx-1 2xl:overflow-x-hidden overflow-y-auto max-h-[350px] pl-3">
          <table className="text-left transform container ease-in-out hover:-translate-x-1 rounded-md duration-200 sm:overflow-x-hidden overflow-x-auto cursor-pointer">
>>>>>>> c0431484976110d6e3b8b003a0b7cbfd8dc294eb
            {children}
          </table>
    </div>
  );
}

export default TableLayout;
