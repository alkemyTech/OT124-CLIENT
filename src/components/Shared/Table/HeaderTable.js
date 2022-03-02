import React from "react";

function HeaderTable(props) {
  const { columnsName, notBackOffice } = props;

  return (
    <thead className={` text-sm ${notBackOffice ? " bg-emerald-500" : "bg-sky-500"}  sm:text-base z-0`}>
      <tr className={`uppercase ${notBackOffice ? " bg-emerald-500 text-white" : "bg-sky-500"} `}>
        {columnsName?.map((item) => (
          <th className=" py-3 px-4 w-[170px]">{item}</th>
        ))}
        {!notBackOffice &&
          <> <th className=" py-3 px-4 "></th>
            <th className=" py-3 px-4 "></th>
          </>
        }
      </tr>
    </thead>
  );
}

export default HeaderTable;
