import React, { useState, useEffect } from 'react';
import usersServices from '../../../services/users';
import NotFoundComponent from '../../../components/Shared/Others/NotFoundComponent';
import BodyTable from '../../../components/Shared/Table/BodyTable';
import HeaderTable from '../../../components/Shared/Table/HeaderTable';
import TableLayout from '../../../components/Shared/Table/TableLayout';
import CenterResponsiveContainer from '../../../components/Shared/Containers/CenterResponsiveContainer';

export default function BackofficeListUsers() {
    const [ allUsers, setAllUsers ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(false);

    const getUsers = async () => {
        const res = await usersServices.getAllUsers();
        const modified = res?.data?.users?.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }));
        setAllUsers(modified);
    }

    useEffect(() => {
        getUsers();
    }, [isLoad]);

    return (
        <CenterResponsiveContainer>
        <header className='flex sm:flex-row flex-col  items-center justify-around mb-7'>
                <h1 className="sm:text-5xl text-3xl text-center text-sky-500">Usuarios</h1>
        </header>
        {
            allUsers?.length ? (
                <TableLayout>
                    <HeaderTable columnsName={['ID', 'Nombre', 'Apellido', 'Email', 'Rol']} />
                    <BodyTable
                        isLoad={isLoad}
                        setIsLoad={setIsLoad}
                        service={usersServices.deleteUser}
                        list={allUsers}
                        bodyName={'usuario'}
                        message={'¿Desea eliminar a este usuario?'}
                        afterMessage={'Usuario eliminado con éxito'}
                    />
                </TableLayout>
            ) : <NotFoundComponent title={'No se encontraron usuarios'} />
        }
        </CenterResponsiveContainer>
    );
}