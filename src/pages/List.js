import React, {useState} from 'react';

function User({userData}) {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
}

function UserList() {
    const users = [
        { email: 'user1@gmail.com', name: '유재석' },
        { email: 'user2@gmail.com', name: '김종국' },
        { email: 'user3@gmail.com', name: '하하' },
        { email: 'user4@gmail.com', name: '지석진' }
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>                  
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    );
}

export default UserList;