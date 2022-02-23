import React from "react";

function OneColForm({ children }) {
  return (
    <div className=" container mx-auto py-3 flex justify-center">
      <div className="grid grid-cols-1 px-1 sm:w-[500px]">
      {children}
      </div>
    </div>
  );
}

export default OneColForm;
