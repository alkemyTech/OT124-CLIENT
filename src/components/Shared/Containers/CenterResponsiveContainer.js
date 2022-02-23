import React from "react";

function CenterResponsiveContainer({ children }) {
  return (
    <div className="mx-auto flex justify-center h-full bg-sky-500 sm:py-10">
      <div className="sm:w-auto w-full bg-white h-full sm:rounded-md sm:p-10">
          {children}
      </div>
    </div>
  );
}

export default CenterResponsiveContainer;
