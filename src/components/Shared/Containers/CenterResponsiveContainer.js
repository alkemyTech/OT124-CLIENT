import React from "react";

function CenterResponsiveContainer({ children }) {
  return (
    <div className="sm:px-10 px-3 flex sm:h-full justify-center sm:rounded-none rounded-md bg-sky-500 sm:py-10 py-3">
      <div className="lg:w-auto w-full bg-slate-50 h-full sm:rounded-md py-20 sm:p-10">
          {children}
      </div>
    </div>
  );
}

export default CenterResponsiveContainer;
