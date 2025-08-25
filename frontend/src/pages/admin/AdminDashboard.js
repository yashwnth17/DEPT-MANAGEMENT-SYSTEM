import React, { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Drawer } from '../../components/styles';
import Logout from '../Logout';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';
import AddStudent from './studentRelated/AddStudent';
import SeeComplains from './studentRelated/SeeComplains';
import ShowStudents from './studentRelated/ShowStudents';
import StudentAttendance from './studentRelated/StudentAttendance';
import StudentExamMarks from './studentRelated/StudentExamMarks';
import ViewStudent from './studentRelated/ViewStudent';
import AddNotice from './noticeRelated/AddNotice';
import ShowNotices from './noticeRelated/ShowNotices';
import ShowSubjects from './subjectRelated/ShowSubjects';
import SubjectForm from './subjectRelated/SubjectForm';
import ViewSubject from './subjectRelated/ViewSubject';
import AddTeacher from './teacherRelated/AddTeacher';
import ChooseClass from './teacherRelated/ChooseClass';
import ChooseSubject from './teacherRelated/ChooseSubject';
import ShowTeachers from './teacherRelated/ShowTeachers';
import TeacherDetails from './teacherRelated/TeacherDetails';
import AddClass from './classRelated/AddClass';
import ClassDetails from './classRelated/ClassDetails';
import ShowClasses from './classRelated/ShowClasses';
import AccountMenu from '../../components/AccountMenu';
import HomeIcon from "@mui/icons-material/Home";
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ReportIcon from '@mui/icons-material/Report';

import logocit from '../../assets/logocit.jpg';


const LogoTitle = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logocit} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />

            
            
        </div>
    );
};


const AdminDashboard = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar open={open} position='absolute'>
                    <Toolbar sx={ styles.appStyled}>
                        <LogoTitle />
                        <ListItemButton component={Link} to="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>

                        <ListItemButton component={Link} to="/Admin/classes">
                            <ListItemIcon>
                                <ClassOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Semester" />
                        </ListItemButton>

                        <ListItemButton component={Link} to="/Admin/subjects">
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Subjects" />
                        </ListItemButton>

                        <ListItemButton component={Link} to="/Admin/teachers">
                            <ListItemIcon>
                                <SupervisorAccountOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lecturers" />
                        </ListItemButton>

                        <ListItemButton component={Link} to="/Admin/students">
                            <ListItemIcon>
                                <PersonOutlineIcon />
                            </ListItemIcon>
                            <ListItemText primary="Students" />
                        </ListItemButton>

                        <ListItemButton component={Link} to="/Admin/notices">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon  />
                    </ListItemIcon>
                    <ListItemText primary="Notices" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/complains">
                    <ListItemIcon>
                        <ReportIcon  />
                    </ListItemIcon>
                    <ListItemText primary="Complains" />
                </ListItemButton>

                        <AccountMenu />
                    </Toolbar>
                </AppBar>
               

                {/* <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider /> */}
                    {/* <List component="nav">
                    <img
    
    
    style={{
        width: '100%', 
        height: '1100%', 
        marginRight: '10px',
    }}
/> */}

                       
                    {/* </List> */}
                {/* </Drawer> */}

                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<AdminHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Admin/dashboard" element={<AdminHomePage />} />
                        <Route path="/Admin/profile" element={<AdminProfile />} />
                        <Route path="/Admin/complains" element={<SeeComplains />} />

                        {/* Notice */}
                        <Route path="/Admin/addnotice" element={<AddNotice />} />
                        <Route path="/Admin/notices" element={<ShowNotices />} />

                        {/* Subject */}
                        <Route path="/Admin/subjects" element={<ShowSubjects />} />
                        <Route path="/Admin/subjects/subject/:classID/:subjectID" element={<ViewSubject />} />
                        <Route path="/Admin/subjects/chooseclass" element={<ChooseClass situation="Subject" />} />

                        <Route path="/Admin/addsubject/:id" element={<SubjectForm />} />
                        <Route path="/Admin/class/subject/:classID/:subjectID" element={<ViewSubject />} />

                        <Route path="/Admin/subject/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
                        <Route path="/Admin/subject/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />

                        {/* Class */}
                        <Route path="/Admin/addclass" element={<AddClass />} />
                        <Route path="/Admin/classes" element={<ShowClasses />} />
                        <Route path="/Admin/classes/class/:id" element={<ClassDetails />} />
                        <Route path="/Admin/class/addstudents/:id" element={<AddStudent situation="Class" />} />

                        {/* Student */}
                        <Route path="/Admin/addstudents" element={<AddStudent situation="Student" />} />
                        <Route path="/Admin/students" element={<ShowStudents />} />
                        <Route path="/Admin/students/student/:id" element={<ViewStudent />} />
                        <Route path="/Admin/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} />
                        <Route path="/Admin/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} />

                        {/* Teacher */}
                        <Route path="/Admin/teachers" element={<ShowTeachers />} />
                        <Route path="/Admin/teachers/teacher/:id" element={<TeacherDetails />} />
                        <Route path="/Admin/teachers/chooseclass" element={<ChooseClass situation="Teacher" />} />
                        <Route path="/Admin/teachers/choosesubject/:id" element={<ChooseSubject situation="Norm" />} />
                        <Route path="/Admin/teachers/choosesubject/:classID/:teacherID" element={<ChooseSubject situation="Teacher" />} />
                        <Route path="/Admin/teachers/addteacher/:id" element={<AddTeacher />} />

                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
};

export default AdminDashboard;

const styles = {
    boxStyled: {
        background: '#8e9eab', 
        background: '-webkit-linear-gradient(to right, #8e9eab, #eef2f3)',  
        background: 'linear-gradient(to right, #8e9eab, #eef2f3)', 

        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    appStyled:{
        background: '#f12711',  
        background: '-webkit-linear-gradient(to right, #f5af19, #f12711)',  
        background: 'linear-gradient(to right, #f5af19, #f12711)', 
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
};