import React from "react";
import HeaderList from "../../../components/Shared/Containers/HeaderList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import SlidesList from "../../../components/Slides/ListSlides";

export default function BackofficeSlides() {
    return (
        <CenterResponsiveContainer>
            <HeaderList
                title={"Slides"}
                name={"slide"}
                addTitle={"Añadir un nuevo slide"}
            />
            <SlidesList />
        </CenterResponsiveContainer>
    )
}