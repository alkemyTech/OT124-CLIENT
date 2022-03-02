import React from "react";

function TableLayout({ children, notBackOffice }) {
  let styles = {

  }
  return (
    <div className={"overflow-x-auto mx-1 2xl:overflow-x-hidden overflow-y-auto pl-3" + (!notBackOffice ? 'max-h-[350px]':'h-full rounded-lg' )} >
      <table className="text-left transform ease-in-out hover:-translate-x-1 rounded-md duration-200 sm:overflow-x-hidden overflow-x-auto cursor-pointer">
        {children}
      </table>
    </div>
  );
}

export default TableLayout;

// <div className="overflow-x-auto mx-1 2xl:overflow-x-hidden overflow-y-auto max-h-[350px] pl-3">
//           <table className="text-left transform container ease-in-out hover:-translate-x-1 rounded-md duration-200 sm:overflow-x-hidden overflow-x-auto cursor-pointer"></table>