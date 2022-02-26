import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initial, selectPage, selectSize } from "../../../features/paginationSlice";
import { API_BASE_URL } from "../../../services";
import DeleteAlert from "../Alerts/DeleteAlert";

function BodyTable(props) {
  const { list, service, setIsLoad, isLoad, afterMessage, message, bodyName } =
    props;
  
  const page = useSelector(selectPage)
  const size = useSelector(selectSize)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(initial())
  }, [dispatch])

  return (
    <tbody className=" bg-sky-50 max-h-[375px] overflow-y-auto overflow-x-hidden">
      {list?.slice(page*size, ((page+1)*(size)))?.map((item, count) => (
        <tr
          className={`${
            count % 2 === 0 ? "bg-sky-100 hover:bg-sky-200" : "bg-white hover:bg-slate-100 "
          } p-10 transform ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-sky-100 hover:scale-[1.02] text-sm sm:text-base`}
          key={item.id}
        >
          {Object.keys(item).map((property) => {
            return (
              <>
                { property !== "updatedAt" &&
                  property !== "deletedAt" &&
                  property !== "id" && (
                    <td className="py-3 px-4 first:rounded-bl-md ">
                      {property === "image" ? (
                        <div className="w-full flex">
                        {item?.image?.key ? <img
                          alt=""
                          className=" object-contain w-[100px] h-[70px]"
                          src={`${API_BASE_URL}/api/v1/files/${item?.image?.key}`}
                        /> :
                        <div className=" bg-gradient-to-tr from-sky-100  to-sky-200 w-[100px] min-h-[70px] justify-center" ></div>
                      }
                      </div>
                        
                      ) : (
                        property === "createdAt" ?
                        (new Date(item[property]).toLocaleDateString())
                        :
                        (item[property]?.length>=50 ? <span className="">{Array.from(item[property]).slice(0, 50).join("").concat(" (...)")}</span> : item[property])
                      )}
                    </td>
                  )}
              </>
            );
          })}
          <td className="py-3 px-4 text-center ">
            <DeleteAlert
              styles={
                " bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1  hover:bg-red-600"
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
          <td className="py-3 px-4 text-center rounded-br-md ">
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
