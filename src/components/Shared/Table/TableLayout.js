import React from 'react'

function TableLayout({children}) {
    return ( 
        <table className=" shadow-md text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
            {children}
        </table>
     );
}

export default TableLayout;