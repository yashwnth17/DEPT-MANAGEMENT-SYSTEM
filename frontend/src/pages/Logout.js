import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import styled from 'styled-components';

const Logout = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <CenteredContainer>
            <LogoutContainer>
                <h1>{currentUser.name}</h1>
                <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
                <ButtonContainer>
                    <LogoutButtonLogout onClick={handleLogout}>Log Out</LogoutButtonLogout>
                    <LogoutButtonCancel onClick={handleCancel}>Cancel</LogoutButtonCancel>
                </ButtonContainer>
            </LogoutContainer>
        </CenteredContainer>
    );
};

export default Logout;

const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Set the height to 100% of the viewport height */
`;

const LogoutContainer = styled.div`
    width: 400px; /* Set your preferred width */
    height: 300px; /* Set your preferred height */
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: #85769f66;
    color: black;
`;

const LogoutMessage = styled.p`
    margin-bottom: 20px;
    font-size: 16px;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const LogoutButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #333;
    }
`;

const LogoutButtonLogout = styled(LogoutButton)`
    background-color: #ea0606;
`;

const LogoutButtonCancel = styled(LogoutButton)`
    background-color: rgb(99, 60, 99); 
`;
