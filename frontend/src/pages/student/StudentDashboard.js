import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StudentSideBar from './StudentSideBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import StudentHomePage from './StudentHomePage';
import StudentProfile from './StudentProfile';
import StudentSubjects from './StudentSubjects';
import ViewStdAttendance from './ViewStdAttendance';
import StudentComplain from './StudentComplain';
import Logout from '../Logout'
import AccountMenu from '../../components/AccountMenu';
import { AppBar, Drawer } from '../../components/styles';

import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';

import logocit from '../../assets/logocit.jpg';

const StudentDashboard = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                
                <AppBar open={open} position='absolute'>
                    <Toolbar   sx={ styles.appStyled}>
                    <img src={logocit} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
                       
                       
                        <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/subjects">
                    <ListItemIcon>
                        <AssignmentIcon  />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/attendance">
                    <ListItemIcon>
                        <ClassOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Attendance" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/complain">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon  />
                    </ListItemIcon>
                    <ListItemText primary="Complain" />
                </ListItemButton>
                        <AccountMenu />
                    </Toolbar>
                </AppBar>
                
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<StudentHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Student/dashboard" element={<StudentHomePage />} />
                        <Route path="/Student/profile" element={<StudentProfile />} />

                        <Route path="/Student/subjects" element={<StudentSubjects />} />
                        <Route path="/Student/attendance" element={<ViewStdAttendance />} />
                        <Route path="/Student/complain" element={<StudentComplain />} />

                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default StudentDashboard

const styles = {
    boxStyled: {
        background: '#8e9eab',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #8e9eab, #eef2f3)',  
        background: 'linear-gradient(to right, #8e9eab, #eef2f3)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },

    appStyled: {
        background: '#f12711',
        background: '-webkit-linear-gradient(to right, #f5af19, #f12711)',
        background: 'linear-gradient(to right, #f5af19, #f12711)',
        display: 'flex',  // Set display to flex
        justifyContent: 'center',  // Center content horizontally
        alignItems: 'center',  // Center content vertically
        pr: '24px',
    },


    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}