import React from 'react';
import '../styles/Sidebar.css';

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Sidebar() {
    return (
        <div className="sidebar_container">
            <div className="sidebarIcon">
                <SupervisorAccountOutlinedIcon className="icon"/>
                <p>Personnal</p>
            </div>
            <div className="sidebarIcon">
                <ExploreOutlinedIcon className="icon"/>
                <p>Who's away</p>
            </div>
            <div className="sidebarIcon">
                <NotificationsActiveOutlinedIcon className="icon" />
                <p>News</p>
            </div>
            <div className="sidebarIcon">
                <EventBusyOutlinedIcon className="icon" />
                <p>Events</p>
            </div>
            <div className="sidebarIcon">
                <SettingsOutlinedIcon className="icon" />
                <p>Settings</p>
            </div>
        </div>
    )
}

export default Sidebar
