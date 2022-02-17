import React, { useState, useEffect } from "react";

import NewsHeader from "../../components/NewsHeader";
import NewsList from "../../components/NewsList";

export default function BackofficeNews() {
    return (
        <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
            <div className="sm:px-32 px-2 w-full">
                <NewsHeader />
                <NewsList />
            </div>
        </div>
    )
}