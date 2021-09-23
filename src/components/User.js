import React from 'react';
import { Avatar } from '@mui/material';


function User({name, email, phone}) {
    return (
        <div className="user">
            <Avatar>{email[0]}</Avatar>
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    )
}

export default User
