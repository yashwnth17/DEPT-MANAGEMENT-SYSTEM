import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  AppBar,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';
import Homepage from '../assets/Homepage.jpeg';
import { LightPurpleButton } from '../components/buttonStyles';


const StyledHeader = styled.header`
  background-color: #333;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Logo component
const Logo = styled.img`
  max-width: 100%; /* Set max-width to 100% to make the logo responsive */
  height: auto;
  max-height: 100px; /* Set max-height to control the logo's height */
`;

// Typography component
const Typography = styled.h1`
  color: #fff;
`;

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = 'zxc';

  const { status, currentUser, currentRole } = useSelector((state) => state.user);

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState('Welcome');

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const navigateHandler = (user) => {
    if (user === 'Admin') {
      if (visitor === 'guest') {
        const email = 'yogendra@12';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === 'Student') {
      if (visitor === 'guest') {
        const rollNum = '1';
        const studentName = 'Dipesh Awasthi';
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === 'Teacher') {
      if (visitor === 'guest') {
        const email = 'tony@12';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }

      // After successful navigation, update the currentSection state
      setCurrentSection(user);
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage('Network Error');
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <>
    <AppBar sx={{display:'flex'}}>
    
      </AppBar>
      <StyledHeader>
        <Logo src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_2880,h_168/http://www.cittumkur.org/wp-content/uploads/2022/11/29166f-scaled.jpg" alt="Logo" />
       
      </StyledHeader>
      <StyledContainer>
        <Container>
          {/* Welcome Section */}
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <StyledTitle>
                  Department of 
                  <br />
                  Information Science
                  <br />
                  and Engineering
                </StyledTitle>
                <StyledText>
                  The Department of Information Science and Engineering (ISE) was established in the year 2001 with the vision to educate and train the students to impart strong fundamental knowledge in the field of Information Science and Engineering and offer a high-quality education in the science of computing. The department offers B.E. Information Science and Engineering program with an annual intake of 60 students.
                </StyledText>
                <StyledBox>
                  
                </StyledBox>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={Homepage}
                alt="Homepage"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onLoad={handleImageLoad}
              />
            </Grid>
          </Grid>
        </Container>
        {imageLoaded && (
          <Grid container spacing={2} justifyContent="center">
            {/* Admin Section */}
            <Grid item xs={12} sm={6} md={4} marginTop={3}>
              <div onClick={() => navigateHandler('Admin')}>
                <StyledPaper elevation={3}>
                  <Box mb={2}>
                    <AccountCircle fontSize="large" />
                  </Box>
                  <StyledTypography>
                    Admin
                  </StyledTypography>
                </StyledPaper>
              </div>
            </Grid>
            {/* Student Section */}
            <Grid item xs={12} sm={6} md={4} marginTop={3} >
              <StyledPaper elevation={3}>
                <div onClick={() => navigateHandler('Student')}>
                  <Box mb={2}>
                    <School fontSize="large" />
                  </Box>
                  <StyledTypography>
                    Student
                  </StyledTypography>
                </div>
              </StyledPaper>
            </Grid>
            {/* Teacher Section */}
            <Grid item xs={12} sm={6} md={4} marginTop={3}>
              <StyledPaper elevation={3}>
                <div onClick={() => navigateHandler('Teacher')}>
                  <Box mb={2}>
                    <Group fontSize="large" />
                  </Box>
                  <StyledTypography>
                    Teacher
                  </StyledTypography>
                </div>
               
              </StyledPaper>
            </Grid>
          </Grid>
        )}
      </StyledContainer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
      
    </>
   
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
background: #5614b0; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #5614b0, #dbd65c); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #5614b0, #dbd65c); 
  height: 110vh;
  display: flex;
  flex-direction: column; /* Adjust the flex direction to column */
  justify-content: flex-start; /* Align items to the top */
  align-items: center; /* Center items along the main axis */
  padding: 2rem;
`;



const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: rgba(60, 60, 60, 0.15); 
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #2c2c6c;
    color: white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  font-family: "Bree Serif", serif;

`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Bree Serif", serif;
  font-weight: bold;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;