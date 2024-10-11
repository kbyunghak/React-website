import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
};

const UserList = () => {
    const users =[
        {email: 'a@gamil.com', name:'aName'},
        {email: 'b@gamil.com', name:'bName'},
        {email: 'c@gamil.com', name:'cName'},
        {email: 'd@gamil.com', name:'dName'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tdoby>
                {users.map((user) => (
                    <User userData={user} />
                ))}
            </tdoby>            
        </table>
    );

};

export default UserList;