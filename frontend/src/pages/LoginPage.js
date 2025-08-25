import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Grid,
    Box,
    Typography,
    Paper,
    TextField,
    CssBaseline,
    IconButton,
    InputAdornment,
    CircularProgress,
    Backdrop,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../assets/logo.jpg"
import { LightPurpleButton } from '../components/buttonStyles';
import styled from 'styled-components';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const defaultTheme = createTheme();

const StyledLink = styled(Link)`
    margin-top: 9px;
    text-decoration: none;
    color: #7f56da;
`;

const LoginPage = ({ role }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);;

    const [toggle, setToggle] = useState(false)
    const [guestLoader, setGuestLoader] = useState(false)
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rollNumberError, setRollNumberError] = useState(false);
    const [studentNameError, setStudentNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === "Student") {
            const rollNum = event.target.rollNumber.value;
            const studentName = event.target.studentName.value;
            const password = event.target.password.value;

            if (!rollNum || !studentName || !password) {
                if (!rollNum) setRollNumberError(true);
                if (!studentName) setStudentNameError(true);
                if (!password) setPasswordError(true);
                return;
            }
            const fields = { rollNum, studentName, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }

        else {
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                return;
            }

            const fields = { email, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }
    };

    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
        if (name === 'rollNumber') setRollNumberError(false);
        if (name === 'studentName') setStudentNameError(false);
    };

    const guestModeHandler = () => {
        const password = "zxc"

        if (role === "Admin") {
            const email = "yogendra@12"
            const fields = { email, password }
            setGuestLoader(true)
            dispatch(loginUser(fields, role))
        }
        else if (role === "Student") {
            const rollNum = "1"
            const studentName = "Dipesh Awasthi"
            const fields = { rollNum, studentName, password }
            setGuestLoader(true)
            dispatch(loginUser(fields, role))
        }
        else if (role === "Teacher") {
            const email = "tony@12"
            const fields = { email, password }
            setGuestLoader(true)
            dispatch(loginUser(fields, role))
        }
    }

    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') {
                navigate('/Admin/dashboard');
            }
            else if (currentRole === 'Student') {
                navigate('/Student/dashboard');
            } else if (currentRole === 'Teacher') {
                navigate('/Teacher/dashboard');
            }
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            setMessage("Network Error")
            setShowPopup(true)
            setLoader(false)
            setGuestLoader(false)
        }
    }, [status, currentRole, navigate, error, response, currentUser]);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{
                backgroundImage: 'linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)',
                backgroundImage: `url(${logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px',
            }}>
                <Paper elevation={6} sx={{ padding: '20px', maxWidth: '400px', minWidth: '300px', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <Typography variant="h3" sx={{ mb: 2, color:"#7f56da", textAlign: 'center' }}>
                        {role} Login
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        {role === "Student" ? (
                            <>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="rollNumber"
                                    label="Enter your Roll Number"
                                    name="rollNumber"
                                    autoComplete="off"
                                    type="number"
                                    autoFocus
                                    error={rollNumberError}
                                    helperText={rollNumberError && 'Roll Number is required'}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="studentName"
                                    label="Enter your name"
                                    name="studentName"
                                    autoComplete="name"
                                    autoFocus
                                    error={studentNameError}
                                    helperText={studentNameError && 'Name is required'}
                                    onChange={handleInputChange}
                                />
                            </>
                        ) : (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Enter your email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={emailError}
                                helperText={emailError && 'Email is required'}
                                onChange={handleInputChange}
                            />
                        )}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={toggle ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            error={passwordError}
                            helperText={passwordError && 'Password is required'}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setToggle(!toggle)}>
                                            {toggle ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                            <StyledLink href="#">
                                Forgot password?
                            </StyledLink>
                        </Grid>
                        <LightPurpleButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            {loader ?
                                <CircularProgress size={24} color="inherit" />
                                : "Login"}
                        </LightPurpleButton>
                        <Button
                            fullWidth
                            // onClick={"/Adminregister"}
                            variant="outlined"
                            sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                        >
                            <StyledLink to="/Adminregister">
                                Register
                            </StyledLink>
                        </Button>
                    </Box>
                </Paper>
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={guestLoader}
            >
                <CircularProgress color="primary" />
                Please Wait
            </Backdrop>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </ThemeProvider>
    );
}

export default LoginPage;