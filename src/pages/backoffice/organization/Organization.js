import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackOfficeCard from '../../../components/BackOfficeCard';
import organizationIcon from "../../../img/icons/organization.png";
import { getAllOrgs, selectAllOrgsData, selectDeleteOrgData } from '../../../features/orgSlice';
import { getAllOrganizations } from '../../../services/organization';

import OrganizationsList from './OrganizationsList';
//when endpoint to get all organizations exists
let organizations = [
  {
    id: "1",
    name: "org-1",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "adress-org-1",
    phone: "3131-1313",
    email: "org.1@gmail.com",
    welcomeText: "we are organization "
  },
  {
    id: "2",
    name: "org-2",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: "adress-org-2",
    phone: "3131-1313",
    email: "org.2@gmail.com",
    welcomeText: "we are organization "
  },
  {
    id: "3",
    name: "org-3",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "adress-org-3",
    phone: "3131-1313",
    email: "org.3@gmail.com",
    welcomeText: "we are organization "
  },
]

function Organization() {
  let dispatch = useDispatch()

  let AllOrgsDataRes = useSelector(selectAllOrgsData)
  let DeleteOrgData = useSelector(selectDeleteOrgData)



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
      navlink: "/crear-organizacion",
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
