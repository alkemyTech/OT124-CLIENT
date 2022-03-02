import React from "react";

function OneColForm({ children }) {
  return (
    <div className=" container mx-auto py-3 flex justify-center">
      <div className="grid grid-cols-1 sm:px-0 px-4 sm:w-[500px] max-w-[500px]">
      {children}
      </div>
    </div>
  );
}

export default OneColForm;
