import React from "react";

function TableLayout({ children }) {
  return (
    <div className="overflow-x-auto mx-1 sm:overflow-x-hidden overflow-y-auto max-h-[450px] pl-3">
          <table className="text-left transform ease-in-out hover:-translate-x-1 rounded-md duration-200 sm:min-w-[1000px] max-w-[400px] sm:overflow-x-hidden overflow-x-auto cursor-pointer">
            {children}
          </table>
    </div>
  );
}

export default TableLayout;
