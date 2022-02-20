import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackOfficeCard from '../../../components/Backoffice/BackOfficeCard';
import organizationIcon from "../../../img/icons/organization.png";
import { getAllOrgs, selectAllOrgsData, selectDeleteOrgData } from '../../../features/orgSlice';
import { getAllOrganizations } from '../../../services/organization';

import OrganizationsList from '../../../components/Organizations/OrganizationsList';
//when endpoint to get all organizations exists


function Organization() {
  let dispatch = useDispatch()

  let AllOrgsDataRes = useSelector(selectAllOrgsData)
  



  useEffect(async () => {
    try {

      const res = await getAllOrganizations();

      if (res?.status === 200 || res?.status === 201 || res?.status === 304) {

        dispatch(getAllOrgs(res?.data));

      }else{
        
        console.error("error status")
      }

    } catch (e) {
      console.error(e)
    }

  }
    , [])


  const items = [
    {
      title: "crear organización",
      image: organizationIcon,
      navlink: "/organizacion/crear-organizacion",
    },
  ];
  const [orgData, setOrgData] = useState({
    name: "",
    sender: false,
    id: "",
    image: ""

  })
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <OrganizationsList organizations={AllOrgsDataRes?.organizations} setOrgData={setOrgData}></OrganizationsList>
      {items.map((item) => {
        return (
          <BackOfficeCard
            key={item.title}
            title={item.title}
            image={item.image}
            navlink={"/backoffice" + item.navlink}
          />

        );
      })}
    </div>
  );
}

export default Organization;
