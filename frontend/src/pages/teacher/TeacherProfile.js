import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TeacherProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const teachSclass = currentUser.teachSclass
  const teachSubject = currentUser.teachSubject
  const teachSchool = currentUser.school

  return (
    <>
      <ProfileCard>
        <ProfileCardContent>
          <ProfileText>Name: {currentUser.name}</ProfileText>
          <ProfileText>Email: {currentUser.email}</ProfileText>
          <ProfileText>Class: {teachSclass.sclassName}</ProfileText>
          <ProfileText>Subject: {teachSubject.subName}</ProfileText>
          <ProfileText>School: {teachSchool.schoolName}</ProfileText>
        </ProfileCardContent>
      </ProfileCard>
    </>
  )
}

export default TeacherProfile

const ProfileCard = styled(Card)`
  margin: 20px;
  width: 300px;
  border-radius: 10px;
  align-items: 'center';
  background-color: '#e0e0e0';
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;


const ProfileCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  backgroundColor: '#e0e0e0',
  
 
`;

const ProfileText = styled(Typography)`
  margin: 10px;
  
`;
