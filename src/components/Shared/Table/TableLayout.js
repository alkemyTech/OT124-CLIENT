import React from "react";

function TableLayout({ children }) {
  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 w-full overflow-x-auto border-collapse cursor-pointer">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableLayout;
