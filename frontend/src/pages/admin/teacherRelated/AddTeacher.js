// AddTeacher.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSubjectDetails } from '../../../redux/sclassRelated/sclassHandle';
import Popup from '../../../components/Popup';
import { registerUser } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';
import { CircularProgress } from '@mui/material';

const AddTeacher = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subjectID = params.id;

  const { status, response, error } = useSelector(state => state.user);
  const { subjectDetails } = useSelector((state) => state.sclass);

  useEffect(() => {
    dispatch(getSubjectDetails(subjectID, "Subject"));
  }, [dispatch, subjectID]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const role = "Teacher";
  const school = subjectDetails && subjectDetails.school;
  const teachSubject = subjectDetails && subjectDetails._id;
  const teachSclass = subjectDetails && subjectDetails.sclassName && subjectDetails.sclassName._id;

  const fields = { name, email, password, role, school, teachSubject, teachSclass };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoader(true);
    dispatch(registerUser(fields, role));
  };

  useEffect(() => {
    if (status === 'added') {
      dispatch(underControl());
      navigate("/Admin/teachers");
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
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: '"Bree Serif", serif',
    }}>
      <div style={{
        width: '500px',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '15px',
        backgroundColor: '#f5f5f5',
        
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'center',
      }} className="register">
        <form className="registerForm" onSubmit={submitHandler}>
          <span className="registerTitle">Add Lecturer</span>
          <hr className="line" style={{ width: '100%', margin: '10px 0', borderBottom: '3px solid #000' }} />
          <br />
          <label>
            Subject : {subjectDetails && subjectDetails.subName}
          </label>
          <label>
            Class : {subjectDetails && subjectDetails.sclassName && subjectDetails.sclassName.sclassName}
          </label>
          <label>Name</label>
          <input className="registerInput" type="text" placeholder="Enter teacher's name..."
            style={{ width: '100%', border: '1px solid #000', padding: '8px' }}
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name" required />

          <label>Email</label>
          <input className="registerInput" type="email" placeholder="Enter teacher's email..."
            style={{ width: '100%', border: '1px solid #000', padding: '8px' }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email" required />

          <label>Password</label>
          <input className="registerInput" type="password" placeholder="Enter teacher's password..."
            style={{ width: '100%', border: '1px solid #000', padding: '8px' }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password" required />

          <button className="registerButton" type="submit" disabled={loader}>
            {loader ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Register'
            )}
          </button>
        </form>
        <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
      </div>
    </div>
  );
};

export default AddTeacher;
