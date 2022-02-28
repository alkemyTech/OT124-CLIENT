import React from "react";
import HeaderList from "../../../components/Shared/Containers/HeaderList";
import NewsList from "../../../components/NewsList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";

export default function BackofficeNews() {
    return (
        <CenterResponsiveContainer>
            <HeaderList
                title={"Novedades"}
                name={"novedad"}
                addTitle={"Añadir una nueva novedad"}
            />
            <NewsList />
        </CenterResponsiveContainer>
    )
}