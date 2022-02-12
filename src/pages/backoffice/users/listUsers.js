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
        <table class='table-auto'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>

                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>

                            <td>Editar</td>
                            <td><button onClick={() => deleteUser(user.id)}>Eliminar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}