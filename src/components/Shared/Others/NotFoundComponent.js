import React from "react";

function NotFoundComponent(props) {
  const { title } = props;
  return (
    <div className=" flex flex-col text-center justify-center  mx-6 my-6 md:h-60 border-1 rounded-lg p-2 md:p-6">
      <h3 className=" p-1 text-xl">{title}</h3>
    </div>
  );
}

export default NotFoundComponent;
