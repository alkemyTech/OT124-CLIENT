import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";
import ProfileBody from "../components/Profile/ProfileBody";

export default function Profile() {

   return <CenterResponsiveContainer>
      <ProfileBody/>
   </CenterResponsiveContainer>

}

//