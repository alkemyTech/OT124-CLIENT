import React, { useState, useEffect } from "react";
import MembersHeader from "./MembersHeader";
import MembersList from "./MembersList";

export default function BackofficeMembers() {
    return (
        <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
            <div className="sm:px-32 px-2 w-full">
                <MembersHeader />
                <MembersList />
            </div>
        </div>
    )
}