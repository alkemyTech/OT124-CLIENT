import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../services";
import DeleteAlert from "../Alerts/DeleteAlert";

function BodyTable(props) {
  const { list, service, setIsLoad, isLoad, afterMessage, message, bodyName } =
    props;
  console.log(list);
  return (
    <tbody className="divide-y divide-gray-200">
      {list?.map((item, count) => (
        <tr
          className={`${
            count % 2 === 0 ? "bg-sky-100" : ""
          } p-10 transform ease-in-out duration-300 hover:scale-105 text-sm sm:text-base`}
          key={item.id}
        >
          {Object.keys(item).map((property) => {
            return (
              <>
                {property !== "createdAt" &&
                  property !== "updatedAt" &&
                  property !== "deletedAt" && (
                    <td className="py-3 px-4">
                      {property === "image" ? (
                        <img
                          alt=""
                          src={`${API_BASE_URL}/api/v1/files/${item?.image?.key}`}
                        />
                      ) : (
                        item[property]
                      )}
                    </td>
                  )}
              </>
            );
          })}
          <td className="py-3 px-4 text-center">
            <DeleteAlert
              styles={
                " bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600"
              }
              id={item.id}
              title={"ELIMINAR"}
              message={message}
              afterMessage={afterMessage}
              service={service}
              setIsLoad={setIsLoad}
              isLoad={isLoad}
            />
          </td>
          <td className="py-3 px-4 text-center">
            <Link
              to={`editar-${bodyName}/${item.id}`}
              className="hover:underline"
            >
              Editar
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default BodyTable;
