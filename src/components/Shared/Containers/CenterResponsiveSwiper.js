import React from "react";

function CenterResponsiveSwiper({ children }) {
  return (
    <div className="sm:px-10 px-5 flex justify-center items-center sm:rounded-none rounded-md bg-sky-500 py-10">
      <div className="sm:max-w-[45%] w-full justify-center bg-slate-50 sm:rounded-md py-20 sm:p-10">
          {children}
      </div>
    </div>
  );
}

export default CenterResponsiveSwiper;
