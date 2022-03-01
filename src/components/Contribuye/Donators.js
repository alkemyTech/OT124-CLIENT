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
            let donatesResNew = donatesRes?.data.map(e => {
                let donates = Object.create(e.donates)
                donates.images = {key:''}
                switch (donates.award) {
                    case 'gold':
                        donates.images.key = '9ab88778-2003-4e7f-8f15-fca80f7c5350'
                        break;
                    case 'silver':
                        donates.images.key = '83294e9c-5b62-4011-8b0c-d8a6f91b578f'
                        break;
                    case 'bronce':
                        donates.images.key = 'bf06bd1e-2637-4a60-bd57-37260948a3b6'
                        break;
                        case 'noobie':
                            donates.images.key = '79c191b9-b73f-4ea6-bf36-2241fe3904ce'
                            break;
                    default:
                        donates.images.key ='79c191b9-b73f-4ea6-bf36-2241fe3904ce'
                        break;
                }

                delete e["donates"]
                delete e["role"]
                delete e["email"]
                return {
                    ...e,
                    amounts: donates.amounts,
                    image:   donates.images

                }

            })
            console.log(donatesResNew)
            setDonates(donatesResNew)

        }
        fetchData()
        return () => {
            fetchData()
        }

    }, [])

    return (
        <div className='min-w-full w-full'>
            <TableLayout notBackOffice={true}>

                <HeaderTable
                    notBackOffice={true}
                    columnsName={[
                        "nombre",
                        "apellido",
                        "cantidad",
                        "premio",

                    ]}
                />
                <BodyTable
                    notBackOffice={true}
                    list={donates}
                    bodyName={"organizacion"}
                    message={"¿Desea eliminar esta organización?"}
                    afterMessage={"organización eliminada con éxito"}
                    isLoad={isLoad}
                    setIsLoad={setIsLoad}

                />
            </TableLayout>
        </div>
    )
}

export default Donators