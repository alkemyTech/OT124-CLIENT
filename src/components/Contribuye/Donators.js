import React, { useEffect, useState } from 'react'
import { getDonatesAll } from '../../services/contribuye'
import CenterResponsiveContainer from '../Shared/Containers/CenterResponsiveContainer'
import HeaderList from '../Shared/Containers/HeaderList'
import BodyTable from '../Shared/Table/BodyTable'
import HeaderTable from '../Shared/Table/HeaderTable'
import TableLayout from '../Shared/Table/TableLayout'
function Donators() {
    const [donates, setDonates] = useState()
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        async function fetchData() {
            let donatesRes = await getDonatesAll()
            console.log(donatesRes)
            setDonates(donatesRes?.data)

        }
        fetchData()
        return () => {
            fetchData()
        }

    }, [])

    return (

        <TableLayout>
            <HeaderList
                title={"Donadores"}
                name={"donadores"}
            />
            <HeaderTable
                columnsName={[
                    "nombre",
                    "apellido",
                    "Imagen",
                    "Email",
                    "Fecha",
                ]}
            />
            {/* <BodyTable
                list={donates}
                bodyName={"organizacion"}
                message={"¿Desea eliminar esta organización?"}
                afterMessage={"organización eliminada con éxito"}
                isLoad={isLoad}
                setIsLoad={setIsLoad}
                service={getDonatesAll}
              /> */}
        </TableLayout>

    )
}

export default Donators