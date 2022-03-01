import React from "react";

function HeaderTable(props) {
  const { columnsName, notBackOffice } = props;

  return (
    <thead className="bg-sky-500  text-sm sm:text-base z-0">
      <tr className="uppercase  bg-sky-500 ">
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
