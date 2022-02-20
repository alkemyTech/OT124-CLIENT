import React from "react";

function HeaderTable(props) {
  const { columnsName } = props;

  return (
    <thead className="bg-sky-500 text-sm sm:text-base">
      <tr className="uppercase">
        {columnsName?.map((item) => (
          <th className="tracking-wider py-3 px-4">{item}</th>
        ))}
        <th className="tracking-wider py-3 px-4"></th>
        <th className="tracking-wider py-3 px-4"></th>
      </tr>
    </thead>
  );
}

export default HeaderTable;
