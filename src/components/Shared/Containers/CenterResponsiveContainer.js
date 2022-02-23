import React from "react";

function CenterResponsiveContainer({ children }) {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="px-2 lg:w-auto w-full">
          {children}
      </div>
    </div>
  );
}

export default CenterResponsiveContainer;
