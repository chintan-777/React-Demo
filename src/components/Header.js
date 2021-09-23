import React from 'react';
import { Avatar } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import '../styles/Header.css';

function Header() {

        const user = {
                name : "Chintan",
                email : "chintan.sojitra@ghd.com",
                position : "Developer"
        }

        return (
                <div className="header">
                        <div className="userInfo">
                                <Avatar>{user.email[0]}</Avatar>
                                <div className="info">
                                        <p>{user.name}</p>
                                        <p>{user.position}</p>
                                </div>
                        </div>
                        <div className="buttons">
                                <div className="ind_btn">
                                        <NotificationsActiveOutlinedIcon />
                                        <p> Notifications </p>
                                </div>
                                <div className="ind_btn">
                                        <SettingsOutlinedIcon />
                                        <p>Settings</p>
                                </div>
                                <div className="ind_btn">
                                        <LogoutIcon />
                                        <p>Logout</p>
                                </div>
                        </div>
                </div>
        )
}

export default Header
