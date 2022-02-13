import React, { useState, useEffect } from 'react';
import usersServices from '../../../services/users';

export default function ListUsers() {
    const [ allUsers, setAllUsers ] = useState([]);

    const getUsers = async () => {
        const { users } = await usersServices.getAllUsers();
        setAllUsers(users);
    }

    const deleteUser = async id => {
        await usersServices.deleteUser(id);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <table className='border-collapse table-auto w-full flex flex-col text-sm items-center'>
            <thead>
                <tr>
                    <th className='border-b dark:border-slate-600 font-black p-4 pl-8 pt-0 pb-3 text-slate-400 text-left text-base'>Nombre</th>
                    <th className='border-b dark:border-slate-600 font-black p-4 pl-8 pt-0 pb-3 text-slate-400 text-left text-base'>Apellido</th>
                    <th className='border-b dark:border-slate-600 font-black p-4 pl-8 pt-0 pb-3 text-slate-400 text-left text-base'>Email</th>

                    <th className='border-b dark:border-slate-600 font-black p-4 pl-8 pt-0 pb-3 text-slate-400 text-left text-base'>Acción</th>
                </tr>
            </thead>
            <tbody className='bg-ong-sky'>
                {
                    allUsers.map(user => (
                        <tr key={user.id}>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 text-slate-200 dark:text-slate-600'>{user.firstName}</td>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 text-slate-200 dark:text-slate-600'>{user.lastName}</td>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 text-slate-200 dark:text-slate-600'>{user.email}</td>

                            <td className='border-b border-slate-100 dark:border-slate-700 text-ong-red p-4'><button onClick={() => deleteUser(user.id)}>Eliminar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}