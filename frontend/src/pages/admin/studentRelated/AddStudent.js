import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';
import { getAllSclasses } from '../../../redux/sclassRelated/sclassHandle';
import { CircularProgress, Box } from '@mui/material';
import Popup from '../../../components/Popup';

const AddStudent = ({ situation }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error } = userState;
    const { sclassesList } = useSelector((state) => state.sclass);

    const [name, setName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('');
    const [className, setClassName] = useState('');
    const [sclassName, setSclassName] = useState('');

    const adminID = currentUser._id;
    const role = "Student";
    const attendance = [];

    useEffect(() => {
        if (situation === "Class") {
            setSclassName(params.id);
        }
    }, [params.id, situation]);

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        dispatch(getAllSclasses(adminID, "Sclass"));
    }, [adminID, dispatch]);

    const changeHandler = (event) => {
        if (event.target.value === 'Select Class') {
            setClassName('Select Class');
            setSclassName('');
        } else {
            const selectedClass = sclassesList.find(
                (classItem) => classItem.sclassName === event.target.value
            );
            setClassName(selectedClass.sclassName);
            setSclassName(selectedClass._id);
        }
    };

    const fields = { name, rollNum, password, sclassName, adminID, role, attendance };

    const submitHandler = (event) => {
        event.preventDefault();
        if (sclassName === "") {
            setMessage("Please select a classname");
            setShowPopup(true);
        } else {
            setLoader(true);
            dispatch(registerUser(fields, role));
        }
    };

    useEffect(() => {
        if (status === 'added') {
            dispatch(underControl());
            navigate(-1);
        } else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        } else if (status === 'error') {
            setMessage("Network Error");
            setShowPopup(true);
            setLoader(false);
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                fontFamily: '"Bree Serif", serif', // Added font style
            }}
        >
            <Box
                sx={{
                    width: '500px',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    alignItems: 'center',
                }}
            >
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <span style={{ textAlign: 'center', fontSize: '35px' }}>Add Student</span>
                    <hr style={{ width: '100%', margin: '10px 0', borderBottom: '3px solid #000' }} />

                    <label style={{ width: '100%', textAlign: 'left' }}>Name</label>
                    <input
                        className="registerInput"
                        type="text"
                        placeholder="Enter student's name..."
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoComplete="name"
                        required
                        style={{ width: '100%', border: '1px solid #000', padding: '8px' }}
                    />

                    {situation === "Student" && (
                        <>
                            <label style={{ width: '100%', textAlign: 'left' }}>Semester</label>
                            <select
                                className="registerInput"
                                value={className}
                                onChange={changeHandler}
                                required
                                style={{ width: '100%', border: '1px solid #000', padding: '8px' }}
                            >
                                <option value='Select Class'>Select Class</option>
                                {sclassesList.map((classItem, index) => (
                                    <option key={index} value={classItem.sclassName}>
                                        {classItem.sclassName}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}

                    <label style={{ width: '100%', textAlign: 'left' }}>USN Number</label>
                    <input
                        className="registerInput"
                        type="number"
                        placeholder="Enter student's Roll Number..."
                        value={rollNum}
                        onChange={(event) => setRollNum(event.target.value)}
                        required
                        style={{ width: '100%', border: '1px solid #000', padding: '8px' }}
                    />

                    <label style={{ width: '100%', textAlign: 'left' }}>Password</label>
                    <input
                        className="registerInput"
                        type="password"
                        placeholder="Enter student's password..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password"
                        required
                        style={{ width: '100%', border: '1px solid #000', padding: '8px' }}
                    />

                    <button className="registerButton" type="submit" disabled={loader} style={{ width: '100%' }}>
                        {loader ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Add'
                        )}
                    </button>
                </form>
            </Box>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </Box>
    );
};

export default AddStudent;
