import React, { useState, useEffect } from "react";
import HeaderList from "../../../components/Shared/Containers/HeaderList";
import MembersList from "./MembersList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";

export default function BackofficeMembers() {
    return (
        <CenterResponsiveContainer>
            <HeaderList
                title={"Miembros"}
                name={"miembro"}
                addTitle={"Añadir un nuevo miembro"}
            />
            <MembersList />
        </CenterResponsiveContainer>
    )
}