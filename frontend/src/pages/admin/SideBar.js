import * as React from 'react';
import { ListItem, Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SideBar = () => {
    const location = useLocation();
    const isCurrentPath = (path) => location.pathname.startsWith(path);

    return (
        <Box sx={{ backgroundColor: '#CBA9F5', padding: '16px' }}>
            <ListItem
                component={Link}
                to="/"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <HomeIcon color={isCurrentPath("/") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem
                component={Link}
                to="/Admin/classes"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/Admin/classes") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/Admin/classes") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <ClassOutlinedIcon color={isCurrentPath("/Admin/classes") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="sems" />
            </ListItem>
            <ListItem
                component={Link}
                to="/Admin/subjects"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/Admin/subjects") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/Admin/subjects") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <AssignmentIcon color={isCurrentPath("/Admin/subjects") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem
                component={Link}
                to="/Admin/teachers"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/Admin/teachers") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/Admin/teachers") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <SupervisorAccountOutlinedIcon color={isCurrentPath("/Admin/teachers") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
            </ListItem>
            <ListItem
                component={Link}
                to="/Admin/students"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/Admin/students") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/Admin/students") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <PersonOutlineIcon color={isCurrentPath("/Admin/students") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
            <ListItem
                component={Link}
                to="/Admin/notices"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/Admin/notices") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/Admin/notices") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <AnnouncementOutlinedIcon color={isCurrentPath("/Admin/notices") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Notices" />
            </ListItem>
            <ListItem
                component={Link}
                to="/Admin/complains"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/Admin/complains") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/Admin/complains") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <ReportIcon color={isCurrentPath("/Admin/complains") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Complains" />
            </ListItem>
            <Divider sx={{ my: 1 }} />
            <ListSubheader component="div" inset>
                User
            </ListSubheader>
            <ListItem
                component={Link}
                to="/Admin/profile"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/Admin/profile") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/Admin/profile") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <AccountCircleOutlinedIcon color={isCurrentPath("/Admin/profile") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem
                component={Link}
                to="/logout"
                sx={{
                    '&:hover': { backgroundColor: 'white', borderRadius: '8px' },
                    backgroundColor: isCurrentPath("/logout") ? '#39427C' : 'inherit',
                    color: isCurrentPath("/logout") ? 'blue' : 'inherit'
                }}
            >
                <ListItemIcon>
                    <ExitToAppIcon color={isCurrentPath("/logout") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </Box>
    );
}

export default SideBar;
