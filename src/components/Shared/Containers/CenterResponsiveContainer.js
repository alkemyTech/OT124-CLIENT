import React from "react";

function CenterResponsiveContainer({ children }) {
  return (
    <div className="sm:px-10 px-3 grid h-full justify-center items-center sm:rounded-none rounded-md bg-sky-500 py-10">
      <div className="grid justify-center bg-slate-50 sm:rounded-md py-20 sm:p-10">
          {children}
      </div>
    </div>
  );
}

export default CenterResponsiveContainer;
