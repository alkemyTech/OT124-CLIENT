import React from "react";

function TwoColsForm({children}) {
  return (
    <div className=" container mx-auto py-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:px-0 px-4 sm:gap-8">
            {children}
      </div>
    </div>
  );
}

export default TwoColsForm;
