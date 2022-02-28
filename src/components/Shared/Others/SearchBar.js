import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../../../features/searchSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  return (
    <div className="flex flex-row justify-center">
      <div className=" flex flex-row h-11 justify-between my-5 mx-4 border-sky-500  items-center border-2 rounded-full sm:w-[400px] w-full sm:text-md">
        <input
          type="text"
          placeholder="Buscar..."
          className="   bg-white px-4 rounded-full h-full w-full outline-none text-xs"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        {/* <button className=''>
                <SearchIcon className='h-11 sm:text-lg py-3 pr-2 bg-white text-indigo-600 border-indigo-600 border-t border-b sm:hover:text-indigo-800 text-xs' />
            </button> */}
        {/* <input type={from ? "date" : "text"}  placeholder='From: dd/mm/aaaa' 
            onFocus={
            (e)=> {
            e.currentTarget.type = "date";
            e.currentTarget.focus();
            }} 
            className=' w-28 sm:w-48 sm:text-lg p-1 my-5 -ml-1 bg-white h-11 border-indigo-600 border outline-none text-xs' 
            value={from} onChange={handleChangeSearchFrom} />
            <input type={to ? "date" : "text"} placeholder='To: dd/mm/aaaa' 
            onFocus={
            (e)=> {
            e.currentTarget.type = "date";
            e.currentTarget.focus();
            }} 
            className=' w-28 sm:w-48  sm:text-lg p-1 my-5 -ml-1 bg-white h-11 border-indigo-600 border rounded-r-lg outline-none text-xs' 
            value={to} onChange={handleChangeSearchTo} /> */}
        <div className=" bg-sky-500 -mr-0.5 h-full w-12 border-3 border-sky-500  flex justify-center items-center rounded-r-full">
          <span className="bg-sky-500">🔍</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
