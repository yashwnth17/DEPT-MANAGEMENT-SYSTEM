// Import React and other necessary components
import React from 'react';
import { useSelector } from 'react-redux';

// Your existing component
const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div style={styles.container}>
           

            <div style={styles.flexContainer}>
                <div style={styles.userInfo}>
                <h2 style={styles.heading}>Admin Details</h2>
                    <p>Name: {currentUser.name}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>School: {currentUser.schoolName}</p>
                </div>
                
              
            </div>
        </div>
    );
};

// Your updated styles with flex properties and colors
const styles = {
    container: {
        padding: '20px',
       
      
    },
    heading: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center', // Align items in the center horizontally
      
        padding: '20px', // Add some padding for better visibility
        borderRadius: '8px', // Add border radius for rounded corners
    },
    userInfo: {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '8px',
       
        maxWidth: '300px', // Set a max width for the user info container
        margin: 'auto', // Center the container within the flex container
        backgroundColor: '#e0e0e0', // Background color for the user info container
    },
   
};

export default AdminProfile;
