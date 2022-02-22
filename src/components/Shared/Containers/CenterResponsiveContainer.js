import React from "react";

function CenterResponsiveContainer({ children }) {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
          {children}
      </div>
    </div>
  );
}

export default CenterResponsiveContainer;
